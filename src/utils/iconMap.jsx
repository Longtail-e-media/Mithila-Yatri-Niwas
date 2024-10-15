import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

import { HiOutlineMail } from "react-icons/hi";

import { LiaShoePrintsSolid } from "react-icons/lia";

import { FiUser } from "react-icons/fi";

import { GrLocation } from "react-icons/gr";

import { PiProjectorScreenBold, PiLockersBold } from "react-icons/pi";

import { CgArrowLongRight } from "react-icons/cg";

const iconMap = {
  ...TbIcons,
  ...MdIcons,
  ...IoIcons,
  ...FaIcons,
  ...GiIcons,
  ...Io5Icons,
  HiOutlineMail,
  LiaShoePrintsSolid,
  FiUser,
  GrLocation,
  PiProjectorScreenBold,
  PiLockersBold,
  CgArrowLongRight,
};

export const getIconComponent = (iconName) => {
  return iconMap[iconName] || null;
};
