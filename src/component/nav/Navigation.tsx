import styles from './navigation.module.scss';
import NavMenu from './NavMenu';
import { MENUS } from '@/utils/constants/constants';

export default function Navigation() {
	return (
		<>
			<header className={styles.navContainer}>
				<div role="navigation" className={styles.navMenuUl}>
					{MENUS.map((menu, idx) => (
						<NavMenu key={idx} menu={menu} />
					))}
				</div>
			</header>
		</>
	);
}
