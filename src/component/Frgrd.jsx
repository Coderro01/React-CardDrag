import React from "react";

import Card from "./Card";

function Frgrd() {
  {
    /*const icon, detail,closeorDownload , tag*/
  }

  const data = [
    {
      detail:"This is Lorem text box and it has to be more responsive as if i write the text more then it will hide beside the download and file size.",
      fileSize: "0.5mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "red" },
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 z-[3] h-full w-full">
        {/* {data.map(items, index) = function () {
          <Card data={items} />
}} */}
        {/* {data.map((items, index)=>(
        <Card data={items} />
        ))} */}
        {data.map((items, index) => (
          <Card data={items} />
        ))}
      </div>
      {/*bcz of the above paarent div in app.jsx we cannot select the bkgrnd text content which is overlap by this*/}
      {/*bkgrnd color ke sath adjustment*/}
    </>
  );
}

export default Frgrd;
