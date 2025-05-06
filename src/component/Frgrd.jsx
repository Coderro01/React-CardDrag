import React from "react";

import { useRef } from "react";
import Card from "./Card";

function Frgrd() {
  const ref = useRef(null);

  const data = [
    {
      detail:
        "This is Lorem text box and it has to be more responsive as if i write the text more then it will hide beside the download and file size.",
      fileSize: "0.5mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "red" },
    },
    {
      detail:
        "This is Lorem text box and it has to be more responsive as if i write the text more then it will hide beside the download and file size.",
      fileSize: "0.5mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "red" },
    },
    {
      detail:
        "This is Lorem text box and it has to be more responsive as if i write the text more then it will hide beside the download and file size.",
      fileSize: "0.5mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Downloaded", tagColor: "red" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] flex h-full w-full flex-wrap gap-6 p-2"
      >
        {data.map((items) => (
          <Card data={items} reference={ref} />
        ))}
      </div>
      {/*bcz of the above paarent div in app.jsx we cannot select the bkgrnd text content which is overlap by this*/}
      {/*bkgrnd color ke sath adjustment*/}
    </>
  );
}

export default Frgrd;
