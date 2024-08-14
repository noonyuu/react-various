import { Routes, Route, useNavigate } from 'react-router-dom'

// ファイル
import { Home } from './Home'
import { Gomoku } from './page/Gomoku'

export const Router = () => {
  const router = [
    { path: '/', element: <Home /> },
    { path: 'gomoku', element: <Gomoku /> }
  ]

  interface LayoutProps {
    element: JSX.Element
  }
  function Layout({ element }: LayoutProps) {
    return <>{element}</>
  }

  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={<Layout element={element} />} />
      ))}
    </Routes>
  )
}
