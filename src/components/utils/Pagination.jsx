const { SkipBack, SkipForward } = require('@phosphor-icons/react');

const Page = ({ page, lastPage, setPage }) => {
	const scrollTop = () => {
		scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const handleClickNext = () => {
		scrollTop();
		setPage((prevState) => prevState + 1);
	};
	const handleClickPrev = () => {
		scrollTop();
		setPage((prevState) => prevState - 1);
	};

	return (
		<div className="w-full flex justify-center items-center gap-8 p-4">
			{page == 2 ? (
				<button
					className="hover:bg-black hover:text-white transition-all rounded bg-blue-500 text-white"
					onClick={handleClickPrev}>
					<SkipBack size={32} />
				</button>
			) : null}

			<p>
				{page} - {lastPage}
			</p>

			<button
				className="hover:bg-black hover:text-white transition-all rounded bg-blue-500 text-white"
				onClick={handleClickNext}>
				<SkipForward size={32} />
			</button>
		</div>
	);
};

export default Page;
