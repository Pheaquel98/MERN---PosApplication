import React from "react"

const Products = () => {
  return (
    <div className="product-wrapper grid gap-4 grid-cols-card">
      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-image">
          <img
            src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
            alt=""
            className="h-28 object-cover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">Elma</span>
          <span>12₺</span>
        </div>
      </div>
    </div>
  )
}

export default Products
