import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Music {
  id: string;
  name: string;
}
interface FetchMusicsResponse {
  genres: Music[];
}
const MusicGrid = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchMusicsResponse>("/genre/all?limit=30&offset=30")
      .then((res) => setMusics(res.data.genres))
      .catch((err) => setError(err.message));
  }, []);
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
