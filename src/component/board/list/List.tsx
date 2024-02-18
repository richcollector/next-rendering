import Pagination from '@/component/paginations/Paginations';
import styles from './list.module.scss';
import Link from 'next/link';

export default function List() {
	return (
		<>
			<div className="commonBox">
				<div className={styles.buttonBox}>
					<Link href={'/board/write'}>
						<button className="button" type="button">
							Write
						</button>
					</Link>
				</div>

				<div className={styles.box}>
					{new Array(6).fill('제목').map((el, idx) => (
						<li key={idx + 1}>
							<Link href={`/board/${idx + 1}/detail`}>
								<article className={styles.article}>
									{idx + 1}
									<h1>{el}</h1>
								</article>
							</Link>
						</li>
					))}
				</div>

				<Pagination path="/board" currentPage={1} pageTotal={2} />
			</div>
		</>
	);
}
