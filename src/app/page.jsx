import AnimeList from '@/components/AnimeList';
import HeaderTitle from '@/components/utils/HeaderTitle';
import { getAnimeList } from '@/lib/api-libs';

export default async function Home() {
	const api = await getAnimeList('top/anime', 'limit=9');

	return (
		<div className="md:px-8">
			<HeaderTitle
				title="Top Anime"
				href="/populer"
				hrefTitle="Lihat Semua"
			/>
			<AnimeList data={api} />
		</div>
	);
}
