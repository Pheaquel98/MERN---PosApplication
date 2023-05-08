import React, { useEffect, useState } from "react"
import Header from "../components/header/Header"
import { Table, Card, Button, Modal } from "antd"
import PrintBill from "../components/bills/PrintBill"

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [billItems, setBillItems] = useState()
  const [customer, setCustomer] = useState()

  useEffect(() => {
    const getBills = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bills/get-all-bills"
        )
        const data = await response.json()
        setBillItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBills()
  }, [])

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Customer Phone",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total Price",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => {
        return <span>{text}₺</span>
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Button
            type="link"
            className="pl-0"
            onClick={() => {
              setIsModalOpen(true)
              setCustomer(record)
            }}
          >
            Print
          </Button>
        )
      },
    },
  ]

  return (
    <>
      <Header />
      <div className="px-6 ">
        <h1 className="text-4xl font-bold text-center mb-4">Bills</h1>
        <Table
          dataSource={billItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{
            x: 1000,
            y: 300,
          }}
        />
      </div>
      <PrintBill
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        customer={customer}
      />
    </>
  )
}

export default BillPage
