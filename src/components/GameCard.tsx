import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

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
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
