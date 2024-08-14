import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigator = useNavigate()
  return (
    <div className="bg-red-500" onClick={() => navigator('/gomoku')}>
      五目並べ
    </div>
  )
}
