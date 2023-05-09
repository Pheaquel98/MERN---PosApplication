import React from "react"
import { Form, Input, Modal, Select, Card, Button, message } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../redux/cartSlice"
import { useNavigate } from "react-router-dom"

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/bills/add-bills",
        {
          method: "POST",
          body: JSON.stringify({
            ...values,
            cartItems: cart.cartItems,
            subTotal: cart.total,
            tax: ((cart.total * cart.tax) / 100).toFixed(2),
            totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(
              2
            ),
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      if (response.status === 200) {
        message.success("Bill Created Successfully.")
        dispatch(reset())
        navigate("/bills")
      }
    } catch (error) {
      message.error("Something went Wrong.")
    }
  }
  return (
    <div>
      <Modal
        title="Create Bills"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Customer Name"
            name={"customerName"}
            rules={[{ required: true, message: "Customer name field empty!" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={"customerPhoneNumber"}
            rules={[{ required: true, message: "Phone number field empty!" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item
            label="Payment Method"
            name={"paymentMethod"}
            rules={[
              { required: true, message: "Please select payment method!" },
            ]}
          >
            <Select placeholder="Choose Payment Method">
              <Select.Option value="Cash">Cash</Select.Option>
              <Select.Option value="Credit Card">Credit Card</Select.Option>
            </Select>
          </Form.Item>

          <Card>
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
            <div className="flex justify-end">
              <Button className="mt-4" type="primary" htmlType="submit">
                Create Order
              </Button>
            </div>
          </Card>
        </Form>
      </Modal>
    </div>
  )
}

export default CreateBill
