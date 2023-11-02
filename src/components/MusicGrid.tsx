import {
  Card,
  Center,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useMusics from "../hooks/useMusics";
import useMusicQueryStore from "../store/musicStore";
import MusicCardBody from "./musicCard/MusicCardBody";

const MusicGrid = () => {
  const musicQuery = useMusicQueryStore((s) => s.musicQuery);
  const { data, error, imageLoading } = useMusics(musicQuery);
  if (error) return null;
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
      padding={5}
      spacing={4}
    >
      {data.length == 0 && Object.keys(musicQuery).length != 0 && (
        <Text>There is nothing here!</Text>
      )}
      {data.map((music, index) => (
        <Center key={music.id}>
          <Card
            width={"100%"}
            height={"initial"}
            borderRadius={10}
            overflow="hidden"
            mx={2}
            _hover={{
              transform :'scale(1.05)',
              transition:'transform .15s ease-in'
            }}
          >
            {imageLoading[index] ? (
              <Skeleton height={"250px"} />
            ) : (
              <Image src={music.thumbnailsSmall} height={"inherit"} minHeight={"200px"} />
            )}
            <MusicCardBody
              name={music["artist-credit"][0].name}
              type={music["release-group"]["primary-type"]}
              score={music.score}
              id={music.id}
            />
          </Card>
        </Center>
      ))}
    </SimpleGrid>
  );
};
export default MusicGrid;
