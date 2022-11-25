import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import ErrorBoundary from 'Components/Modules/ErrorBoundary'
import BaseRoute from '../Routers'
import * as CONSTANTS from 'Constants'
import NotifyModal from 'Components/Elements/NotifyModal'
import store from 'Store'

export default function App() {
  return (
    <>
      <Provider store={store}>
          <ChakraProvider theme={CONSTANTS.Theme}>
            <Router>
              <ErrorBoundary>
                <NotifyModal />
                <BaseRoute />
              </ErrorBoundary>
            </Router>
          </ChakraProvider>
      </Provider>
    </>
  )
}
