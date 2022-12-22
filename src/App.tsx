import React, { Suspense } from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { SideNav, Login, SignUp, PageNotFound, FileView } from "./Components";
import Loading from "./Components/Loading";

const App = () => {
  return (
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <Router basename="notes-app">
          <Routes>
            <Route path="/" element={<SideNav />}>
              <Route path=":FolderName">
                <Route path=":FileID" element={<FileView />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </ChakraProvider>
  );
};

export default React.memo(App);
