import React from "react";

import Bkgrd from "./component/Bkgrd";
import Frgrd from "./component/Frgrd";

function App() {
  return (
    <>
      <div className="relative h-screen w-full bg-cyan-600">
        <Bkgrd />
        <Frgrd />
      </div>
    </>
  );
}

export default App;
