/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['mongoose'],
	},
	webpack(config) {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		};
		return config;
	},
	images: {
		domains: ['cdn-icons-png.flaticon.com', 'i.ibb.co'],
	},
};

module.exports = nextConfig;
