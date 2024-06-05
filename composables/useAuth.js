import { useAuthStore } from "~/store/auth"

export default () => {
  const isAuthenticated = useAuthStore().token

  return {
    isAuthenticated
  }

}