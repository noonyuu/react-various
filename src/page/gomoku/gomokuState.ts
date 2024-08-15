import { atom } from "recoil"

export type GomokuType = {
  isOpen: boolean
  player1?: string
  player2?: string
  isStart: boolean
}

export const gomokuState = atom<GomokuType>({
  key: 'gomokuState',
  default: {
    isOpen: false,
    player1: '',
    player2: '',
    isStart: false
  }
})
