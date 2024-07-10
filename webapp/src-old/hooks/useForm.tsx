import { yupResolver } from '@hookform/resolvers/yup'
import { FormHTMLAttributes } from 'react'
import { FormProvider, useForm as useReactForm } from 'react-hook-form'

type useFormWithServerActionsProps = {
  // TODO: Type:
  schema: any
  defaultData?: any
}

// * FORM HOOK:
export default function useForm(props: useFormWithServerActionsProps) {
  const FormSchema = props.schema
  const FormProps = useReactForm({
    defaultValues: props.defaultData,
    resolver: yupResolver(FormSchema),
  })

  function Form(props: FormHTMLAttributes<HTMLFormElement>) {
    // TODO: ACTIVATE SERVER ACTIONS
    return (
      <FormProvider
        {...FormProps}
        getYupProps={(name: string) => getProps(name, FormSchema)}
      >
        <form
          {...props}
          //    onSubmit={FormProps.handleSubmit(props.onSubmit)}
        >
          {props.children}
        </form>
      </FormProvider>
    )
  }

  return { Form, FormProps }
}

// * Get Properties from `yup` form schema:
type getYupPropsReturn = {
  type: 'text' | 'list'
  required: boolean
  label: string
  list?: string[]
}
function getProps(FIELD_NAME: string, FORM_SCHEMA: any): getYupPropsReturn {
  // Assign specific field to `FIELD_PROPS`
  let FIELD_PROPS = FORM_SCHEMA
  const FieldPath = FIELD_NAME.replace(/\.(\d+)/gim, '').split('.')
  FieldPath.forEach((name) => {
    switch (FIELD_PROPS.type) {
      case 'array':
        FIELD_PROPS = FIELD_PROPS.innerType.fields[name]
        break
      case 'object':
      default:
        FIELD_PROPS = FIELD_PROPS.fields[name]
    }
  })

  // Error Handling:
  if (FIELD_PROPS === undefined)
    throw new Error(`Invalid Field Name: ${FIELD_NAME}`)

  // Determining Field Type
  return {
    label: FIELD_PROPS.spec.label,
    required: !FIELD_PROPS.spec.optional,
    type: FIELD_PROPS.type === 'string' ? 'text' : FIELD_PROPS.type,
    list: Array.from(FIELD_PROPS._whitelist),
  }
}
