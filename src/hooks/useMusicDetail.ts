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

const useMusicDetail = (slug: string) =>
  useQuery({
    queryKey: ["music", slug],
    queryFn: () => apiClient.get(slug),
  });
export default useMusicDetail;
