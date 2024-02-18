import Pagination from '../../paginations/Paginations';
import styles from './list.module.scss';
import Link from 'next/link';
import { boardState } from '../../../utils/store/store';
import { useRecoilState } from 'recoil';

export default function List() {
	const [list] = useRecoilState(boardState);

	console.log('list', list);

	let currentPage = 1;
	let pageTotal = list.length / 5 + 1;

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
					{list.map(el => (
						<li key={el.id}>
							<Link href={`/board/${el.id}/detail`}>
								<article className={styles.article}>
									{el.id}
									<h1>{el.title}</h1>
								</article>
							</Link>
						</li>
					))}
				</div>

				{/* <Pagination path="/board" currentPage={currentPage} pageTotal={pageTotal} /> */}
			</div>
		</>
	);
}
