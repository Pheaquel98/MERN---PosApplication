import React from "react"
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  LineChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import { Badge, Input, message } from "antd"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ({ search, setSearch }) => {
  const cart = useSelector((state) => state.cart)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const logout = () => {
    if (window.confirm("Do you want logout?")) {
      localStorage.removeItem("postUser")
      navigate("/login")
      message.success("Logout Successfully.")
    }
  }
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
          </Link>
        </div>
        <div
          className="header-search flex-1 flex justify-center"
          onClick={() => {
            pathname !== "/" && navigate("/")
          }}
        >
          <Input
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>{" "}
        <div className="menu-links  flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4">
          <Link to="/" className={`menu-link ${pathname === "/" && "active"}`}>
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
            className="md:flex hidden"
          >
            <Link
              to="/cart"
              className={`menu-link ${pathname === "/cart" && "active"}`}
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
          <Link
            to="/bills"
            className={`menu-link ${pathname === "/bills" && "active"}`}
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Bills</span>
          </Link>
          <Link
            to="/customers"
            className={`menu-link ${pathname === "/customers" && "active"}`}
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Customers</span>
          </Link>
          <div onClick={logout}>
            <Link className="menu-link">
              <LogoutOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Logout</span>
            </Link>
          </div>
        </div>
        <Badge
          count={cart.cartItems.length}
          offset={[0, 0]}
          className="md:hidden flex"
        >
          <Link
            to="/cart"
            className={`menu-link ${pathname === "/cart" && "active"}`}
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        </Badge>
      </header>
    </div>
  )
}

export default Header
