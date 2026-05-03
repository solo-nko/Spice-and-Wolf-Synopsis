import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "site",
  title: "Spice and Wolf Synopsis",
  description: "A collection of summaries for the Spice and Wolf LN series",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Light Novels',
        items: [
          { text: 'Volume 4', link: '/spice-and-wolf/volume-4' },
          { text: 'Volume 5', link: '/spice-and-wolf/volume-5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
