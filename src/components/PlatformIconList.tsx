import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // [key: string]: TS 中的索引签名语法, 定义一个对象的属性键值对的类型
  // 键是字符串，对应的值是不同的图标组件
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            // use third-party icon, use the 'as' prop
            as={iconMap[platform.slug]}
            color="gray.500"
            key={platform.slug}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
