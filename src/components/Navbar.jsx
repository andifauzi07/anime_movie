import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';

const Navbar = () => {
	return (
		<header className="w-full flex flex-col md:flex-row justify-between p-4 bg-blue-500 text-white">
			<Link
				href="/"
				className="flex justify-center items-center gap-2">
				<Image
					src="/logo.png"
					alt="..."
					width={36}
					height={36}
				/>
				<h1 className="text-3xl font-bold">Partam Movie</h1>
			</Link>
			<SearchBox />
		</header>
	);
};

export default Navbar;
