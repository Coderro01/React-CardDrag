import React from "react";

function Bkgrd() {
  return (
    <>
      <div className="fixed z-[2] h-screen w-full ">

        <div className="absolute top-[5%] flex w-full justify-center bg-amber-200 py-10 leading-none font-semibold tracking-tighter text-black">
          HEHEHE
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw]">
          HELLOJI
        </h1>
        {/*translate for overlap*/}
      </div>
    </>
  );
}

export default Bkgrd;
