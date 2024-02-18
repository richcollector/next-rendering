import db from '../db/db.json';

interface IData {
	page?: number;
	id?: number;
	title?: string;
	content?: string;
}

export const callApi = async (endpoint: string, method: string, data?: IData) => {
	if (method === 'GET') {
		return db.board;
	}

	if (method === 'POST') {
		const newItem = { id: data.id, title: data.title, content: data.content };
		return newItem;
	}

	if (method === 'PUT') {
		const updateItem = { id: data.id, title: data.title, content: data?.content };
		return updateItem;
	}
};

// const handleResponse = async (response: Response) => {
// 	const contentLength = response.headers.get('Content-Length');
// 	try {
// 		if (!response.ok) {
// 			throw new Error('요청이 실패하였습니다.');
// 		}
// 		if (contentLength === null || contentLength === '0') {
// 			return;
// 		} else {
// 			const responseData = await response.json();
// 			return responseData;
// 		}
// 	} catch (error) {
// 		if (error instanceof Error) {
// 			const errorData = await response.json();
// 			throw new Error(errorData.message || response.statusText);
// 		}
// 	}
// };
