import React from "react";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/toaster";

// Single-page app (prerendered via vite-react-ssg). No client router needed —
// navigation is in-page anchor scrolling; unknown paths are rewritten to "/".
const App = () => {
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
};

export default App;
