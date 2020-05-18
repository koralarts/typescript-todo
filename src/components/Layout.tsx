import * as React from 'react'

export interface LayoutProps {
  children: React.ReactChild
}

export const Layout = (props: LayoutProps) => {
  const children: React.ReactChild = props.children

  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <main>{children}</main>
      <footer>Todo Footer</footer>
    </>
  )
}
