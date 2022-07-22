import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
    // router.replace('/product') // replce history instead of pushing route in stack , we will not be able to go back on previous page
  }
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <br />
      <Link href='/product'>
        <a>Products</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}
export default Home