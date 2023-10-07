import { flatRoutes } from 'remix-flat-routes'

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
	cacheDirectory: './node_modules/.cache/remix',
	ignoredRouteFiles: ['**/*'],
	serverModuleFormat: 'esm',
	serverDependenciesToBundle: [
		'@jsx-email/all',
		'@jsx-email/container',
		'@jsx-email/head',
		'@jsx-email/heading',
		'@jsx-email/html',
		'@jsx-email/link',
		'@jsx-email/tailwind',
		'@jsx-email/text',
		'@jsx-email/render',
		'@selderee/plugin-htmlparser2',
		'html-to-text',
		'parseley',
		'peberminta',
		'selderee',
		'tw-to-css',
	],
	serverPlatform: 'node',
	tailwind: true,
	postcss: true,
	watchPaths: ['./tailwind.config.ts'],
	routes: async defineRoutes => {
		return flatRoutes('routes', defineRoutes, {
			ignoredRouteFiles: [
				'.*',
				'**/*.css',
				'**/*.test.{js,jsx,ts,tsx}',
				'**/__*.*',
			],
		})
	},
}
