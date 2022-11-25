import React from 'react'
import Guard from './guard'

function withAuth(Comp: React.ComponentType<any>) {
  return ({ children }: React.PropsWithChildren) => (
    <Guard>
      <Comp>{children}</Comp>
    </Guard>
  )
}

export default withAuth
