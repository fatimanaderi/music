import { useParams } from "react-router-dom";
import useMusicDetail from "../hooks/useMusicDetail";
import MusicImg from "../components/MusicImg";
import { Box, Card, Center, SimpleGrid } from "@chakra-ui/react";

const MusicDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useMusicDetail(id!);
  if (error) return null;
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} padding={5} spacing={4}>
        <Center>
          <Card
            width={"100%"}
            height={"initial"}
            borderRadius={10}
            overflow="hidden"
            mx={2}
            _hover={{
              transform: "scale(1.05)",
              transition: "transform .15s ease-in",
            }}
          >
            <MusicImg id={id!} size="small" minHeight={"initial"}/>
            Details + {id}
          </Card>
        </Center>
        <div>
          Details + {id}
          <div>{data?.title}</div>
        </div>
      </SimpleGrid>
    </Box>
  );
};
export default MusicDetailPage;
