// import React from 'react';
// import { CssBaseline, Toolbar, AppBar, Container } from '@mui/material';
// import Sidebar from './service/router/Sidebar';

// function App() {
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           {/* Add your app's title or other content here */}
//         </Toolbar>
//       </AppBar>
//       <Sidebar />
//       <Container style={{ marginLeft: 400, padding: '20px' }}>
//         {/* Your main content goes here */}
//       </Container>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, useRouteError } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "../src/service/routes";
import Home from "./pages/home";
import ErrorPage from "./pages/errror";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/root" element={<MainLayout />}>
          {routes}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
