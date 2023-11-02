import { useParams } from "react-router-dom";
import useMusicDetail from "../hooks/useMusicDetail";

const MusicDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useMusicDetail(id!);
  if(error) return null
  return (
    <div>
      Details + {id}
      <div>{data?.title}</div>
    </div>
  );
};
export default MusicDetailPage;
