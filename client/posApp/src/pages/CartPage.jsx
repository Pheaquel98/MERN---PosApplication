import React, { useState } from "react"
import Header from "../components/header/Header"
import { Table, Card, Button, Modal, message, Popconfirm } from "antd"
import CreateBill from "../components/cart/CreateBill"
import { useDispatch, useSelector } from "react-redux"
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"
import { decrease, deleteCart, increase } from "../redux/cartSlice"

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const columns = [
    {
      title: "Product Image",
      dataIndex: "img",
      key: "img",
      width: 150,
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-contain" />
      },
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{text.toFixed(2)}₺</span>
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center">
            <Button
              className="w-full flex items-center justify-center !rounded-full"
              type="primary"
              size="small"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />
            <span className="font-bold w-6 inline-block text-center">
              {record.quantity}
            </span>
            <Button
              className="w-full flex items-center justify-center !rounded-full"
              type="primary"
              size="small"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("Remove Product?")) {
                    dispatch(decrease(record))
                    message.success("Product Removed from Cart.")
                  }
                }
                if (record.quantity > 1) {
                  dispatch(decrease(record))
                }
              }}
            />
          </div>
        )
      },
    },
    {
      title: "Total",
      dataIndex: "price",
      key: "price",
      render: (text, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Popconfirm
            title="Delete this product?"
            onConfirm={() => {
              dispatch(deleteCart(record))
              message.success("Product Removed from Cart.")
            }}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        )
      },
    },
  ]

  return (
    <>
      <Header />
      <div className="px-6 ">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {cart.total.toFixed(2) > 0 ? cart.total.toFixed(2) : 0}₺
              </span>
            </div>
            <div className="flex justify-between my-2">
              <span>Tax Total %8</span>
              <span className="text-red-600">
                {(cart.total * cart.tax) / 100 > 0
                  ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                  : 0}
                ₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {cart.total + (cart.total * cart.tax) / 100 > 0
                  ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                  : 0}
                ₺
              </b>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Create Order
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default CartPage
