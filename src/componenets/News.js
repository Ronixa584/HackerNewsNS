import React from "react";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  return (
    <div className="p-4">
      <li
        key={news?.hits}
        className="p-4 border hover:shadow-lg border-black bg-gradient-to-bl from-indigo-600 via-indigo-400 to-indigo-600 rounded-lg shadow-lg hover:scale-95 transform transition-transform duration-300"
      >
        <Link to={`/${news?.story_id}`} className="block">
          <div className="flex ">
            <div>
              <h3 className="text-lg font-bold mb-2">{news.title}</h3>
              <div>
                <span className="text-sm font-semibold mb-2 pr-6">
                  Author :{" "}
                  {news.author.charAt(0).toUpperCase() + news.author.slice(1)}
                </span>
                <span className="text-sm font-semibold mb-2 bg-yellow-400 py-1 p-3 rounded-md text-white">
                  Points : {news.points}
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <span className="text-sm font-semibold mb-2">Link : </span>
          <span>
            <a href={news.url} className="">
              {news.url}
            </a>
          </span>
        </div>
      </li>
    </div>
  );
};

export default News;
