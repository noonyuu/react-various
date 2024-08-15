import { FC } from 'react'

type BoardProps = {
  gameState: string[][]
  handleClick: (i: number, j: number) => void
}

const Board: FC<BoardProps> = ({ gameState, handleClick }) => {
  return (
    <div className="relative">
      {gameState?.map((row, i) => (
        <div key={i} className="z-0 flex">
          {row.map((col, j) => (
            <button
              key={j}
              className="button size-20 rounded-none border border-black bg-white text-black text-2xl"
              onClick={() => handleClick(i, j)}
            >
              {col}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
