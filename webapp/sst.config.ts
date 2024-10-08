/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: 'maanas',
			removal: input?.stage === 'production' ? 'retain' : 'remove',
			home: 'aws',
			providers: { cloudflare: '5.37.1' },
		}
	},
	async run() {
		if ($app.stage !== 'production') {
			const StagingDomain = 'maanas.adityaborkar.com'
			// const StagingDomain = 'maanas-staging.adityaborkar.com'
			const LocalHost = 'https://localhost:3000'
			console.log(`Creating Cloudflare Tunnel: ${StagingDomain} -> ${LocalHost}`)

			const Tunnel = new cloudflare.Tunnel('CloudflareTunnel', {
				name: StagingDomain,
				configSrc: 'cloudflare',
				accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
				secret: btoa(process.env.CLOUDFLARE_TUNNEL_SECRET_STRING || ''),
			})

			const TunnelConfig = new cloudflare.TunnelConfig('Tunnel Config', {
				accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
				tunnelId: Tunnel.id,
				config: {
					ingressRules: [
						{ hostname: StagingDomain, service: LocalHost },
						{ service: 'http_status:404' },
					],
				},
			})

			const TunnelDns = new cloudflare.Record('Tunnel DNS', {
				type: 'CNAME',
				proxied: true,
				name: StagingDomain,
				value: Tunnel.cname,
				zoneId: process.env.CLOUDFLARE_ZONE_ID || '',
				comment: 'Generated by SST (vasundhara)',
			})

			const command = new sst.x.DevCommand('Tunnel', {
				link: [Tunnel, TunnelConfig, TunnelDns],
				dev: {
					command: $interpolate`echo "sudo cloudflared service uninstall ; sudo cloudflared service install ${Tunnel.tunnelToken}"`,
					// command: $interpolate`bash -c "sudo cloudflared service uninstall ; sudo cloudflared service install ${Tunnel.tunnelToken}"`,
					autostart: false,
				},
			})
		}

		new sst.aws.Nextjs('WebApp', {
			dev: { command: 'next dev --experimental-https' },
			domain: {
				name: 'maanas.adityaborkar.com',
				dns: sst.cloudflare.dns({
					zone: process.env.CLOUDFLARE_ZONE_ID,
				}),
			},
		})
	},
})

//

//
// 449297914925686

// 6g2DTNVaQLV3maVq
