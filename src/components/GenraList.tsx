import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenraList = () => {
  const {data , error} = useGenres()
  return (
    <>
      {error && <Text>{error}</Text> }
      <ul>{data?.map((genra)=>(<li key={genra.id}>{genra.name}</li>))}</ul>
    </>
  );
};
export default GenraList;
