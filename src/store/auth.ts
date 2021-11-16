import { atom } from 'recoil'

type UserState = {
  email: string | null
  photoURL: string | null
}

export const loginUserState = atom<UserState>({
  key: 'loginUser',
  default: { email: '', photoURL: '' },
  dangerouslyAllowMutability: true
})
