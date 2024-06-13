import React, { useRef } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion as m } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <m.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={1}>
      <div className="flex-shrink-0 relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
        <FaRegFileAlt />
        <p className="relative text-sm mt-5 leading-tight font-semibold">
          {data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between mb-3 px-8 py-3">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoCloseOutline size="0.7em" color="#fff" />
              ) : (
                <LuDownload size="0.7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex justify-center items-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </div>
    </m.div>
  );
};

export default Card;
