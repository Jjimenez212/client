
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
  <nav>
    <a href="/">Logo</a>
    <br/>
    <Link to={'/create-user'}>Add new User</Link>
  </nav>
     <Outlet />
    </>
  )
}

export default App
