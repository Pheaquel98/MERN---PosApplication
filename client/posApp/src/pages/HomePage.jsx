import React, { useEffect, useState } from "react"
import Header from "../components/header/Header"
import Categories from "../components/categories/Categories"
import Products from "../components/products/Products"
import CartTotals from "../components/cart/CartTotals"

const HomePage = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/categories/get-all"
        )
        const data = await response.json()
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title } // herbir kategori datasını dönerek herbirine bir değer veriyoruz
            })
          )
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  }, [])
  return (
    <div>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_104px)] md:pb-6">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_104px)]">
          <Products categories={categories} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  )
}

export default HomePage
