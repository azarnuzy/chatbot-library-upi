import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchChatRespon = createAsyncThunk(
  'chat/fetchChatRespon',
  async ({ input }) => {
    try {
      const response = await axios.get(
        `https://perpustakaan.upi.edu:4000/v1/api/message`,
        {
          input: input.toLowerCase(),
        }
      )
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
)
let tempChatLog = []
if (localStorage.getItem('chatLog')) {
  tempChatLog = JSON.parse(localStorage.getItem('chatLog'))
}

let tempMode = true
if (localStorage.getItem('mode')) {
  tempMode = JSON.parse(localStorage.getItem('mode'))
}

const initialState = {
  inputUser: '',
  darkMode: tempMode,
  showMenu: true,
  response: '',
  chatLog: tempChatLog,
  isLoading: false,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setDarkMode(state, action) {
      state.darkMode = !action.payload
    },
    setInputUser(state, action) {
      state.inputUser = action.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setChatLog(state, action) {
      state.chatLog = [...state.chatLog, action.payload]
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchChatRespon.fulfilled, (state, action) => {
      state.response = action.payload
    })
  },
})

export const { setDarkMode, setInputUser, setLoading, setChatLog } =
  chatSlice.actions
export const getState = (state) => state.chat
export default chatSlice.reducer
