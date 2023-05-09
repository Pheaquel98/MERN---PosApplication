import { Button, Form, Input, Modal, Table, message } from "antd"
import React, { useState } from "react"

const Edit = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({})

  // Update işlemi
  const onFinish = (values) => {
    try {
      fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL +
          "/api/categories/update-category",
        {
          method: "PUT",
          body: JSON.stringify({ ...values, categoryId: editingRow._id }), // bütün değerler ve tıkladığımız kategorinin id'si
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      message.success("Category Updated")
      setCategories(
        categories.map((item) => {
          // eğer item idsi eşitse editlenen idye dön
          if (item._id === editingRow._id) {
            return { ...item, title: values.title }
          } else {
            return item
          }
        })
      )
      console.log(editingRow)
    } catch (error) {
      message.error("Something is Wrong")
    }
  }
  //-------------------------------------//

  // Delete işlemi
  const deleteCategory = (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL +
            "/api/categories/delete-category",
          {
            method: "DELETE",
            body: JSON.stringify({ categoryId: id }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        message.success("Category Deleted")
        setCategories(categories.filter((item) => item._id !== id))
      } catch (error) {
        message.error("Something is Wrong")
      }
    }
  }
  //-------------------------------------//
  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0" name="title">
              <Input defaultValue={record.title} />
            </Form.Item>
          )
        } else {
          return <p>{record.title}</p>
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center">
            <Button type="link" onClick={() => setEditingRow(record)}>
              Edit
            </Button>
            <Button type="text" htmlType="submit">
              Save
            </Button>
            <Button
              type="text"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]
  return (
    <Modal
      open={isEditModalOpen}
      title="Edit Category"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  )
}

export default Edit
