import React, { useState } from "react";

export function Comments({ commentsData, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="static mb-3 p-2 hover:shadow-lg bg-gradient-to-bl from-indigo-500 via-indigo-400 to-indigo-500 rounded-lg shadow-lg">
      {/* Main Comment */}
      <div className="text-left">
        <span className="text-base font-bold">{commentsData?.author}</span>
        <span> said</span>
      </div>

      <div className="text-base mb-2">
        {isExpanded ? (
          <div className="text-justify">
            {(commentsData?.text)}
            <button
              className="text-black font-bold hover:underline focus:outline-none ml-1"
              onClick={handleReadMore}
            >
              Hide
            </button>
          </div>
        ) : (
          <div className="text-justify">
            {(commentsData?.text).slice(0, 100)}
            {(commentsData?.text).length > 100 && (
              <button
                className="text-black font-bold hover:underline focus:outline-none ml-1"
                onClick={handleReadMore}
              >
                Read More
              </button>
            )}
          </div>
        )}
      </div>

      {/* Nested Comments */}
      {commentsData?.children?.map((commentData) => (
        <Node
          commentData={commentData}
          key={commentData?.id}
          level={level + 1}
        />
      ))}
    </div>
  );
}

function Node({ commentData, level }) {
  return (
    <div
      className="comment block text-justify border-l border-t border-y-emerald-50 mb-2 p-4 bg-gradient-to-bl from-indigo-600 via-indigo-400 to-indigo-600 rounded-lg shadow-[inset_0px_0px_32px_0px_#fbd38d]"
    >
      {commentData?.text && (
        <div>
          <div className="text-left">
            <span className="text-base font-semibold">
              {commentData?.author}
            </span>
            <span> said</span>
          </div>
          <div className="comment-text">{(commentData?.text)}</div>
        </div>
      )}
      <div className="comment-replies">
        {commentData?.children &&
          commentData?.children?.map((child) => (
            <Node commentData={child} key={child.id} level={level + 1} />
          ))}
      </div>
      {/* <hr/> */}
    </div>
  );
}
