'use client'

// Types:
// Libraries:
import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { HiChevronUpDown } from 'react-icons/hi2'

import type { ReactHookContext } from '@/hooks/useReactForm'
import { Combobox } from '@headlessui/react'

interface InputComponentPropType {
	name: string
	label?: string
	inputClass?: string
	options?: string[]
	// on?: (value: any) => void;
}

// Main Function:
export default function SelectInput(props: InputComponentPropType) {
	// React Hook Form:
	const NAME = props.name || '`'
	const FormMethods = useFormContext() as ReactHookContext
	const FieldProps = FormMethods.getYupProps(NAME)
	const inputProps = FormMethods.register(NAME)

	// Values:
	const [SELECTED_OPTION, SET_SELECTED_OPTION] = useState(
		FormMethods.getValues(NAME),
	)
	FormMethods.setValue(NAME, SELECTED_OPTION)
	// useEffect(() => {
	// }, [SELECTED_OPTION]);

	// Properties:
	const OPTIONS = props.options || Array.from(FieldProps?.list || [])
	const REQUIRED = FieldProps?.required || false
	const LABEL_TEXT = props?.label || FieldProps?.label || ''
	const ERROR = eval(
		`FormMethods.formState.errors?.${NAME.replace(
			/\.(\d+)\./g,
			'[$1].',
		).replaceAll('.', '?.')}`,
	)
	const ERROR_MESSAGE = ERROR?.message?.toString() || ''

	// Raise custom invalid event:
	const InputRef = useRef<HTMLInputElement>(null)
	InputRef.current?.setCustomValidity(ERROR_MESSAGE || '')

	// Search:
	const [query, setQuery] = useState('')
	const FilteredOptions =
		query === ''
			? OPTIONS
			: OPTIONS.filter((option) => {
					return option.toLowerCase().includes(query.toLowerCase())
				})

	// Render:
	return (
		<div className='relative'>
			<label
				className='bg-white text-sm text-neutral-500 transition-all'
				onClick={(e: any) => e.target.previousSibling.focus()}
			>
				{LABEL_TEXT}
				{REQUIRED ? ' *' : null}
			</label>
			<div
				className='absolute right-0 top-0 mt-1 block text-left text-xs font-medium text-red-600'
				style={{ display: ERROR ? 'block' : 'none' }}
			>
				{ERROR_MESSAGE}
			</div>

			<Combobox value={SELECTED_OPTION} onChange={SET_SELECTED_OPTION}>
				{/* Input: */}
				<div className='relative w-full bg-white text-sm'>
					<Combobox.Input
						type='text'
						className={`w-full rounded-md border px-2 py-1.5 text-neutral-900 invalid:border-red-400 invalid:bg-red-50 ${props.inputClass}`}
						defaultValue={SELECTED_OPTION}
						displayValue={(option) => option as string}
						autoComplete={'off'}
						placeholder=' '
						ref={InputRef}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
						<HiChevronUpDown className='text-text-4 h-5 w-5' />
					</Combobox.Button>
				</div>
				{/* Options: */}
				<Combobox.Options className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
					{FilteredOptions.length === 0 && query !== '' ? (
						<div className='relative cursor-default select-none px-4 py-2 text-neutral-700'>
							Nothing found.
						</div>
					) : (
						FilteredOptions.map((option) => (
							<Combobox.Option
								key={option}
								value={option}
								className={({ active }) =>
									`relative cursor-default select-none px-2 py-2 pr-4 ${
										active ? 'bg-blue-500 text-white' : 'bg-white'
									}`
								}
							>
								<span className='block truncate'>{option}</span>
							</Combobox.Option>
						))
					)}
				</Combobox.Options>
			</Combobox>

			{/* <div
        className="mt-1 block text-left text-sm font-medium text-red-600"
        style={{ display: ERROR_MESSAGE ? "block" : "none" }}
      >
        {ERROR_MESSAGE}
      </div> */}
		</div>
	)
}
