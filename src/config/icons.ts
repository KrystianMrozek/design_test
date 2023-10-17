// get new icons from https://icones.js.org/collection/fluent

export const ICONS = {
  back: () => import('@/assets/icons/back.svg'),
  calendar: () => import('@/assets/icons/calendar.svg'),
  chat: () => import('@/assets/icons/chat.svg'),
  company: () => import('@/assets/icons/company.svg'),
  menu: () => import('@/assets/icons/menu.svg'),
  person: () => import('@/assets/icons/person.svg'),
  plusCalendar: () => import('@/assets/icons/plus-calendar.svg'),
  plusCircle: () => import('@/assets/icons/plus-circle.svg'),
  plusPerson: () => import('@/assets/icons/plus-person.svg'),
  quickReply: () => import('@/assets/icons/quick-reply.svg'),
  settings: () => import('@/assets/icons/settings.svg'),
} as const

export type AvailableIcon = keyof typeof ICONS
