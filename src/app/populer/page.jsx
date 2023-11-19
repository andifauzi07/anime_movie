'use client';

import HeaderTitile from '@/components/utils/HeaderTitle';
import AnimeList from '@/components/AnimeList';
import { getAnimeList } from '@/lib/api-libs';
import { useState, useEffect } from 'react';
import Pagination from '@/components/utils/Pagination';

const Populer = () => {
	const [page, setPage] = useState(1);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const api = await getAnimeList('top/anime', `page=${page}`);
		setData(api);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<>
			<HeaderTitile title={`Anime Terpopuler ${page}`} />
			<AnimeList data={data} />
			<Pagination
				page={page}
				lastPage={data.pagination?.last_visible_page}
				setPage={setPage}
			/>
		</>
	);
};

export default Populer;
