import { useAuthStore } from "~/store/auth";

export default function useFetchApi(url, options = {}) {
  return $fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${useAuthStore().token}`,
      'Accept': 'application/json'
    },
  })
}