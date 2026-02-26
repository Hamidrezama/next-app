"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const NavList = [
    { name: "home", href: "/" },
    { name: "products", href: "/product" },
    { name: "docs", href: "/docs" },
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
    { name: "order page", href: "/order-page" },
  ]
  return (


      <div>
        <header className='border-b mx-2'>
          <div className='flex justify-around items-center p-2'>
            {NavList.map((item,index) => {
              const isActive = pathname == item.href || (pathname.startsWith(item.href) && item.href !== "/")
              return (
                <Link key={index} className={`border m-1 w-full flex justify-center p-2 rounded-md hover:bg-gray-100 shadow-sm transition-all ${isActive ? "text-blue-300 font-bold" : ""}`} href={item.href}>{item.name}</Link>
              )
            })}
          </div>
        </header>

        {children}


        <footer className='fixed bottom-0 w-full mt-2 h-[200px]'>
          <div className='grid grid-cols-3 justify-center items-center gap-2 border h-full'>
            <div className='border flex justify-around items-center'>mobile</div>
            <div className='border flex justify-around items-center'>email</div>
            <div className='border flex justify-around items-center'>address</div>
          </div>
        </footer>
      </div>


  )
}
