import { atom } from 'recoil'

export const loginUserState = atom<string>({
  key: 'loginUser',
  default: '',
  dangerouslyAllowMutability: true
})
