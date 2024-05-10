import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack justifyContent="space-between">
      <Skeleton
        boxSizing="border-box"
        height="32px"
        width="48px"
        borderRadius={8}
      ></Skeleton>

      <SkeletonText width="100%"></SkeletonText>
    </HStack>
  );
};

export default GenreSkeleton;
