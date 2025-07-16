import { useClientMount } from "./useClientMount"

const isClient: Boolean = typeof window !== 'undefined'

export function useMount(
  isOpen: boolean,
  config: any = {}
): (fn: (values: any, mounted: boolean) => React.ReactNode) => React.ReactNode {
  if (isClient) {
    return useClientMount(isOpen, config)
  }
  return (fn) => fn(config?.from ?? 0, isOpen)
}