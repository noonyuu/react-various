import { gomokuState } from '@/page/gomoku/gomokuState'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

type PlayerDate = {
  player1: string
  player2: string
}
export const Modal = () => {
  const setModal = useSetRecoilState(gomokuState)
  const modal = useRecoilValue(gomokuState)
  const [playerDate, setPlayerDate] = useState<PlayerDate>({
    player1: '',
    player2: ''
  })

  // Recoil に保存されている値があれば、それを初期値として設定
  useEffect(() => {
    setPlayerDate({
      player1: modal.player1 || '',
      player2: modal.player2 || ''
    })
  }, [modal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPlayerDate((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const changeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      isStart: true,
      ...playerDate
    }))
  }

  return (
    <div className="absolute left-full z-50 flex h-80 w-full items-center justify-center border border-gray-200 bg-white text-black">
      {/* <div className="flex w-full justify-end p-3"> */}
      {/* <button
          className="flex size-8 items-center justify-center rounded-full border-green-200 bg-white p-1"
          onClick={() => changeModal()}
        >
          ✖️
        </button> */}
      {/* </div> */}
      <div className="">
        <form onSubmit={changeModal}>
          <input
            type="text"
            className="mx-auto w-52 border bg-white p-2 text-sm"
            placeholder="名前を入力してください"
            maxLength={5}
            required
            name="player1"
            value={playerDate.player1}
            onChange={handleChange}
          />
          <div className="my-2">VS</div>
          <input
            type="text"
            className="mx-auto w-52 border bg-white p-2 text-sm"
            placeholder="名前を入力してください"
            maxLength={5}
            required
            name="player2"
            value={playerDate.player2}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mx-auto mt-6 flex border-red-200 bg-white text-sm"
          >
            決定
          </button>
        </form>
      </div>
    </div>
  )
}
