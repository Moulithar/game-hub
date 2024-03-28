import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props{
  selectedGenre : Genre | null,
  selectedPlatform: Platform | null,
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
