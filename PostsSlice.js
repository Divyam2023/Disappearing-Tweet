import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '', tweet: '', dates: '' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postRemoved(state, action) {
      const {id} = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        state.filter(!existingPost)
      }
    }
  }
})


export const { postAdded, postRemoved } = postsSlice.actions
export default postsSlice.reducer