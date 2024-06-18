import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    isOpenCreateModal: false,
    isOpenEditModal: false,
    editedTask: {}
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
    },
    setEditedTask: (state, action) => {
      state.editedTask = action.payload
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if(task.id === action.payload.id) {
          return action.payload
        }
        return task
      })
    }
  },
})

export const TasksActions = tasksSlice.actions
export default tasksSlice.reducer