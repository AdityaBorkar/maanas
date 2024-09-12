/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// useLightningcss: true,
		// instrumentationHook: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	poweredByHeader: false,
	async rewrites() {
		// TODO - SET ONLY IN DEVELOPMENT
		return [
			{
				source: '/:path*',
				destination: 'https://maanas.adityaborkar.com/:path*',
			},
		]
	},
	async headers() {
		// TODO - SET ONLY IN DEVELOPMENT
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					},
				],
			},
		]
	},
}

export default nextConfig
