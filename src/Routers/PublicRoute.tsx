import { Route } from 'react-router-dom'

import LayoutCommon from 'Layouts/LayoutCommon'

import { RouteComponent } from 'Types'

const PublicRoute: RouteComponent = ({ Component, component, ...props }) => {
  const WrappedComp = () => (
    <LayoutCommon>
      <Component />
    </LayoutCommon>
  )
  return <Route {...props} component={WrappedComp} />
}

export default PublicRoute
