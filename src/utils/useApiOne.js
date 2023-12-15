import { useState, useEffect } from "react";

const useApiOne = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredNews, setfilteredNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  async function getNews() {
    //News API call
    const apiUrl = `https://hn.algolia.com/api/v1/search?query=test`;

    try {
      const data = await fetch(apiUrl);
      const json = await data.json();

      // console.log("News List :", json);

      setAllNews(json?.hits);
      setfilteredNews(json?.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return [searchInput, setSearchInput, filteredNews, setfilteredNews, allNews];
};

export default useApiOne;
