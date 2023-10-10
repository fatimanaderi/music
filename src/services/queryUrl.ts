import { MusicQuery } from "../App";

const queryUrl = (q:MusicQuery) => {
  let queryString = "";
 
  Object.entries(q).forEach(([key, value]) => {
    if(value != ""){
      if(key == "instrument"){
        queryString += `title:${value}&`;
      }else{
        queryString += `${key}:${value}&`;
      }
    }
  });
  
 return queryString != "" ?queryString:"";
};
export default queryUrl;
