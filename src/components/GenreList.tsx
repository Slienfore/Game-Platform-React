import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>

      <List>
        {/* loading skeleton */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY=".3125rem">
              <GenreSkeleton></GenreSkeleton>
            </ListItem>
          ))}

        {!isLoading &&
          genres?.results.map((genre) => (
            <ListItem key={genre.id} paddingY=".3125rem">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  // 图像保持长宽比例同时缩放来填充
                  objectFit="cover"
                  borderRadius={8}
                  boxSize="2rem"
                ></Image>

                {/* Filter Games by Genre */}
                <Button
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize="lg"
                  // change the visual style of the button
                  variant="link"
                  // 文本过长, button 显示不下
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
