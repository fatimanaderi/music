import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Music{
    title:string
}

const apiClient = new APIClient<Music>('release')

const useMusicDetail =(slug :string)=> useQuery({
    queryKey : ["music" ,slug],
    queryFn : ()=>apiClient.get(slug)
})
export default useMusicDetail;