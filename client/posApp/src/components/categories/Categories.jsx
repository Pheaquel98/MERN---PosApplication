import React, { useEffect, useState } from "react"
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import "./style.css"
import Add from "./Add"
import Edit from "./Edit"

const Categories = ({ categories, setCategories, setFiltered, products }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [categoryTitle, setCategoryTitle] = useState("All")
  useEffect(() => {
    if (categoryTitle === "All") {
      // Eğer seçilen kategori tümü ise bütün ürünleri göster
      setFiltered(products)
    } else {
      setFiltered(products.filter((item) => item.category === categoryTitle)) // seçtiğimiz kategorinin başlığına göre filtreleme yapar
    }
  }, [setFiltered, products, categoryTitle])

  return (
    <ul className="flex md:flex-col gap-4 text-lg">
      {categories.map((item) => (
        <li
          className={`category-item ${
            item.title === categoryTitle && "bg-green-400"
          }`}
          key={item._id}
          onClick={() => {
            setCategoryTitle(item.title)
          }}
        >
          <span>{item.title}</span>
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        className="category-item !bg-orange-600 hover:opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  )
}

export default Categories
