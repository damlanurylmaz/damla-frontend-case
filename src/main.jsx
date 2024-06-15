import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './Pages/Tasks/Store/Tasks.slice';
import PageLayout from './Components/PageLayout';

const store = configureStore({
  reducer: {tasks: tasksSlice}
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PageLayout>
      <App />
    </PageLayout>
  </Provider>
);