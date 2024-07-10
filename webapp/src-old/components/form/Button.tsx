'use client'

import type { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'

type ButtonProps = {
  icon?: IconType
  submit?: boolean
  className?: string
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.submit ? 'submit' : 'button'}
      className={`rounded-md border border-neutral-800 bg-neutral-900 px-4 py-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon && <props.icon className="mr-2 inline align-[-2px]" />}
      {props.children}
    </button>
  )
}
