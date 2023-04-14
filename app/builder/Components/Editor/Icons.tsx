import {
  BiRightArrow,
  BiBorderRadius,
  BiBorderBottom,
  BiBorderLeft,
  BiBorderRight,
  BiBorderTop
} from "react-icons/bi";
import { AiOutlinePlus, AiOutlinePlusSquare } from "react-icons/ai";

export const Caret = () => <BiRightArrow className="text-blue-300" />;

export const Plus = () => <AiOutlinePlusSquare className="text-blue-300" />;

export const Exit = () => <AiOutlinePlus className="rotate-45" />;

export const BorderRadius = ({ position }: { position: string }) => {
  let deg = "";
  switch (position) {
    case "top-left":
      deg = "rotate-[270deg]";
      break;
    case "top-right":
      deg = "rotate-[0deg]";
      break;
    case "bottom-left":
      deg = "rotate-[180deg]";
      break;
    case "bottom-right":
      deg = "rotate-[90deg]";
      break;
    default:
      deg = "rotate-[0deg]";
      break;
  }
  return <BiBorderRadius className={deg} />;
};

export const Border = ({ position }: { position: string }) => {
  switch (position) {
    case "top":
      return <BiBorderTop />;
    case "bottom":
      return <BiBorderBottom />;
    case "left":
      return <BiBorderLeft />;
    case "right":
      return <BiBorderRight />;
    default:
      return <BiBorderTop />;
  }
};
