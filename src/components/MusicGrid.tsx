import { Text } from "@chakra-ui/react";
import useMusics from "../hooks/useMusics";

const MusicGrid = () => {
  const {musics , error} = useMusics()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {musics.map((music) => (
          <li key={music.id}>{music.name}</li>
        ))}
      </ul>
    </>
  );
};
export default MusicGrid;
