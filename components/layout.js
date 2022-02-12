import Navbar from './navbar';
import SEO from './seo';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<>
			<SEO title="Liquid Hack Group" />
			<Navbar />
			<main className="bg-black-600 py-2 w-screen min-h-screen">
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
