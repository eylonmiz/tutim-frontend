export interface NavLinks {
  id: string
  title: string
  href: string
  active?: boolean
}

export const navLinks: NavLinks[] = [
  {
    id: "form",
    title: "Form",
    href: "/form",
  },
  {
    id: "dialog",
    title: "Dialog",
    href: "/dialog",
  },
]
