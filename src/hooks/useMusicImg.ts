import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMusicImg = (id: string) => {
  const conf = { headers: { "Content-Type": "application/json" } };
  return useQuery({
    queryKey: ["musicImg"+id],
    queryFn: () =>
      axios
        .get("https://coverartarchive.org/release/" + id, conf)
        .then(({ data }) => data.images[0].thumbnails["small"]),
  });
};
export default useMusicImg;
