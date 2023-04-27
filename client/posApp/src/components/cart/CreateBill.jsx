import React from "react"
import { Form, Input, Modal, Select, Card, Button } from "antd"

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  return (
    <div>
      <Modal
        title="Create Bills"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        onFinish={onFinish}
      >
        <Form layout={"vertical"}>
          <Form.Item
            label="Customer Name"
            name={"customerName"}
            rules={[{ required: true, message: "Customer name field empty!" }]}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={"phoneNumber"}
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
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Tax Total %8</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>592.92₺</b>
            </div>
            <div className="flex justify-end">
              <Button
                className="mt-4"
                type="primary"
                onClick={() => setIsModalOpen(true)}
                htmlType="submit"
              >
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
