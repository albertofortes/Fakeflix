import { createSlice } from '@reduxjs/toolkit'

const initialState: MovieState = {
  result: [],
  error: null,
  status: "idle",
}

export const movieRemove = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  }
)