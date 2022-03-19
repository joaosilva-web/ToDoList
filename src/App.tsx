import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'


export function App() {
  return (
    <>
      <Header />
      <h1>Hello world</h1>
      <TaskList />
    </>
  )
}