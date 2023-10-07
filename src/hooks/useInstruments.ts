import useData from "./useData";

export interface Instrument {
  id: string;
  name: string;
}

const useInstruments = () =>{
  const {data , error} = useData<Instrument>({
    endpoint: "/instrument",
    listname:"instruments",
    params:{limit: 17 , query:"instrument"}
  });
  return{data , error}
}

export default useInstruments;
