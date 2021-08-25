export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612617b2e7f167b89970c254',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kis375wz',
                  apiId: '04ca7bb7-5beb-4552-afff-e60794a8e7b1'
                },
                {
                  buildHookId: '612617b293edbd9978a0393b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qqtqcrzz',
                  apiId: 'cdda654e-e4fd-401c-8d53-07a0ad3dd87d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ki-elijah/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qqtqcrzz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
