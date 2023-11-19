import AnimeList from '@/components/AnimeList';
import { getAnimeList } from '@/lib/api-libs';
import HeaderTitle from '@/components/utils/HeaderTitle';

const Page = async ({ params }) => {
	const { name } = params;
	const decodeName = decodeURI(name);
	const api = await getAnimeList('anime', `q=${decodeName}`);

	return (
		<div className="md:px-8">
			<HeaderTitle title={`Pencarian untuk ${decodeName}.....`} />
			<AnimeList data={api} />
		</div>
	);
};

export default Page;
