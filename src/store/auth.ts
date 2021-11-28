import { atom } from 'recoil'

type UserState = {
  uid: string | null
  email: string | null
  photoURL: string | null
}

export const loginUserState = atom<UserState>({
  key: 'loginUser',
  default: { uid: null, email: null, photoURL: null },
  dangerouslyAllowMutability: true
})
