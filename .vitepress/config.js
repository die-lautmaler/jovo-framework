import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Jovo Framework',
  description: 'The Open Source Voice Layer: Build Voice Experiences for Alexa, Google Assistant, Samsung Bixby, Web Apps, and much more',
  
  // IMPORTANT: Set base to your repository name for GitHub Pages
  base: '/jovo-framework/',
  
  head: [
    ['link', { rel: 'icon', href: '/jovo-framework/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'GitHub', link: 'https://github.com/die-lautmaler/jovo-framework' }
    ],
    
    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/docs/' },
            { text: 'Installation', link: '/docs/installation' },
            { text: 'Project Structure', link: '/docs/project-structure' }
          ]
        },
        {
          text: 'Core Concepts',
          collapsed: false,
          items: [
            { text: 'Models', link: '/docs/models' },
            { text: 'Components', link: '/docs/components' },
            { text: 'Output', link: '/docs/output' },
            { text: 'Routing', link: '/docs/routing' }
          ]
        },
        {
          text: 'Platforms',
          collapsed: false,
          items: [
            { text: 'Alexa', link: '/docs/platforms/alexa' },
            { text: 'Google Assistant', link: '/docs/platforms/google-assistant' },
            { text: 'Web', link: '/docs/platforms/web' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/die-lautmaler/jovo-framework' }
    ],
    
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2024 Jovo Framework'
    },
    
    search: {
      provider: 'local'
    },
    
    editLink: {
      pattern: 'https://github.com/die-lautmaler/jovo-framework/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
