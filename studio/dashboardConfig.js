export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cdd920718a53dab5d9464aa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fd3d45ut',
                  apiId: '14663331-6578-498a-821f-cbce0734013d'
                },
                {
                  buildHookId: '5cdd920791db4601a55cfa19',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uyshdtpi',
                  apiId: 'ed6ff597-8b4a-4e08-8083-58210f07a7b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexorbit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uyshdtpi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
