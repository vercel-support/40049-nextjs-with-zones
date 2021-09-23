module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `https://40049-nextjs-with-zones-blog.vercel-support.app/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `https://40049-nextjs-with-zones-blog.vercel-support.app/blog/:path*`,
      },
      {
        source: '/services/b',
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/services/b`,
      },
      {
        source: '/services/b/:path*',
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/services/b/:path*`,
      },
      {
        source: '/services/c',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/services/c`,
      },
      {
        source: '/services/c/:path*',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/services/c/:path*`,
      },
      {
        source: '/services/d',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/services/d`,
      },
      {
        source: '/services/d/:path*',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/services/d/:path*`,
      },
    ]
  },
}
