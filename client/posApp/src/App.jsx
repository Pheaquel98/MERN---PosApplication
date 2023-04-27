import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import BillPage from "./pages/BillPage"
import CustomerPage from "./pages/CustomerPage"
import ChartsPage from "./pages/ChartsPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/bills" element={<BillPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/charts" element={<ChartsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App