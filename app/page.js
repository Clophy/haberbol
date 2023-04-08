
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1 className='font-bold text-bold text-9xl text-center'>On Sale!</h1>
    <p className='font-bold text-bold text-4xl text-center'>iletişim: <Link href={"mailto:barangenez@hotmail.com"}>barangenez@hotmail.com</Link></p>
    </>
  )
}
