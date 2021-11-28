import { atom } from 'recoil'

type UserState = {
  email?: string
  photoURL?: string
}

export const loginUserState = atom<UserState>({
  key: 'loginUser',
  default: { email: undefined, photoURL: undefined },
  dangerouslyAllowMutability: true
})
