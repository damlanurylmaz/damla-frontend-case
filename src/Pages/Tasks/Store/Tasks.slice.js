import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: {},
    isOpenCreateModal: false
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTodos: (state, action) => {
        state.todos = action.payload
    },
    setIsOpenCreateModal: (state, action) => {
      state.isOpenCreateModal = action.payload
    }
  },
})

export const TasksActions = tasksSlice.actions
export default tasksSlice.reducer