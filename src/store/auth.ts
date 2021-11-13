import { atom } from 'recoil'

export const loginUserState = atom<string | null>({
  key: 'loginUser',
  default: null,
  dangerouslyAllowMutability: true
})
