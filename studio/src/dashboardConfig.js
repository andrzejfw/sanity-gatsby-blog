export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '602270faaad383cb64ac8425',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u5etv261',
                  apiId: 'd05e202c-bfca-4c7e-a753-89cd21432a9a'
                },
                {
                  buildHookId: '602270fb29aeefbd4c011d88',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-amixwq4r',
                  apiId: '72e708fe-381f-427e-8ea7-e7d30f6753e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrzejfw/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-amixwq4r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
