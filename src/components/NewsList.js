import React from "react";

const NewsList = (props) => {
  const renderList = props.newsdata.map((data, index) => {
    return (
      <div key={index}>
        <h3>{data.title}</h3>
        <p>{data.feed}</p>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default NewsList;
