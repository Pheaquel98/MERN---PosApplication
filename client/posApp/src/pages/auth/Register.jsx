import { Button, Form, Input, Carousel } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import AuthCarousel from "../../components/auth/AuthCarousel"

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Please enter valid username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Please enter valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Please enter valid password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please enter valid password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Already have account?&nbsp;
            <Link to="/login" className="text-blue-500 font-bold">
              Sign in now
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel autoplay className="!h-full px-6">
                <AuthCarousel
                  img="images/responsive.svg"
                  title="Responsive"
                  desc="Compatible with all devices."
                />
                <AuthCarousel
                  img="images/statistic.svg"
                  title="Charts"
                  desc="Detailed statistic charts."
                />
                <AuthCarousel
                  img="images/customer.svg"
                  title="Customer Happines"
                  desc="Satisfied customers with the product at end of the experience."
                />
                <AuthCarousel
                  img="images/admin.svg"
                  title="Administration Panel"
                  desc="Manage from one place."
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
