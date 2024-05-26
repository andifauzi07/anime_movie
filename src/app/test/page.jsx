const Page = async () => {
	const getData = await fetch('http://localhost:3000/api');
	const { data } = await getData.json();

	const sortedData = data.sort((a, b) => a.score - b.score);

	const reverse = sortedData.reverse();

	return (
		<>
			{reverse.map((data) => {
				return (
					<h1 key={data.mal_id}>
						Score: {data.score} {data.title}
					</h1>
				);
			})}

			<h1>Test hit internal api</h1>
		</>
	);
};
export default Page;
