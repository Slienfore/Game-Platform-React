import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Skeleton,
  SkeletonText,
  Box,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <List>
      {/* loading skeleton */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <GenreSkeleton></GenreSkeleton>
          </ListItem>
        ))}

      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
              boxSize="32px"
            ></Image>

            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
