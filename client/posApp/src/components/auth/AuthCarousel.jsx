import React from "react"

const AuthCarousel = ({ img, title, desc }) => {
  return (
    <div className="!flex flex-col items-center justify-center h-full mb-14">
      <img src={img} className="w-[600px] h-[400px] mb-2" alt="" />
      <h3 className="text-4xl text-white text-center font-bold">{title}</h3>
      <p className="mt-5 text-center text-white text-2xl">{desc}</p>
    </div>
  )
}

export default AuthCarousel
