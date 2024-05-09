import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./platformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        {/* 图片 */}
        <Image src={game.background_image}></Image>

        {/* 标题 */}
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((item) => item.platform)} // 将每一个对象中的 platform 收集起来
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
