import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface Word {
	title: string;
	content: string;
}

export default function handleInputChange(
	e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
	setInput: React.Dispatch<React.SetStateAction<Word>> | Dispatch<SetStateAction<Word>>,
) {
	const { name, value } = e.target;
	console.log('target', name, value);
	setInput(prev => ({ ...prev, [name]: value }));
}
