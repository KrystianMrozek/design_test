import type { AvailableIcon } from './icons'

type NavigationLink = Readonly<{
  name: string
  path: string
  icon?: AvailableIcon
}>

export const NAVIGATION: Readonly<NavigationLink[]> = [
  { name: 'Wizyty', path: '/visit', icon: 'calendar' },
  { name: 'Klientki', path: '/clients', icon: 'person' },
  { name: 'Menu', path: '/menu', icon: 'menu' },
  { name: 'Odpowiedzi', path: '/quick-replies', icon: 'chat' },
  { name: 'Ustawienia', path: '/settings', icon: 'settings' },
] as const

export const DYNAMIC_NAVIGATION = {
  client: (clientId: string) => `/client/${clientId}`,
}
