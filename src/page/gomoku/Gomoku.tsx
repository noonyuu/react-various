import { Modal } from '@/page/gomoku/Modal'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { gomokuState } from './gomokuState'
import Board from './Board'

export const Gomoku = () => {
  const [mapSize, setMapSize] = useState<number>(5)
  // モーダルの情報
  const modal = useRecoilValue(gomokuState)
  // モーダルの開閉状態
  const setModal = useSetRecoilState(gomokuState)
  // 現在のターン
  const [currTurn, setCurrTurn] = useState<string>()
  // 戦況
  const [gameState, setGameState] = useState<string[][]>()

  useEffect(() => {
    // 初期化
    boardRefresh()
  }, [mapSize])

  const boardRefresh = () => {
    console.log('boardRefresh')
    setGameState(
      Array.from({ length: mapSize }).map(() =>
        Array.from({ length: mapSize }).map(() => '')
      )
    )
  }

  const handleMapSizeChange = (event: { target: { value: string } }) => {
    setMapSize(parseInt(event.target.value, 10))
  }

  useEffect(() => {
    if (gameState) {
      if (gameCheck()) {
        alert(`${currTurn}の勝ち`)
        setModal((prev) => ({
          ...prev,
          isStart: false
        }))
      } else if (isBoardFull()) {
        alert('引き分け')
        setModal((prev) => ({
          ...prev,
          isStart: false
        }))
      }
    }
  }, [gameState])

  // 勝敗判定
  const gameCheck = useCallback(() => {
    if (!gameState) return
    console.log('gameState', gameState)
    // 横
    for (let i = 0; i < mapSize; i++) {
      if (
        gameState[i].every((col) => col === '○') ||
        gameState[i].every((col) => col === '×')
      ) {
        return true
      }
    }
    // 縦
    for (let i = 0; i < mapSize; i++) {
      if (
        gameState.every((row) => row[i] === '○') ||
        gameState.every((row) => row[i] === '×')
      ) {
        return true
      }
    }
    // 斜め
    if (
      gameState.every((row, i) => row[i] === '○') ||
      gameState.every((row, i) => row[i] === '×')
    ) {
      return true
    }
    if (
      gameState.every((row, i) => row[mapSize - 1 - i] === '○') ||
      gameState.every((row, i) => row[mapSize - 1 - i] === '×')
    ) {
      return true
    }
    return false
  }, [gameState])

  // 引き分け判定
  const isBoardFull = useCallback(() => {
    if (!gameState) return false
    return gameState.every((row) => row.every((col) => col !== ''))
  }, [gameState])

  const changeModal = useCallback(() => {
    setModal((prev) => ({
      ...prev,
      isOpen: !prev.isOpen
    }))
  }, [setModal])

  useEffect(() => {
    if (modal.isStart) {
      setCurrTurn(modal.player1)
    }
  }, [modal.isStart])

  const handleClick = (i: number, j: number) => {
    if (modal.isStart && gameState && gameState[i][j] === '') {
      setGameState((prev) => {
        if (!prev) return prev
        const newState = prev.map((row, rowIndex) =>
          row.map((col, colIndex) => {
            if (rowIndex === i && colIndex === j) {
              return currTurn === modal.player1 ? '○' : '×'
            }
            return col
          })
        )
        return newState
      })

      // ターンの切り替え
      setCurrTurn((prev) =>
        prev === modal.player1 ? modal.player2 : modal.player1
      )
    }
  }

  return (
    <div className="h-svh w-svw">
      <section className="flex h-full flex-col items-center justify-center">
        <div className="mb-4 text-2xl text-black ">
          {modal.isStart ? (
            <div className="relative w-72">
              <div className="mb-2 flex">
                <div className="w-36">NEXT TURN : </div>
                <div className="w-36">{currTurn}</div>
              </div>
              <div className="flex text-lg">
                <div className="flex w-1/2 items-center justify-center text-sm">
                  <span className="text-lg">○&nbsp;:&nbsp;</span>
                  <span className="translate-y-0.5">{modal.player1}</span>
                </div>
                vs
                <div className="flex w-1/2 items-center justify-center text-sm">
                  <span className="text-lg">×&nbsp;:&nbsp;</span>
                  {modal.player2}
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-72">
              {modal.isOpen && <Modal boardRefresh={boardRefresh}/>}
              {modal.isOpen ? (
                '入力中...'
              ) : (
                <div className="">
                  <select
                    className="mr-4 bg-white"
                    onChange={handleMapSizeChange}
                    value={mapSize}
                  >
                    <option value="3">3x3</option>
                    <option value="5">5x5</option>
                    <option value="10">10x10</option>
                  </select>
                  <button
                    className="cursor-pointer rounded-md border-2 border-gray-300 bg-white p-2"
                    onClick={changeModal}
                  >
                    ゲームスタート
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="relative">
          {!modal.isStart && (
            <div
              className={`bg-black opacity-30 size-[${mapSize * 5}rem] absolute z-10`}
            ></div>
          )}
          <Board gameState={gameState || []} handleClick={handleClick} />
        </div>
      </section>
    </div>
  )
}
