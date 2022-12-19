import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import ErrorBoundary from "Components/Modules/ErrorBoundary";
import BaseRoute from "../Routers";
import * as CONSTANTS from "Constants";
import NotifyModal from "Components/Elements/NotifyModal";
import store from "Store";
// import { PersistGate } from 'redux-persist/integration/react' // config apply persistReducer keep value change redux in localstorage

export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ChakraProvider theme={CONSTANTS.Theme}>
          <Router>
            <ErrorBoundary>
              <NotifyModal />
              <BaseRoute />
            </ErrorBoundary>
          </Router>
        </ChakraProvider>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
