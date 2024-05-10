import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        {/* 图片 */}
        <Image src={getCroppedImageUrl(game.background_image)}></Image>

        {/* 标题 */}
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((item) => item.platform)} // 将每一个对象中的 platform 收集起来
            ></PlatformIconList>

            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>

          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top}></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
