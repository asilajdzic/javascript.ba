import '@styles/globals.css';

import Nav from '@components/Nav';
import Header from '@components/Header';
import Footer from '@components/Footer';
import SecondNav from '@components/SecondNav';

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<head>
				<title>JavaScript.BA</title>
				<link
					rel='icon'
					type='image/x-icon'
					href='/assets/favicon/js_logo.svg'
				></link>
			</head>
			<body>
				<main className='app'>
					<Nav />
					<Header />
					<SecondNav />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
