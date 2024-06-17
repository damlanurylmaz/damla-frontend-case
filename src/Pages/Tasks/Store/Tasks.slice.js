import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    isOpenCreateModal: false,
    isOpenEditModal: false
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload
    },
    addTask: (state, action) => {
      state.tasks.unshift(action.payload)
    },
    setIsOpenCreateModal: (state, action) => {
      state.isOpenCreateModal = action.payload
    },
    setIsOpenEditModal: (state, action) => {
      state.isOpenEditModal = action.payload
    }
  },
})

export const TasksActions = tasksSlice.actions
export default tasksSlice.reducer