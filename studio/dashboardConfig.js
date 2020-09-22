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
                  buildHookId: '5f69edc62075434dbcdb7dfe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yqgivrns',
                  apiId: '3604a084-9362-49d6-a600-1fee492cd034'
                },
                {
                  buildHookId: '5f69edc6eedd6a1ca1dc1aa4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gztsuwjd',
                  apiId: 'ea733ffe-7991-431d-9149-7caaaf078d10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Abrahamsendesign/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gztsuwjd.netlify.app',
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
