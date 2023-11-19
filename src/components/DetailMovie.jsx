import React from 'react';

const DetailMovie = ({ data }) => {
	return (
		<div className="flex flex-row gap-4 pb-8 text-xl">
			<div className="w-12 h-12 border-2 flex justify-center items-center border-black">{data.type}</div>
			<div className="w-12 h-12 border-2 flex justify-center items-center border-black">{data.episodes}</div>
			<div className="w-12 h-12 border-2 flex justify-center items-center border-black">{data.score}</div>
		</div>
	);
};

export default DetailMovie;
