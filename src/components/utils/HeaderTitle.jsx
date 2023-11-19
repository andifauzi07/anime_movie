import Link from 'next/link';

const Page = ({ title, hrefTitle, href }) => {
	return (
		<div>
			<h1 className="py-8 md:text-5xl text-3xl text-center">{title}</h1>
			{href && hrefTitle ? (
				<Link
					href={href}
					className="hover:scale-105 transition-all w-32 px-2 flex flex-row ">
					<h3 className="text-xl">{hrefTitle}</h3>
				</Link>
			) : null}
		</div>
	);
};

export default Page;
