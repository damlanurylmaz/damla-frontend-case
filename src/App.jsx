  import { Provider } from 'react-redux'
import './App.scss'
import Tasks from './Pages/Tasks/Tasks'

function App() {
  return (
    <Provider>
      <Tasks />
    </Provider>
  )
}

export default App
