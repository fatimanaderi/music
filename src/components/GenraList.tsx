import { Text } from "@chakra-ui/react";
import useGenras from "../hooks/useGenras";

const GenraList = () => {
  const {genres , error } = useGenras()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>{genres.map((genra)=>(<li key={genra.id}>{genra.name}</li>))}</ul>
    </>
  );
};
export default GenraList;
