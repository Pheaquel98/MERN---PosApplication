import React, { useState, useEffect } from "react"
import Header from "../components/header/Header"
import ChartsCart from "../components/charts/ChartsCart"
const ChartsPage = () => {
  const [data, setData] = useState([])

  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">Charts</h1>
        <div className="charts-section">
          <h2 className="text-lg">
            hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>
          </h2>
        </div>
        <div className="charts-cards grid xl:grid-cols-4  md:grid-cols-2 my-10 md:gap-10 gap-4">
          <ChartsCart
            title={"Total Customer"}
            amount={"6"}
            img={"images/user.png"}
          />
          <ChartsCart
            title={"Total Profit"}
            amount={"560.00₺"}
            img={"images/money.png"}
          />
          <ChartsCart
            title={"Total Sales"}
            amount={"6"}
            img={"images/sale.png"}
          />
          <ChartsCart
            title={"Total Product"}
            amount={"28"}
            img={"images/product.png"}
          />
        </div>
        <div className="flex justify-between gap-10 lg:flex-row flex-col items-center"></div>
      </div>
    </>
  )
}

export default ChartsPage
