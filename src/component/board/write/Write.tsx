'use client';

import Link from 'next/link';
import styles from './write.module.scss';
import { usePathname } from 'next/navigation';

export default function Write() {
	const segment = usePathname().split('/');
	console.log('segment', segment);
	const handleWrite = () => {
		const l = 0;
	};

	return (
		<div className="commonBox">
			{segment[2] === 'write' && (
				<div className={styles.buttonBox}>
					<button type="button">글쓰기</button>
					<Link href={'/board'}>
						<button type="button">뒤로가기</button>
					</Link>
				</div>
			)}

			{segment[3] === 'detail' && (
				<div className={styles.buttonBox}>
					<Link href={`/board/${segment[2]}/update`}>
						<button type="button">수정</button>
					</Link>
					<Link href={'/board'}>
						<button type="button">뒤로가기</button>
					</Link>
				</div>
			)}

			{segment[3] === 'update' && (
				<div className={styles.buttonBox}>
					<button type="button">수정하기</button>
					<Link href={'/board'}>
						<button type="button">뒤로가기</button>
					</Link>
				</div>
			)}

			<div className={styles.writeBox}>
				<div className={styles.titleBox}>
					<span>Title</span>
					<input></input>
				</div>
				<div className={styles.contentBox}>
					<span>Content</span>
					<textarea className={styles.input}></textarea>
				</div>
			</div>
		</div>
	);
}
