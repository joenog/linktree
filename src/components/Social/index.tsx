import { ReactNode } from "react";

interface SocialPros {
  url: string,
  children: ReactNode
}

export function Social({url, children}: SocialPros) {

  return(
    <>
      <a href={url}
        rel="noopener noreferrer"
        target="_black"
      >
      {children}
      </a>
    </>
  )
}