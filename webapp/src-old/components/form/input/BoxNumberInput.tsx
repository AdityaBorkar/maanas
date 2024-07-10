'use client'

// Types:
import type { ChangeEvent, KeyboardEventHandler } from 'react'
// Libraries:
import { useState } from 'react'
import type {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form'

type InputPropsType = {}
interface BoxedNumberInputProps extends InputPropsType {
  name?: string
  type?: string
  label?: string
  digits: number
  inputProps?: any
  className?: string
  on?: KeyboardEventHandler<HTMLInputElement>
  ReactHookFormProps?: {
    register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
    errorMessage: FieldErrors
    required: boolean
    label: string
    type: string
    getValue: () => any
    setValue: (val: any) => void
  }
}

// Components:
export default function BoxNumberInput(props: BoxedNumberInputProps) {
  // React Hook Form:
  const NAME = props.name || '`'
  const FormProps = props?.ReactHookFormProps

  // Basics:
  const TOTAL_DIGITS = props.digits
  const CLASSNAME = props?.className || ''
  const REQUIRED = FormProps?.required || false
  const INPUT_TYPE = props?.type || FormProps?.type || 'text'
  const ERROR_MESSAGE = FormProps?.errorMessage || ''
  const LABEL_TEXT = props.label
    ? props.label
    : FormProps
      ? FormProps.label
      : ''

  // Set Default Value:
  const DefaultValue = (FormProps?.getValue() || '').toString().split('')
  const UNFILLED_SPACES = TOTAL_DIGITS - DefaultValue.length
  if (UNFILLED_SPACES > 0) DefaultValue.push(...Array(UNFILLED_SPACES).fill(''))
  const [INPUT_VALUE, SET_INPUT_VALUE] = useState<string[]>(DefaultValue)

  // Input Value Handlers:
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    SET_INPUT_VALUE((INPUT_VALUE) => {
      const { value } = e.target
      const newValue = [...INPUT_VALUE]
      newValue[index] = value
      FormProps?.setValue(newValue.join(''))
      return newValue
    })
  }

  // Render:
  return (
    <div className="mx-auto block w-fit">
      <label
        className="text-left text-sm text-neutral-600 transition-all"
        onClick={(e: any) => e.target.previousSibling.focus()}
      >
        {LABEL_TEXT}
        {REQUIRED ? '*' : null}
      </label>

      <div className="mx-auto mt-2 flex flex-row gap-1">
        {INPUT_VALUE.map((value, index) => (
          <input
            key={index}
            type="text"
            className="w-[30px] rounded border-2 px-2 py-1 text-center"
            onKeyUp={(e: any) => {
              if (e.key === 'Backspace') e.target.previousSibling?.focus()
              else if (e.key === 'ArrowLeft') e.target.previousSibling?.focus()
              else if (e.key === 'ArrowRight') e.target.nextSibling?.focus()
              else if (
                e.key === 'Tab' ||
                e.shiftKey ||
                e.key === 'ShiftLeft' ||
                e.key === 'Shift'
              )
                return console.log('ignored')
              else e.target.nextSibling?.focus()
            }}
            maxLength={1}
            value={value}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
    </div>
  )
}
