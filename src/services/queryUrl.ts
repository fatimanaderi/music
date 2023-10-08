interface Query {
  tag:string;
  title:string;
 }
const queryUrl = (q:Query) => {
  let queryString = "";
  Object.entries(q).forEach(([key, value]) => {
    if(value != ""){
      queryString += `${key}:${value}&`;
    }
  });
  
 return queryString != "" ?queryString:"";
};
export default queryUrl;
