import Link from 'next/link';

type MenuType = {
	title: string;
	path: string;
	emoji?: string;
};

export default function NavMenu({
	menu,
	children,
}: {
	menu: MenuType;
	children?: React.ReactNode;
}) {
	return (
		<li>
			<Link href={menu.path}>{children ? children : menu.title}</Link>
		</li>
	);
}
