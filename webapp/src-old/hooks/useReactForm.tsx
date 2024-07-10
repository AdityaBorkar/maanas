// Types:
import type { FieldValues, UseFormReturn } from "react-hook-form";
type useReactFormProps = {
  // todo - write typescript:
  defaultData?: any;
  schema: any;
};
type FormPropsType = {
  onSubmit: (data: any) => Promise<void>;
  className?: string;
  children: React.ReactNode;
};
type getYupPropsReturn = {
  type: "text" | "list";
  required: boolean;
  label: string;
  list?: string[];
};
export interface ReactHookContext extends UseFormReturn<FieldValues> {
  getYupProps: (FieldName: string) => getYupPropsReturn;
}

// Libraries:
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";

// Hook:
export default function useReactForm(props: useReactFormProps) {
  // React Hook Form Config:
  const schema = props.schema;
  const FormProps = useForm({
    defaultValues: props.defaultData,
    resolver: yupResolver(schema),
  });

  // Get Properties from `yup` form schema:
  function getProps(FIELD_NAME: string): getYupPropsReturn {
    // Assign specific field to `FIELD_PROPS`
    let FIELD_PROPS = schema;
    const FieldPath = FIELD_NAME.replace(/\.(\d+)/gim, "").split(".");
    FieldPath.forEach((name) => {
      switch (FIELD_PROPS.type) {
        case "array":
          FIELD_PROPS = FIELD_PROPS.innerType.fields[name];
          break;
        case "object":
        default:
          FIELD_PROPS = FIELD_PROPS.fields[name];
      }
    });

    // Error Handling:
    if (FIELD_PROPS === undefined)
      throw new Error(`Invalid Field Name: ${FIELD_NAME}`);

    // Determining Field Type
    return {
      label: FIELD_PROPS.spec.label,
      required: !FIELD_PROPS.spec.optional,
      type: FIELD_PROPS.type === "string" ? "text" : FIELD_PROPS.type,
      list: Array.from(FIELD_PROPS._whitelist),
    };
  }

  // Form Render:
  const Form = useMemo(() => FormComponent, []);
  function FormComponent(props: FormPropsType) {
    return (
      // @ts-ignore
      <FormProvider {...FormProps} getYupProps={getProps}>
        <form
          className={props.className}
          onSubmit={FormProps.handleSubmit(props.onSubmit)}
        >
          {props.children}
        </form>
      </FormProvider>
    );
  }

  // Return:
  return { FormProps, Form };
}
