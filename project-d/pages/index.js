import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  return (
    <div>
      <h3>This is Project D</h3>
      <ul>
        <li>
          <Link href="/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">Home</a>
      <div>
        <Image
          src="/services/d/static/nextjs.png"
          alt="Next.js logo"
          width={200}
          height={160}
        />
      </div>
    </div>
  )
}
