import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigator = useNavigate()
  return (
    <div className="">
      <div
        className="bg-red-500"
        onClick={() => navigator('/gomoku', { state: { id: 5 } })}
      >
        五目並べ
      </div>
    </div>
  )
}
