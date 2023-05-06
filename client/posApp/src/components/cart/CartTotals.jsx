import { Button, message } from "antd"
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, deleteCart, increase, reset } from "../../redux/cartSlice"

const CartTotals = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="cart h-full max-h-[calc(100vh_-_80px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Products in Cart
      </h2>
      <ul className="cart-items px-2 pt-2 flex flex-col gap-y-3 overflow-y-auto py-2">
        {cart.cartItems.length > 0
          ? cart.cartItems.map((item) => {
              return (
                <li className="cart-item flex justify-between" key={item._id}>
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 object-contain cursor-pointer"
                      onClick={() => {
                        dispatch(deleteCart(item))
                        message.success("Product Removed from Cart.")
                      }}
                    />
                    <div className="flex flex-col ml-2">
                      <b>{item.title}</b>
                      <span>
                        {item.price}₺ x {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button
                      className="w-full flex items-center justify-center !rounded-full"
                      type="primary"
                      size="small"
                      icon={<PlusCircleOutlined />}
                      onClick={() => dispatch(increase(item))}
                    />
                    <span className="font-bold w-6 inline-block text-center">
                      {item.quantity}
                    </span>
                    <Button
                      className="w-full flex items-center justify-center !rounded-full"
                      type="primary"
                      size="small"
                      icon={<MinusCircleOutlined />}
                      onClick={() => {
                        if (item.quantity === 1) {
                          if (window.confirm("Remove Product?")) {
                            dispatch(decrease(item))
                            message.success("Product Removed from Cart.")
                          }
                        }
                        if (item.quantity > 1) {
                          dispatch(decrease(item))
                        }
                      }}
                    />
                  </div>
                </li>
              )
            })
          : "Empty Cart..."}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span>
              {cart.total.toFixed(2) > 0 ? cart.total.toFixed(2) : 0}₺
            </span>
          </div>
          <div className="flex justify-between p-2">
            <b>Tax %{cart.tax}</b>
            <span className="text-red-700">
              {(cart.total * cart.tax) / 100 > 0
                ? `+${((cart.total * cart.tax) / 100).toFixed(2)}`
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Total</b>
            <span className="text-xl">
              {cart.total + (cart.total * cart.tax) / 100 > 0
                ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2)
                : 0}
              ₺
            </span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button
            className="w-full"
            type="primary"
            size="large"
            disabled={cart.cartItems.length === 0 ? true : false}
          >
            Create Order
          </Button>
          <Button
            className="w-full mt-2 flex items-center justify-center"
            type="primary"
            danger
            disabled={cart.cartItems.length === 0 ? true : false}
            size="large"
            icon={<ClearOutlined />}
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                dispatch(reset())
                message.success("Cart Cleaned Successfully.")
              }
            }}
          >
            Delete Order
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartTotals
