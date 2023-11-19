import { Oswald } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const poppins = Oswald({
	weight: ['400', '700', '600'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Partam  Movie',
	description: 'Website penyedia berbagai kumpulan daftar anime terbaru',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
