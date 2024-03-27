import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"
import type { TodoItem } from "@/app/lib/api/types"

interface TodoState {
  items: TodoItem[];
  focus?: TodoItem;
}

const initialState: TodoState = {
  items: [],
  focus: undefined
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<TodoItem[]>) => {
      state.items = action.payload
    },
    setFocus: (state, action: PayloadAction<TodoItem>) => {
      state.focus = action.payload
    }
  }
})

export const { setItems, setFocus } = todoSlice.actions

export const selectItems = (state: RootState) => state.todo.items
export const selectFocus = (state: RootState) => state.todo.focus

export default todoSlice.reducer
