import { Button, Form, Input, Modal, Select, message } from "antd"
import React from "react"

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  products,
  setProducts,
}) => {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      message.success("Product Added")
      form.resetFields()
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]) // Tüm ürünleri al ve yeni yolladığımız değeri al.
      setIsAddModalOpen(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Modal
        title="Add New Product"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Add Product"
            rules={[
              {
                required: true,
                message: "Please fill empty fields!",
              },
            ]}
          >
            <Input placeholder="Enter product name." />
          </Form.Item>
          <Form.Item
            name="img"
            label="Product Image"
            rules={[
              {
                required: true,
                message: "Please fill empty fields!",
              },
            ]}
          >
            <Input placeholder="Enter product image." />
          </Form.Item>
          <Form.Item
            name="price"
            label="Product Price"
            rules={[
              {
                required: true,
                message: "Please fill empty fields!",
              },
            ]}
          >
            <Input placeholder="Enter product price." />
          </Form.Item>
          <Form.Item
            name="category"
            label="Select Category"
            rules={[
              {
                required: true,
                message: "Please select category!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Add
