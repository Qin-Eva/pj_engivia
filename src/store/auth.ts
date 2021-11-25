import { atom } from 'recoil'

export const loginUserState = atom<string | null>({
  key: 'loginUser',
  default: null,
  dangerouslyAllowMutability: true
})

export const isFeatureState = atom<boolean>({
  key: 'isFeature',
  default: false,
  dangerouslyAllowMutability: true
})
