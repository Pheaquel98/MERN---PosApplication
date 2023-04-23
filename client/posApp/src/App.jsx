import { useState } from "react"
import { Button, Space } from "antd"
import Header from "./components/Header/Header"
import Categories from "./components/categories/Categories"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-104px)]">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <div>products</div>
        </div>
        <div className="cart-totals">
          <div>cart totals</div>
        </div>
      </div>
    </div>
  )
}

export default App
