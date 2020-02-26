import React from 'react';

const DisplayCategory = (props) => {
  return (
    <>
     {props.category.map((el, index) => {
       return <a key={index} href={`/blog/category/${el.category.slug}`}>{el.category.slug.replace("-", " ")} | </a>
     })}
    </>
  );
};

export default DisplayCategory;
