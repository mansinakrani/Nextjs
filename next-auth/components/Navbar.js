import Link from 'next/link'
// import { signIn, signOut } from 'next-auth/client'; v3
import { signIn, signOut, useSession } from 'next-auth/react'; //v4

function Navbar() {
    // const [session, loading] = useSession()
    const { data: session, status } = useSession()
    const loading = status === "loading"
console.log({session, loading})

  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>

        {
            !loading && !session && (
                <li>
                <Link href='/api/auth/signin'><a onClick={e => {
                    e.preventDefault()
                    signIn('github')
                }}>Sign In</a></Link>
                </li>
            )
        }

        { session && (
                <li>
                <Link href='/api/auth/signout'><a onClick={e => {
                    e.preventDefault()
                    signOut()
                }}>Sign Out</a></Link>
                </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar