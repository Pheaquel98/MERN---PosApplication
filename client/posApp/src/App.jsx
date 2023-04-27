import { useState } from "react"
import { Button, Space } from "antd"
import Header from "./components/header/Header"
import Categories from "./components/categories/Categories"
import Products from "./components/products/Products"
import CartTotals from "./components/cart/CartTotals"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_104px)] md:pb-6">
          <Categories />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_104px)]">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  )
}

export default App
