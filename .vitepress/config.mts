import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "site",
	title: "Spice and Wolf Synopsis",
	description: "A collection of summaries for the Spice and Wolf LN series",
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{text: "Home", link: "/"},
			{text: "Examples", link: "/markdown-examples"}
		],
		search: {
			provider: "local"
		},

		sidebar: [
			{
				text: "Spice and Wolf",
				items: [
					{text: "Volume 4", link: "/spice-and-wolf/volume-4"},
					{text: "Volume 5", link: "/spice-and-wolf/volume-5"},
					{text: "Volume 6", link: "/spice-and-wolf/volume-6"},
					{text: "Volume 8", link: "/spice-and-wolf/volume-8"},
				]
			},
			{
				text: "Wolf and Parchment",
				items: []
			}
		],
		lastUpdated: {
			formatOptions: {
				dateStyle: "medium"
			}
		},

		socialLinks: [
			{icon: "github", link: "https://github.com/vuejs/vitepress"}
		]
	}
});
