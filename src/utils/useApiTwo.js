import { useState, useEffect } from "react";

const useApiTwo = (id_R) => {
  const [newsNames, setnewsNames] = useState([]);

  useEffect(() => {
    getnewsInfo(id_R);
  }, [id_R]);

  async function getnewsInfo() {
    //API call
    const data = await fetch(" https://hn.algolia.com/api/v1/items/" + id_R);
    const json = await data.json();
    // console.log("News Comments List :", json);
    setnewsNames(json);
  }
  return [newsNames];
};

export default useApiTwo;
