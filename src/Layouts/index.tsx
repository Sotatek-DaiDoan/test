import React from 'react'

type Props = {}

const ExampleComp: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return <div>This is ChildComp</div>
}

export default ExampleComp
