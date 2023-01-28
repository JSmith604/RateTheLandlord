import React, {SetStateAction} from 'react'
import {Dialog} from '@headlessui/react'
import ButtonLight from '../ui/button-light'
import Button from '../ui/button'

// TODO Styling

function ProfanityModal({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean
	setIsOpen: React.Dispatch<SetStateAction<boolean>>
}) {
	return (
		<Dialog
			className="relative z-50"
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel className="w-full max-w-sm rounded-md bg-white p-10">
					<Dialog.Title>Profanity Alert</Dialog.Title>
					<Dialog.Description>Profanity Detected</Dialog.Description>

					<p>
						Are you sure you want to submit your review with profanity? If it is
						found to be vulgar your review may be edited or removed
					</p>

					<ButtonLight onClick={() => setIsOpen(false)}>
						Submit Anyways
					</ButtonLight>
					<Button onClick={() => setIsOpen(false)}>Edit</Button>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}

export default ProfanityModal