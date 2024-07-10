import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { ReactHookContext } from '@/hooks/useReactForm'

// Types:
type CheckboxInputPropsType = {
  label: string
  name?: string
  onChange?: (value: boolean) => void
}

// Component:
export function CheckboxInput(props: CheckboxInputPropsType) {
  // React Hook Form:
  const NAME = props.name || ''
  const FormMethods = useFormContext() as ReactHookContext
  const FieldProps = FormMethods.getYupProps(NAME)

  // Properties:
  const REQUIRED = FieldProps?.required || false
  // const INPUT_TYPE = props?.type || FieldProps?.type || "text";
  const LABEL_TEXT = props?.label || FieldProps?.label || ''
  const ERROR_MESSAGE = FormMethods.formState.errors[NAME]?.message?.toString()

  // Render:

  // Value:
  const [value, setValue] = useState(false)
  const ChangeCheckbox = () => {
    setValue(!value)
    // props.onChange && props.onChange(!value);
  }
  // Render:
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="checkbox"
        className="rounded-md border px-3 py-2"
        defaultChecked={value}
        // onChange={(e) => props.onChange(e.target.checked)}
      />

      <label
        onClick={ChangeCheckbox}
        className="text-sm font-medium text-neutral-700"
      >
        {props.label}
      </label>
    </div>
  )
}
