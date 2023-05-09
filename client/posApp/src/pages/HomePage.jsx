import React, { useEffect, useState } from "react"
import Header from "../components/header/Header"
import Categories from "../components/categories/Categories"
import Products from "../components/products/Products"
import CartTotals from "../components/cart/CartTotals"
import { Spin } from "antd"

const HomePage = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState()
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/categories/get-all"
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
          import.meta.env.VITE_REACT_APP_SERVER_URL +
            "/api/products/get-all-product"
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
      {products && categories ? (
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
      ) : (
        <Spin
          size="large"
          className="absolute top-1/2 left-1/2 flex items-center justify-center"
        />
      )}
    </div>
  )
}

export default HomePage
