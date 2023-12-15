import { Link, useParams } from "react-router-dom";
import React from "react";
import useApiTwo from "../utils/useApiTwo";
import ShimmerTwo from "./ShimmerTwo"
import { Comments } from './Comments';

const PostScreen = () => {
  const { id_R } = useParams();
  const [newsNames] = useApiTwo(id_R);

  // console.log(newsNames)
  if (!newsNames) {
    return <ShimmerTwo />;
  }

  return newsNames.length === 0 ? (
    <ShimmerTwo />
  ) : (
    <div className="border border-black p-2 bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
      <div className="flex flex-col items-center">
        <div className="p-2 mb-2 text-3xl font-bold">{newsNames?.title}</div>
        <div className="p-4 text-sm font-semibold mb-2 bg-yellow-400 py-1 rounded-md text-white">
          {newsNames?.points}
        </div>
        <Link to="/">
          <div className="p-4 text-sm font-semibold mb-2 bg-green-500 py-1 rounded-md text-white">
            Return to Home
          </div>
        </Link>
        <div className="mt-4 font-semibold">Comments Section </div>
      </div>
      <div className="flex flex-col">
        {newsNames?.children?.map((news) => (
          <Comments commentsData={news} key={news?.id} />
        ))}
      </div>
    </div>
  );
};

export default PostScreen;
