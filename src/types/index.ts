import { ReactNode } from "react"

export type ChildrenType ={
    children: ReactNode
}

export type NavBarProps ={
    toggleTheme: (checked: boolean) => void;
    theme: string; 
  }

  export type ProjectType ={
    id: number
    name: string
    description: string
    githubLink: string
    liveVersionLink:string
    image: string
  }