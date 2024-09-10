import { FiFolder, FiSlash, FiTarget } from 'react-icons/fi'

export default function AreaPage() {
	return (
		<div className='px-32'>
			<h2 className='text-text-2 mb-8 mt-16 text-xl font-semibold'>
				<FiFolder className='-mt-1 mr-2 inline-block' />
				Projects
			</h2>

			<div className='text-text-2 grid grid-cols-4 text-center text-sm'>
				<div>Name</div>
				<div>Status</div>
				<div>Started On</div>
				<div>Completed On</div>
			</div>

			<h2 className='text-text-2 mb-8 mt-32 text-xl font-semibold'>
				<FiTarget className='-mt-1 mr-2 inline-block' />
				Long-Term Goals
			</h2>

			<div className='text-text-2 grid grid-cols-4 text-center text-sm'>
				<div>Name</div>
				<div>Project</div>
			</div>

			<h2 className='text-text-2 mb-8 mt-32 text-xl font-semibold'>
				<FiSlash className='-mt-1 mr-2 inline-block' />
				Anti Vision
			</h2>

			<div className='text-text-2 grid grid-cols-4 text-center text-sm'>
				<div>Name</div>
				<div>Project</div>
			</div>
		</div>
	)
}
