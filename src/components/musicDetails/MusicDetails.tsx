import { Box, Button } from "@chakra-ui/react";
import useMusicDetail from "../../hooks/useMusicDetail";
interface Props {
  id: string;
}
const MusicDetails = ({ id }: Props) => {
  const { data, error } = useMusicDetail(id!);
  if (error) return null;


  return (
    <Box  my={6} mx={3}>
      <Button m={1} colorScheme={"purple"}>
        Releases
      </Button>
      <Button m={1} colorScheme={"purple"}>
        Releases
      </Button>
      <Button m={1} colorScheme={"purple"}>
        Releases
      </Button>
      <Button m={1} colorScheme={"purple"}>
        Releases
      </Button>
      <Button m={1} colorScheme={"purple"}>
        Releases
      </Button>
    </Box>
  );
};
export default MusicDetails;
