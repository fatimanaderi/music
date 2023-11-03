import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Music {
  title: string;
  country: string;
  date: string;
  packaging: string;
  "packaging-id": string;
  quality: string;
  "release-events": { id: string; name: string }[];
  status: string;
  "status-id": string;
  "text-representation": {
    language: string;
    script: string;
  };
}

const apiClient = new APIClient<Music>("release");
const useMusicDetail = (id: string) =>
  useQuery({
    queryKey: ["music", id],
    queryFn: () => apiClient.getAll({ params: { reid: id } } , "releases").then((res=>res[0])),
  });
export default useMusicDetail;
