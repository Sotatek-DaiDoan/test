import React from 'react'
import Page500 from 'Pages/Error500Page'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import LayoutCommon from 'Layouts/LayoutCommon'
import { isEqual } from 'lodash'

type Props = RouteComponentProps<{}> & React.PropsWithChildren<{}>

type State = {
  error: string
  hasError: boolean
  errorPage: string
}

const initState: State = { error: '', hasError: false, errorPage: '' }

const page500 = (
  <LayoutCommon>
    <Page500 />
  </LayoutCommon>
)

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initState
  }
  //  run first
  componentDidCatch(error: any) {
    console.trace(
      '🚀 ~ file: index.tsx ~ line 21 ~ componentDidCatch ~ error',
      error
    )
    
    this.setState({
      error: `${error.message}`,
      hasError: true,
      errorPage: this.props.location.pathname,
    })
    return
  }

  // run after error happened
  componentDidUpdate(): void {
    if (isEqual(this.state, initState)) return
    //  if current page doesn't error page reset error state
    if (this.state.errorPage !== this.props.location.pathname)
      this.setState(initState)
  }

  render() {
    const isPageHasError = this.state.errorPage === this.props.location.pathname
    
    if (this.state.hasError && isPageHasError) return page500
    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
