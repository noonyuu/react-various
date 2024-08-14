import { useState } from 'react'

export const Gomoku = () => {
  const mapSize: number = 3
  // ゲームが開始しているかどうか
  const isStart: boolean = true
  // ゲームスタートボタンを押したかどうか
  const [isGameStart, setIsGameStart] = useState(false)
  // プレイヤー情報
  const player1: string = ''
  const player2: string = ''

  const btn = () => {
    console.log('button')
  }
  // const handleClick = (i: number, j: number) => {
  //   console
  // }
  return (
    <div className="h-svh w-svw">
      <section className="flex h-full flex-col items-center justify-center">
        <div className="mb-4 text-2xl text-black ">
          {isStart ? (
            <div>
              <button
                className="cursor-pointer rounded-md border-2 border-gray-300 bg-white p-2"
                onClick={() => setIsGameStart(true)}
              >
                ゲームスタート
              </button>
              {/* <p>
                {player1} vs {player2}
              </p> */}
            </div>
          ) : (
            <p>ゲーム終了</p>
          )}
        </div>
        <div className="relative">
          {!isStart && (
            <div
              className={`bg-black opacity-30 size-${mapSize * 20} absolute z-10`}
            ></div>
          )}
          {Array.from({ length: mapSize }).map((_, i) => (
            <div key={i} className="z-0 flex">
              {Array.from({ length: mapSize }).map((_, j) => (
                <button
                  key={j}
                  className="button size-20 rounded-none border border-black bg-white"
                  onClick={() => console.log(i, j)}
                ></button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
