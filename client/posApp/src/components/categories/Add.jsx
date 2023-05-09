import { Button, Form, Input, Modal, message } from "antd"
import React from "react"

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setCategories,
}) => {
  const [form] = Form.useForm()
  const onFinish = (values) => {
    try {
      fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL +
          "/api/categories/add-category",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      message.success("Category Added")
      form.resetFields()
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]) // Tüm kategorileri al ve yeni yolladığımız değeri al.
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
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
    </div>
  )
}

export default Add
