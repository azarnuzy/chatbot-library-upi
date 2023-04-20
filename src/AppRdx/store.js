import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../Features/chat/chatSlice'

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
})
