import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null)


  const data = [
    {
      desc: "This is your document description that you can add",
      fileSize: "0.5MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "#2ECC71" },
    },
    {
      desc: "This is your document description that you can add",
      fileSize: "0.3MB",
      close: true,
      tag: { isOpen: true, tagTitle: "On Progress", tagColor: "blue" },
    },
    {
      desc: "This is your document description that you can add",
      fileSize: "0.9MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
      <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref}/>
        ))}
      </div>
  );
};

export default Foreground;
