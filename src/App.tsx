import { useRoutes, Link } from 'raviger'
import routes from './routes'
import './App.css'

function App() {
  const route = useRoutes(routes)
  return (
    <div className="root">
      <ul className="nav">
        <li>
          <Link href="/play">Play</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/drag">Drag</Link>
        </li>
      </ul>
      {route}
    </div>
  )
}

export default App
