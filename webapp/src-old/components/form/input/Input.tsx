// Types:
// Libraries:
import { useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import type { IconType } from 'react-icons'
import { HiOutlineCurrencyRupee } from 'react-icons/hi2'

import type { ReactHookContext } from '@/hooks/useReactForm'

type InputType = 'currency' | 'text' | 'number' | 'date'
interface InputProps {
  // Properties:
  name?: string
  type?: InputType
  label?: string
  required?: boolean
  // Input:
  icon?: IconType
  inputProps?: any
  inputClass?: string
  placeholder?: string
  // Wrapper:
  hideLabel?: boolean
  wrapperClass?: string
  // Events:
  on?: React.KeyboardEventHandler<HTMLInputElement>
}

// Main Function:
export default function Input(props: InputProps) {
  // React Hook Form:
  const NAME = props.name || ''
  const FormMethods = useFormContext() as ReactHookContext
  const FieldProps = FormMethods.getYupProps(NAME)
  const { ref, ...inputProps } = FormMethods.register(NAME)
  const InputRef = useRef<HTMLInputElement>(null)

  // Properties:
  const REQUIRED = props?.required || FieldProps?.required || false
  const INPUT_TYPE = props?.type || FieldProps?.type || 'text'
  const LABEL_TEXT = props?.label || FieldProps?.label || ''
  const ERROR = eval(
    `FormMethods.formState.errors?.${NAME.replace(
      /\.(\d+)\./g,
      '.[$1].',
    ).replaceAll('.', '?.')}`,
  )
  const ERROR_MESSAGE = ERROR?.message?.toString() || ''

  // Raise custom invalid event:
  InputRef.current?.setCustomValidity(ERROR_MESSAGE || '')

  // Styling:
  // TODO - [currency] Add commas formatting to the input value
  const InputClass =
    INPUT_TYPE === 'currency'
      ? 'pl-8 text-right'
      : INPUT_TYPE === 'number'
        ? 'tracking-widest'
        : INPUT_TYPE === 'date'
          ? ''
          : INPUT_TYPE === 'text'
            ? ''
            : ''

  // Render:
  return (
    <div className={`relative ${props.wrapperClass}`}>
      {props.hideLabel || (
        <label
          className="pb-1 text-sm text-neutral-500"
          onClick={(e: React.MouseEvent<HTMLLabelElement>) =>
            // @ts-ignore
            e.target.previousSibling?.focus()
          }
        >
          {LABEL_TEXT}
          {REQUIRED ? ' *' : null}
        </label>
      )}
      <div
        className="absolute right-0 top-0 mt-1 block text-left text-xs font-medium text-red-600"
        style={{ display: ERROR ? 'block' : 'none' }}
      >
        {ERROR_MESSAGE}
      </div>

      {INPUT_TYPE === 'currency' && (
        <span className="absolute left-2 top-8 z-10 text-neutral-400 peer-focus:text-neutral-600">
          <HiOutlineCurrencyRupee className="h-5 w-5" />
        </span>
      )}
      <input
        type={INPUT_TYPE}
        placeholder={props?.placeholder}
        // className={`peer relative z-[1] w-full rounded-md border bg-white px-2 py-1 text-neutral-900 invalid:border-red-400 invalid:bg-red-50 `}
        className={`w-full rounded-md border border-neutral-800 bg-inherit px-3 py-2 text-neutral-300 placeholder:text-neutral-700 focus:outline-0 ${InputClass} ${props?.inputClass} ${
          props.icon && 'pl-16'
        }`}
        onKeyUp={(e) => {
          // @ts-ignore
          if (props.on) props.on(e.target.value)
        }}
        {...props.inputProps}
        {...inputProps}
        ref={(e) => {
          ref(e)
          // @ts-ignore
          InputRef.current = e
        }}
      />
      {props.icon && (
        <props.icon className="absolute left-4 top-6 block h-10 w-10 border-r border-neutral-800 py-2.5 pr-3 align-[-2px] text-neutral-600" />
      )}

      {/* <div
        className="mt-1 block text-left text-sm font-medium text-red-600"
        style={{ display: ERROR ? "block" : "none" }}
      >
        {ERROR?.message?.toString()}
      </div> */}
    </div>
  )
}
