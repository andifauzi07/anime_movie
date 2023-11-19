export const getAnimeList = async (resource, query) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${resource}?${query}`);
	const anime = await response.json();
	return anime;
};
