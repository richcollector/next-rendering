import Image from 'next/image';

export default function Home() {
	return (
		<main className="commonBox">
			<Image
				alt="taewan"
				src="/images/kimtaewan.jpg"
				width={0}
				height={0}
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
			/>
		</main>
	);
}
