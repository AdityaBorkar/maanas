'use client'

export default function useStorage() {
	// Retrieve message sent to work from main script
	const message = 'hello world'

	// Get handle to draft file
	const root = navigator.storage.getDirectory()
	const draftHandle = root.getFileHandle('draft.txt', { create: true })
	console.log({ draftHandle })
	// Get sync access handle
	// const accessHandle = await draftHandle.createSyncAccessHandle()

	// // Get size of the file.
	// const fileSize = accessHandle.getSize()
	// // Read file content to a buffer.
	// const buffer = new DataView(new ArrayBuffer(fileSize))
	// const readBuffer = accessHandle.read(buffer, { at: 0 })

	// // Write the message to the end of the file.
	// const encoder = new TextEncoder()
	// const encodedMessage = encoder.encode(message)
	// const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer })

	// // Persist changes to disk.
	// accessHandle.flush()

	// // Always close FileSystemSyncAccessHandle if done.
	// accessHandle.close()

	return (
		<div>
			<h1>Storage</h1>
		</div>
	)
}

export function StorageProvider({ children }: { children: React.ReactNode }) {
	// TODO - INITIALIZE STORAGE
	return <>{children}</>
}
