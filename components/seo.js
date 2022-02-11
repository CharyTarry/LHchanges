import Head from 'next/head';

const SEO = ({
	description = 'Liquid Hack Group with its curated team of technical experts is able to deliver high-end software solutions to its dedicated customers.',
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
		<Head>
			<link rel="shortcut icon" href="/icon.jpeg" />

			<script
				type="module"
				src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
			></script>
			<title>{title}</title>
			{metaData.map(({ name, content }, i) => (
				<meta key={i} name={name} content={content} />
			))}
		</Head>
	);
};

export default SEO;

SEO.defaultProps = {
	lang: `en`,
	meta: [],
};
