import React from "react";
import { AppProvider } from "./context";
import RouteApp from "./routes";

function App() {
  return (
    <AppProvider>
      <RouteApp />
    </AppProvider>
  );
}

export default App;
