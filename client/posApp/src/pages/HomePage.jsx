import React, { useEffect, useState } from "react"
import Header from "../components/header/Header"
import Categories from "../components/categories/Categories"
import Products from "../components/products/Products"
import CartTotals from "../components/cart/CartTotals"

const HomePage = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState()
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

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/get-all-product"
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories
            categories={categories}
            setCategories={setCategories}
            setFiltered={setFiltered}
            products={products}
          />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_104px)] overflow-y-auto pb-10 min-h-[500px]">
          <Products
            search={search}
            categories={categories}
            filtered={filtered}
            products={products}
            setProducts={setProducts}
          />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  )
}

export default HomePage
