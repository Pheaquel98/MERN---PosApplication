import React, { useState } from "react"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, Modal, message } from "antd"
import "./style.css"

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [form] = Form.useForm()
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      message.success("Category Added")
      form.resetFields()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ul className="flex md:flex-col gap-4 text-lg">
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>All</span>
      </li>
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        title="Add New Category"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Add Category"
            rules={[
              {
                required: true,
                message: "Please fill empty fields!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  )
}

export default Categories
