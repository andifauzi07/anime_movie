import AnimeList from '@/components/AnimeList';
import HeaderTitle from '@/components/utils/HeaderTitle';
import { getAnimeList } from '@/lib/api-libs';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server.js';
import { signOut } from './login/action';

export default async function Home() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();

	console.log('user data:', data);
	if (error || !data?.user) {
		redirect('/login');
	}
	const api = await getAnimeList('top/anime', 'limit=9');

	return (
		<div className="md:px-8">
			<div className="w-1/4 flex justify-center">
				<form action={signOut}>
					<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-700 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
						<div>Sign Out</div>
					</button>
				</form>
			</div>
			<HeaderTitle
				title="Top Anime"
				href="/populer"
				hrefTitle="Lihat Semua"
			/>
			<AnimeList data={api} />
		</div>
	);
}
