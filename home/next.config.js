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
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/blog`,
      },
      {
        source: '/b/:path*',
        destination: `https://40049-nextjs-with-zones-b.vercel-support.app/blog/:path*`,
      },
      {
        source: '/c',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/blog`,
      },
      {
        source: '/c/:path*',
        destination: `https://40049-nextjs-with-zones-c.vercel-support.app/blog/:path*`,
      },
      {
        source: '/d',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/blog`,
      },
      {
        source: '/d/:path*',
        destination: `https://40049-nextjs-with-zones-d.vercel-support.app/blog/:path*`,
      },
    ]
  },
}
