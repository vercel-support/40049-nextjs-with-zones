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
        source: '/b',
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/b`,
      },
      {
        source: '/b/:path*',
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/b/:path*`,
      },
      {
        source: '/c',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/c`,
      },
      {
        source: '/c/:path*',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/c/:path*`,
      },
      {
        source: '/d',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/d`,
      },
      {
        source: '/d/:path*',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/d/:path*`,
      },
    ]
  },
}
