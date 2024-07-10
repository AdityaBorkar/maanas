// Types:
import { KeyboardEventHandler, MouseEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { ReactHookContext } from '@/hooks/useReactForm'

interface InputComponentPropType {
  name?: string
  values: string[]
  // type?: string;
  label?: string
  inputProps?: any
  on?: KeyboardEventHandler<HTMLInputElement>
}

// Main Function:
export default function ToggleInput(props: InputComponentPropType) {
  // React Hook Form:
  const NAME = props.name || '`'
  const FormMethods = useFormContext() as ReactHookContext
  const FieldProps = FormMethods.getYupProps(NAME)

  // Properties:
  const REQUIRED = FieldProps?.required || false
  // const INPUT_TYPE = props?.type || FieldProps?.type || "text";
  const LABEL_TEXT = props?.label || FieldProps?.label || ''
  const ERROR_MESSAGE = FormMethods.formState.errors[NAME]?.message?.toString()

  // Value:
  const LIST = props.values || []
  const [selectedValue, setSelectedValue] = useState(LIST[0])

  // Render:
  return (
    <div className="relative mt-3">
      <label
        className="text-sm text-neutral-600 transition-all"
        onClick={(e: MouseEvent<HTMLLabelElement>) =>
          // @ts-ignore
          e.target.nextSibling?.focus()
        }
      >
        {LABEL_TEXT}
        {REQUIRED ? '*' : null}
      </label>

      <div className="mt-1 flex w-fit flex-row divide-x-2 rounded border-2 text-sm">
        {LIST.map((value, index) => (
          <div
            className={`cursor-pointer px-2 py-1 ${
              (selectedValue === value && 'bg-neutral-200 ') +
              (index === 0 ? 'rounded-l' : '') +
              (index === props.values.length - 1 ? 'rounded-r' : '')
            }`}
            onClick={() => setSelectedValue(value)}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>

      <div
        className="mt-2 block text-left text-red-900"
        style={{ display: ERROR_MESSAGE ? 'block' : 'none' }}
      >
        {`▲ ${ERROR_MESSAGE}`}
      </div>
    </div>
  )
}
