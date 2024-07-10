// Libraries:
import { useFieldArray, useFormContext } from 'react-hook-form'

import Button from '@/components/Button'
import { ReactHookContext } from '@/hooks/useReactForm'

// Types:
type ArrrayInputProps = {
  // Properties:
  name: string
  label?: string
  defaultLength?: number
  // Wrapper:
  wrapperClass?: string
  // Children:
  component: (props: {
    index: number
    remove: React.MouseEventHandler<HTMLButtonElement>
  }) => React.ReactNode
}

// Main Function:
export default function InputArray(props: ArrrayInputProps) {
  // React Hook Form:
  const NAME = props.name || ''
  const FormMethods = useFormContext() as ReactHookContext
  const FieldProps = FormMethods.getYupProps(NAME)
  const LABEL = props?.label || FieldProps?.label || ''

  // Values:
  const { fields, append, remove } = useFieldArray({
    name: NAME,
    control: FormMethods.control,
  })
  const DefaultLength =
    props.defaultLength === undefined ? 1 : props.defaultLength
  // TODO - Fix this, it's a hack:
  const FIELDS = DefaultLength > fields.length ? [{ id: 1 }] : fields

  // Render:
  return (
    <div className={props.wrapperClass}>
      <h4 className="relative mb-4 border-b-2 py-3 font-semibold uppercase tracking-widest text-neutral-400">
        <Button
          className="absolute right-0 top-2 w-fit bg-neutral-100 text-xs text-neutral-400"
          onClick={() => append({})}
          color="custom"
        >
          Add {LABEL}
        </Button>

        <span>{LABEL}</span>
      </h4>

      {FIELDS.map((field, index) => (
        <div key={field.id} className="relative mb-4">
          {props.component({
            index,
            remove: (e: React.MouseEvent<HTMLButtonElement>) => remove(index),
          })}
        </div>
      ))}
    </div>
  )
}
