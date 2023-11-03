import { Box, Button } from "@chakra-ui/react";
import useMusicDetail from "../../hooks/useMusicDetail";
import MainDetails from "./MainDetails";
interface Props {
  id: string;
}
const MusicDetails = ({ id }: Props) => {
  const { data, error } = useMusicDetail(id!);
  if (error) return null;

  return (
    <>
      <Box my={6} mx={3}>
        <Button m={1} colorScheme={"purple"}>
          Overview
        </Button>
        <Button m={1} colorScheme={"purple"}>
          Releases
        </Button>
        <Button m={1} colorScheme={"purple"}>
          Event
        </Button>
        <Button m={1} colorScheme={"purple"}>
          Area
        </Button>
        <Button m={1} colorScheme={"purple"}>
          Artist
        </Button>
      </Box>
      <Box m={4}>{data && <MainDetails music={data} />}</Box>
    </>
  );
};
export default MusicDetails;
