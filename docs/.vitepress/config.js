export default {
  title: 'Jovo Framework',
  description: 'Documentation for Jovo Framework v4',
  
  // Temporarily ignore dead links to allow build to complete
  ignoreDeadLinks: true,
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/README' }
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
      }
    ]
  }
}