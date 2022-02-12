import Head from 'next/head';
import Script from 'next/script';

const SEO = ({
	description = 'Specialist in web and application design, web and application development, search engine optimization, search engine marketing, networking and security systems.',
	author = 'LiquidHackGroup',
	meta,
	title = 'Liquid Hack Group',
}) => {
	const metaData = [
		{
			name: `description`,
			content: description,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: description,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: author,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: description,
		},
	].concat(meta);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/icon.jpeg" sizes="32x32" />
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{metaData.map(({ name, content }, i) => (
					<meta key={i} name={name} content={content} />
				))}
			</Head>
			<Script
				type="module"
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				strategy="afterInteractive"
			></Script>
		</>
	);
};

export default SEO;

SEO.defaultProps = {
	lang: `en`,
	meta: [],
};
