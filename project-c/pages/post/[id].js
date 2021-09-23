import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  return (
    <div>
      <h3>Post #{router.query.id} of Project C</h3>
      <p>Lorem ipsum</p>
      <Link href="/">
        <a>Back to Project C</a>
      </Link>
    </div>
  )
}
