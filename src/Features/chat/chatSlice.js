import { createSlice } from '@reduxjs/toolkit'

// export const fetchValidateList = createAsyncThunk(
//     'admin/fetchValidateList',
//     async ({ page, size }) => {
//       try {
//         const params = { page: page, size: size, 'created-at': 'newest' };
//         const response = await axiosClient.get(
//           `${apiConfig.baseUrl}booking/validate-list`,
//           {
//             params,
//           }
//         );

//         return response.data;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   );
let tempChatLog = []
if (localStorage.getItem('chatLog')) {
  tempChatLog = JSON.parse(localStorage.getItem('chatLog'))
}

let tempMode = true
if (localStorage.getItem('mode')) {
  tempMode = JSON.parse(localStorage.getItem('mode'))
}

console.log(tempMode)
const initialState = {
  inputUser: '',
  darkMode: tempMode,
  showMenu: true,
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
    // builder.addCase(fetchUser.fulfilled, (state, action) => {
    //   state.users = action.payload
    // })
  },
})

export const { setDarkMode, setInputUser, setLoading, setChatLog } =
  chatSlice.actions
export const getState = (state) => state.chat
export default chatSlice.reducer
