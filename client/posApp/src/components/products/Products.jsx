import React, { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import Add from "./Add"

const Products = ({ categories }) => {
  const [products, setProducts] = useState([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
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
    <div className="product-wrapper grid gap-4 grid-cols-card">
      {products.map((item) => (
        <ProductItem item={item} key={item._id} />
      ))}
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-600 flex justify-center items-center hover:opacity-90">
        <EditOutlined className="text-white md:text-2xl" />
      </div>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  )
}

export default Products
