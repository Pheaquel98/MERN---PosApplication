import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
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
    },
  },
})

export const { addProduct } = cartSlice.actions // reducers'in içinde yazdıklarımız actions olarak geçiyor
export default cartSlice.reducer
