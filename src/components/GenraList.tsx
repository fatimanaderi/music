import {
  Button,
  HStack,
  Icon,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { SiApplemusic } from "react-icons/si";
import useGenres from "../hooks/useGenres";
import useMusicQueryStore from "../store/musicStore";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GenraList = () => {
  const { data, error, fetchNextPage, hasNextPage } = useGenres();
  if (error) return null;
  const tagName = useMusicQueryStore((s) => s.musicQuery.tag);
  const setGenreName = useMusicQueryStore((s) => s.setGenreName);
  const fetchedMusicCount = data?.pages.reduce(
    (total, page) => total + page.length,
    0
  );
  return (
    <List mx={4} className="scrollArea" id="scrollableDivGenre">
      <InfiniteScroll
        dataLength={fetchedMusicCount || 0}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
        scrollableTarget={"scrollableDivGenre"}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((genre) => (
              <ListItem key={genre.id}>
                <HStack my={3}>
                  <Icon
                    boxSize={"30px"}
                    as={SiApplemusic}
                    color={"purple.200"}
                  />
                  <Button
                    onClick={() => setGenreName(genre.name)}
                    px={1}
                    colorScheme={tagName === genre.name ? "purple" : ""}
                    variant="link"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </List>
  );
};
export default GenraList;
