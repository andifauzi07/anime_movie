'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const SearchBox = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleClick = async (e) => {
		const input = searchRef.current.value;

		if (!input) return;

		if (e.key == 'Enter' || e.type == 'Click') {
			e.preventDefault();
			searchRef.current.value = '';
			router.push(`/search/${input}`);
		}
	};

	return (
		<div className="flex md:items-center lg:pt-0 pt-2 relative text-black">
			<input
				type="text"
				placeholder="Cari di sini..."
				ref={searchRef}
				className="w-full md:w-60 rounded mx-4 px-2 py-1 text-center"
				onKeyDown={handleClick}
			/>
			<button
				className="absolute top-3 right-5 "
				onClick={handleClick}>
				<MagnifyingGlass size={24} />
			</button>
		</div>
	);
};

export default SearchBox;
