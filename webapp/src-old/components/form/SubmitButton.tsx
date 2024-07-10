import { ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: {
    default: React.ReactNode
    pending: React.ReactNode
  }
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus()
  const attributes = { ...props, children: undefined }
  return (
    <button {...attributes}>
      {pending ? props.children?.pending : props.children?.default}
    </button>
  )
}
