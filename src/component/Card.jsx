import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import motion from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        dragConstraint={reference}
        className="flex-shring-0 relative h-72 w-60 overflow-hidden rounded-[40px] bg-red-950 px-8 py-10"
      >
        <FaRegFileCode />
        <p className="mt-5 text-xl leading-tight">{data.detail}</p>
        {/*fetch from frgrd.jsx*/}

        <div className="footer absolute bottom-0 left-0 w-full bg-gray-500 py-3">
          <div className="mb-3 flex items-center justify-between px-8 py-3">
            <h4>{data.fileSize}</h4> {/*fetch from frgrd.jsx*/}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
              {data.close ? (
                <ImCross size="23px" color="red" />
              ) : (
                <FaDownload size="23px" color="black" />
              )}
              {/*fetch from frgrd.jsx & yeh nhi toh yeh mtlb hai idr*/}
            </div>
          </div>

          {/*tagColor & tagTiltle*/}
          {data.tag.isOpen && (
            <div
              className={`tag flex w-full items-center justify-center ${
                data.tag.tagColor === "blue" ? "bg-red-400" : "bg-yellow-500"
              } py-4`}
            >
              <h3 className="text-[17px] font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
          {/*agr open hai ya dwnloadable hai toh show kro nhi toh kuch mt dhekhaao*/}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
