import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card >
        {/* 图片 */}
        <Image src={game.background_image}></Image>

        {/* 标题 */}
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>

          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((item) => item.platform)} // 将每一个对象中的 platform 收集起来
            ></PlatformIconList>

            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
