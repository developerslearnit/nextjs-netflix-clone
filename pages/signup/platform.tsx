import React from 'react'
import { db } from '../../firebase'
import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Head from 'next/head'
import useAuth from '../../hooks/useAuth'
import Table from '../../components/Table'

interface Props {
  productList: DocumentData[]
}

const Platform = ({ productList }: Props) => {
  const { logout, user } = useAuth()

  console.log('productList', productList)
  return (
    <div>
      <div>
        <Head>
          <title>Netflix</title>
          <link
            rel="shortcut icon"
            href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
          ></link>
        </Head>
        <header className="border-b border-white/10 bg-[#141414]">
          <Link href="/">
            <img
              src="https://rb.gy/ulxxee"
              alt="Netflix"
              width={150}
              height={90}
              className="cursor-pointer object-contain"
            />
          </Link>
          <button
            className="text-lg font-medium hover:underline"
            onClick={logout}
          >
            Sign Out
          </button>
        </header>
        <main className="max-5xl px-5 pt-28 pb-12 transition-all md:px-10">
          <h1 className="mb-3 text-3xl font-medium">
            Choose the plan that's right for you
          </h1>
          <ul>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you
              want. Ad-free.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
              just for you.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
              your plan anytime.
            </li>
          </ul>
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex w-full items-center justify-end self-end md:w-3/5">
              {productList.map((product) => (
                <div key={product.lookup_key} className="planBox">
                  {product.name}
                </div>
              ))}
            </div>
            <Table products={productList} />
            <button>Subscribe</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Platform

export const getServerSideProps = async () => {
  const productsCol = collection(db, 'products')

  const productSnapshot = await getDocs(productsCol)
  const productList = productSnapshot.docs.map((doc) => doc.data())
  console.log('productListProp', productList)

  return {
    props: {
      productList,
    },
  }
}
