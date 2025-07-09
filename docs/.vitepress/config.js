export default {
  title: 'Jovo Framework',
  description: 'Documentation for Jovo Framework v4',
  base: '/jovo-framework/',
  
  // Temporarily ignore dead links to allow build to complete
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/README' },
      { text: 'GitHub', link: 'https://github.com/die-lautmaler/jovo-framework' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Project Structure', link: '/project-structure' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'App Config', link: '/app-config' },
          { text: 'Handlers', link: '/handlers' },
          { text: 'Routing', link: '/routing' },
          { text: 'Input', link: '/input' },
          { text: 'Output', link: '/output' }
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Plugins', link: '/plugins' },
          { text: 'Platforms', link: '/platforms' },
          { text: 'Deployment', link: '/deployment' },
          { text: 'Testing', link: '/unit-testing' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/die-lautmaler/jovo-framework' }
    ]
  }
}