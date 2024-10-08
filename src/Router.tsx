import { Routes, Route } from 'react-router-dom'

// ファイル
import { Home } from './Home'
import { Gomoku } from './page/gomoku/Gomoku'
import { RecoilRoot } from 'recoil'
import { Sound } from './page/animation/Sound'

export const Router = () => {
  const router = [
    { path: '/', element: <Home /> },
    { path: '/gomoku', element: <Gomoku /> },
    { path: '/sound', element: <Sound /> }
  ]

  interface LayoutProps {
    element: JSX.Element
  }
  function Layout({ element }: LayoutProps) {
    return (
      <>
        <RecoilRoot>{element}</RecoilRoot>
      </>
    )
  }

  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={<Layout element={element} />} />
      ))}
    </Routes>
  )
}
