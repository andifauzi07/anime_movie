import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ data }) => {
	return (
		<>
			<div className="grid md:grid-cols-3 grid-cols-2 gap-4 p-2">
				{data.data?.map((res) => {
					return (
						<Link
							key={res.mal_id}
							href={`/anime/${res.mal_id}`}>
							<Image
								src={res.images.jpg.large_image_url}
								width={400}
								height={200}
								alt={res.title}
								className="w-full cursor-pointer rounded"
							/>
							<h1 className="text-center text-xl py-4">{res.title}</h1>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default AnimeList;
