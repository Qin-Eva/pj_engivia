import { selector } from 'recoil'

export const authState = selector({
  key: 'authState',
  get: ({ get }) => {
    return 'test user'
  }
});
