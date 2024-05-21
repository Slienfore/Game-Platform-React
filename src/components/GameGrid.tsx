import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  // 统计分页中所有条目的数量
  const fetchedGamesCount =
    games?.pages.reduce((collect, page) => collect + page.results.length, 0) ||
    0;

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      // 双重取反
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      {/* 响应式表格 小型设备: 1 个... */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {!isLoading &&
          games?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
