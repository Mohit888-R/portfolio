import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-[28px] font-bold h-screen flex items-center justify-center ">
      This Is My Portfolio
    </div>
  )
}
