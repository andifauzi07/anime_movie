import DetailMovie from '@/components/DetailMovie';
import { getAnimeList } from '@/lib/api-libs';
import Image from 'next/image';

const Page = async ({ params }) => {
	const { id } = params;
	const { data } = await getAnimeList(`anime/${id}`);

	return (
		<div className="p-8">
			<h1 className="md:text-5xl text-3xl text-center p-4 pb-[56px] font-bold">
				{data.title} - {data.year}
			</h1>
			<DetailMovie data={data} />
			<div className="flex md:flex-row flex-col gap-8">
				<Image
					src={data.images.jpg.large_image_url}
					alt={data.images.webp.large_image_url}
					width={400}
					height={200}
					className="md:w-1/3"
				/>
				<div className="md:w-2/3">
					<p className="text-xl text-justify">{data.synopsis}</p>
				</div>
			</div>
		</div>
	);
};

export default Page;
