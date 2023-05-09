import { Button, Form, Input, Modal, Select, Table, message } from "antd"
import React, { useState, useEffect } from "react"

const Edit = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState({})
  const [form] = Form.useForm()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL +
            "/api/products/get-all-product"
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL + "/api/categories/get-all"
        )
        const data = await response.json()
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title } // herbir kategori datasını dönerek herbirine bir değer veriyoruz
            })
          )
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  }, [])

  // Update işlemi
  const onFinish = (values) => {
    try {
      fetch(
        import.meta.env.VITE_REACT_APP_SERVER_URL +
          "/api/products/update-product",
        {
          method: "PUT",
          body: JSON.stringify({ ...values, productId: editingItem._id }), // bütün değerler ve tıkladığımız kategorinin id'si
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
      message.success("Product Updated")
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values
          }
          return item
        })
      )
    } catch (error) {
      message.error("Something is Wrong")
    }
  }
  //-------------------------------------//

  // Delete işlemi
  const deleteProduct = (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        fetch(
          import.meta.env.VITE_REACT_APP_SERVER_URL +
            "/api/products/delete-product",
          {
            method: "DELETE",
            body: JSON.stringify({ productId: id }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        )
        message.success("Product Deleted")
        setProducts(products.filter((item) => item._id !== id))
      } catch (error) {
        message.error("Something is Wrong")
      }
    }
  }
  //-------------------------------------//
  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
        return <p>{record.title}</p>
      },
    },
    {
      title: "Product Image",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img
            src={record.img}
            alt=""
            className="w-full h-[100px] object-contain"
          />
        )
      },
    },
    {
      title: "Product Price",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Product Category",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div className="flex items-center justify-center">
            <Button
              type="link"
              onClick={() => {
                setIsEditModalOpen(true)
                setEditingItem(record)
              }}
            >
              Edit
            </Button>
            <Button
              type="text"
              danger
              onClick={() => deleteProduct(record._id)}
            >
              Delete
            </Button>
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{ x: 1000, y: 600 }}
      />
      <Modal
        title="Add New Product"
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
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
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Edit
