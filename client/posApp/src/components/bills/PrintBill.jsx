import React from "react"
import { Button, Modal } from "antd"

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div>
      <Modal
        title="Print Bill"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        width={800}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo py-4">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              <div className="bill-details">
                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Bill Details</p>
                    <p>Unwrapped</p>
                    <p>Fake Street 123</p>
                    <p>San Javier</p>
                    <p>CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Bill</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Bill Number</p>
                      <p>00041</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">
                        Date of Issue
                      </p>
                      <p>2022-11-21</p>
                    </div>
                  </div>
                  <div className="text-md text-slate-500 sm:block hidden">
                    <div>
                      <p className="font-bold text-slate-700">Terms</p>
                      <p>10 Day</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">Due</p>
                      <p>2023-11-23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill-table-area mt-8">
                <table className="min-w-full divide-y divide-slate-500">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th
                        scope="col"
                        className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                      >
                        Title
                      </th>
                      <th
                        colSpan={4}
                        scope="col"
                        className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden text-center"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center text-sm font-normal text-slate-700  md:pl-0 sm:table-cell hidden"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700  md:pl-0"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-4 sm:table-cell hidden">
                        <img
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                          className="w-12 h-12 object-cover"
                        />
                      </td>
                      <td className="py-4">
                        <div className="flex flex-col">
                          <span className="font-medium">Elma</span>
                          <span className="sm:hidden inline-block text-xs">
                            1 unit at 5₺
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-center sm:table-cell hidden">
                        <span className="">5₺</span>
                      </td>
                      <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                        <span className="">1</span>
                      </td>
                      <td className="py-4 text-end sm:table-cell hidden">
                        <span className="">5.00₺</span>
                      </td>
                      <td className="py-4 text-end sm:hidden" colSpan={4}>
                        <span className="">5.00₺</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        className="text-right pt-4 sm:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">
                          Subtotal
                        </span>
                      </th>
                      <th
                        className="text-left pt-4 sm:hidden"
                        scope="row"
                        colSpan="4"
                      >
                        <p className="font-normal text-slate-700">Subtotal</p>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">61₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-right pt-4 sm:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">Tax</span>
                      </th>
                      <th
                        className="text-left pt-4 sm:hidden"
                        colSpan="4"
                        scope="row"
                      >
                        <p className="font-normal text-slate-700">Tax</p>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-red-600">+4.88₺</span>
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-right pt-4 sm:table-cell hidden"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">
                          Total
                        </span>
                      </th>
                      <th
                        className="text-left pt-4 sm:hidden"
                        colSpan="4"
                        scope="row"
                      >
                        <p className="font-normal text-slate-700">Total</p>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">
                          65.88₺
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-9">
                  <div className="border-t pt-9 border-slate-400">
                    <p className="text-sm font-light text-slate-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minus alias amet recusandae non ducimus, deserunt impedit
                      omnis cumque. Perferendis, aliquid. Consequuntur, autem
                      quas voluptatibus dicta explicabo quam ducimus sapiente
                      accusantium? Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Amet sequi nisi eius. Repellat amet
                      veniam quis exercitationem. Non esse fugit distinctio,
                      iusto minima optio molestiae totam fuga aliquam quae
                      placeat. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Exercitationem non, sint quae reiciendis
                      ipsa asperiores saepe iste, in hic veritatis assumenda,
                      iusto nobis eum quia dolor velit illo nulla eveniet.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button size="large" type="primary">
            Print
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default PrintBill
