/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: 'maanas',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			// providers: { cloudflare: '5.37.1' },
		}
	},
	async run() {
		new sst.aws.Nextjs('WebApp', {
			dev: { command: 'next dev --turbo' },
			// domain: {
			// 	name: 'maanas.adityaborkar.com',
			//   dns:
			// },
		})
	},
})
