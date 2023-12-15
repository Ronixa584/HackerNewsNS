import React from "react";
import { Link } from "react-router-dom";
import useApiOne from "../utils/useApiOne";
import { filterData } from "./Helper";
import ShimmerOne from "./ShimmerOne";
import logo from "../assets/Hacker-News-logo.jpg";
import useApiOne from "../utils/useApiOne";
import News from "./News";

const HomeScreen = () => {
  // Custom Hooks
  const [searchInput, setSearchInput, filteredNews, setfilteredNews, allNews] =
    useApiOne();

  const handleSearch = () => {
    const data = filterData(searchInput, allNews);
    setfilteredNews(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return allNews.length === 0 ? (
    <ShimmerOne />
  ) : (
    <div className="Body min-h-screen bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
      <div className="search-container p-5 w-auto">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Hacker News - HN"
              className="h-36 mb-4 p-2 lg:ml-8"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="search-input p-2 m-2 w-96 text-black border bg-white border-gray-300 rounded-md focus:outline-none  focus:border-amber-400"
            placeholder="Search News ..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            name="Input"
          />
          <button
            className="search-btn p-2 m-2 w-28 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:border-indigo-300"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {filteredNews.length === 0 ? (
        <Shimmer />
      ) : (
        <ul className="">
          {filteredNews.map((news1) => (
            <News news={news1} key={news1?.story_id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeScreen;
