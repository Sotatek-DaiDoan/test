import { Route } from 'react-router-dom'
import LayoutPrivate from 'Layouts/LayoutPrivate'

import { RouteComponent } from 'Types'

const PrivateRoute: RouteComponent = ({ Component, component, ...props }) => {
  const WrappedComp = () => (
    <LayoutPrivate>
      <Component />
    </LayoutPrivate>
  )
  return <Route {...props} component={() => WrappedComp()} />
}

export default PrivateRoute
