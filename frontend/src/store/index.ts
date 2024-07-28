import { create } from 'zustand'

type UsernameStore = {
  username: string
  setUsername: (value: string) => void
}

const useUsernameStore = create<UsernameStore>((set) => ({
  username: "axdborges",
  setUsername: (newValue) => set({ username: newValue }),
}))

export default useUsernameStore
