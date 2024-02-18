'use client';

import Link from 'next/link';
import styles from './write.module.scss';
import { usePathname } from 'next/navigation';
import handleInputChange from '../../hooks/ChangeInput';
import { useEffect, useState } from 'react';
import { isValid } from '../../../utils/validation/Validation';
import db from '../../../utils/db/db.json';
import { callApi } from '../../../utils/api/Api';
import { useRecoilState } from 'recoil';
import { boardState } from '../../../utils/store/store';
import { useRouter } from 'next/navigation';

interface IActicle {
	id: number;
	title: string;
	content: string;
}

export default function Write() {
	const router = useRouter();
	const [list, setList] = useRecoilState(boardState);
	const [word, setWord] = useState({ title: '', content: '' });
	const url = usePathname().split('/');

	const updateWord = () => {
		const id: number = Number(url[2]);
		const acticle: IActicle = { ...db.board.filter(e => e.id === id)[0] };
		setWord({ title: acticle.title, content: acticle.content });
	};

	useEffect(() => {
		if (url[3] === 'update' || url[3] === 'detail') {
			updateWord();
		}
	}, []);

	console.log('word', word);
	console.log('segment', url);

	const handleWrite = e => {
		e.preventDefault();
		console.log('write', word);
		isValid(word.title);
		isValid(word.content);
		const data = { id: list.length + 1, title: word.title, content: word.content };
		callApi('write', 'POST', data).then((res: IActicle) => {
			const newList = list;
			console.log('res', res);
			newList.push(res);
			console.log('??', newList);
			setList(newList);
		});
		// console.log('??', list);
		// router.push('/board');
	};

	const handleUpdate = () => {
		isValid(word.title);
		isValid(word.content);
		console.log('update', word);
		const data = { id: list.length + 1, title: word.title, content: word.content };
		callApi('update', 'PUT', data).then((res: IActicle) => {
			setList(prev => ({ ...prev, res }));
		});
	};

	return (
		<div className="commonBox">
			{(url[2] === 'write' && (
				<div className={styles.buttonBox}>
					<button type="button" onClick={handleWrite}>
						글쓰기
					</button>
					<Link href={'/board'}>
						<button type="button">뒤로가기</button>
					</Link>
				</div>
			)) ||
				(url[3] === 'detail' && (
					<div className={styles.buttonBox}>
						<Link href={`/board/${url[2]}/update`}>
							<button type="button">수정</button>
						</Link>
						<Link href={'/board'}>
							<button type="button">뒤로가기</button>
						</Link>
					</div>
				)) ||
				(url[3] === 'update' && (
					<div className={styles.buttonBox}>
						<button type="button" onClick={handleUpdate}>
							수정하기
						</button>
						<Link href={'/board'}>
							<button type="button">뒤로가기</button>
						</Link>
					</div>
				))}

			{(url[2] === 'write' && (
				<div className={styles.writeBox}>
					<div className={styles.titleBox}>
						<span>Title</span>
						<input
							className={styles.input}
							value={word.title}
							onChange={e => handleInputChange(e, setWord)}
							name="title"
							placeholder="제목을 입력해주세요."
							autoFocus
						></input>
					</div>
					<div className={styles.contentBox}>
						<span>Content</span>
						<textarea
							className={styles.input}
							value={word.content}
							onChange={e => handleInputChange(e, setWord)}
							name="content"
							placeholder="내용을 입력해주세요."
						></textarea>
					</div>
				</div>
			)) ||
				(url[3] === 'update' && (
					<div className={styles.writeBox}>
						<div className={styles.titleBox}>
							<span>Title</span>
							<input
								className={styles.input}
								value={word.title}
								onChange={e => handleInputChange(e, setWord)}
								name="title"
								placeholder="제목을 입력해주세요."
								autoFocus
							></input>
						</div>
						<div className={styles.contentBox}>
							<span>Content</span>
							<textarea
								className={styles.input}
								value={word.content}
								onChange={e => handleInputChange(e, setWord)}
								name="content"
								placeholder="내용을 입력해주세요."
							></textarea>
						</div>
					</div>
				)) ||
				(url[3] === 'detail' && (
					<div className={styles.writeBox}>
						<div className={styles.titleBox}>
							<span>Title</span>
							<input
								className={styles.input}
								value={word.title}
								name="title"
								placeholder="제목을 입력해주세요."
								autoFocus
								readOnly
							></input>
						</div>
						<div className={styles.contentBox}>
							<span>Content</span>
							<textarea
								className={styles.input}
								value={word.content}
								name="content"
								placeholder="내용을 입력해주세요."
								readOnly
							></textarea>
						</div>
					</div>
				))}
		</div>
	);
}
