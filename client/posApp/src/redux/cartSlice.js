import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    tax: 8,
  },
  reducers: {
    // action dediğimiz olay bu fonksiyonu çağırdığmızda gönderilen veriler.
    // state bizim başlangıç durumumuz.
    addProduct: (state, action) => {
      const findCartItem = state.cartItems.find(
        // eğer sepete aynı üründen bir daha ekliyorsak sadece quantity değerini arttırmak için find methodu kullanıyoruz.
        (item) => item._id === action.payload._id // find methodu eşleşen ilk değeri döner. eğer bulduğu itemin idsi tıkladığımız itemle aynı ise koşul true döner.
      )
      if (findCartItem) {
        findCartItem.quantity = findCartItem.quantity + 1
      } else {
        state.cartItems.push(action.payload) // cartitems'in içine actiondan aldığımız verileri push ediyoruz.
      }
      state.total += action.payload.price
    },

    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      )
      state.total -= action.payload.price * action.payload.quantity // tıkladığımız ürünün fiyatı ve sepette kaç adet varsa hepsini sil
    },

    increase: (state, action) => {
      // sepetteki ürünün adedini arttırma işlemi
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      )

      cartItem.quantity = cartItem.quantity + 1
      state.total += cartItem.price
    },

    decrease: (state, action) => {
      // sepetteki ürünün adedini arttırma işlemi
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      )

      cartItem.quantity = cartItem.quantity - 1

      if (cartItem.quantity === 0) {
        // eğer ürünün adedi 0 a eşitse sepetten kaldır
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        )
      }
      state.total -= cartItem.price
    },

    reset: (state) => {
      state.cartItems = []
      state.total = 0
    },
  },
})

export const { addProduct, deleteCart, increase, decrease, reset } =
  cartSlice.actions // reducers'in içinde yazdıklarımız actions olarak geçiyor
export default cartSlice.reducer
