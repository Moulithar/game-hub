import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImages from "../services/image-url";
import CrtiticScore from "./CrtiticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}> 
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CrtiticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
