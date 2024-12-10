/* eslint-disable jsx-a11y/alt-text */
"use client"

import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <>
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
    <h1 className="text-xl font-bold">Shop</h1>
    <nav>
      <Link href="/">Home</Link> | <Link href="/shop">Shop</Link>
    </nav>
  </header>
  <main className="max-w-screen-xl mx-auto px-6 py-8">
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="text-center border p-4">
          <Image
            src={`/assets/product1.png`}
            alt="Cloth"
            width={150}
            height={200}
            className="mx-auto"
          />
          <h3 className="text-lg font-semibold mt-4">Cloths</h3>
        </div>
      ))}
    </section>
    <section className="flex justify-center items-center gap-6 mt-8">
    
        <Image
         
          src={`/assets/prodDetail.jpg`}
          alt={"product"}
          width={100}
          height={40}
        />
    
    </section>
  </main>
</>
  
  )
}

export default page
