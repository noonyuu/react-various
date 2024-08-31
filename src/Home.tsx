import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigator = useNavigate()
  return (
    <div className="">
      <div className="bg-red-500" onClick={() => navigator('/gomoku')}>
        五目並べ
      </div>
      <div className="bg-red-500" onClick={() => navigator('/edamame')}>
        サウンド
      </div>
    </div>
  )
}
