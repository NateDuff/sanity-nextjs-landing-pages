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
                  buildHookId: '5f2eef4c17794bc57766af05',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ix5tbrnr',
                  apiId: 'c93bd553-04e0-4876-a50a-e5a282dbb2d8'
                },
                {
                  buildHookId: '5f2eef4d848de01486493846',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cuz1b8sy',
                  apiId: '2d344dcb-6559-47f1-a1b3-33424e610ee4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NateDuff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cuz1b8sy.netlify.app', category: 'apps'}
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
