import React from "react";

const Pagenation = ({ data, pageHandler }) => {
  let pageNumbers = [];

  for (let i = 1; i <= data.length / 10; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="mainPage">
      {pageNumbers.map((page, index) => {
        return (
          <div className="pageNumber" key={index}>
            <button
              onClick={() => {
                pageHandler(page);
              }}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagenation;
