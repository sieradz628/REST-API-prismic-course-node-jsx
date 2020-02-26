import React from 'react';
import RenderContent from './Components/common/RenderContent';

const Article = (props) => {
  const data = props.article.data.results[0].data; // again, to shorten our work we will assign our props with data to a constant variable
  return (
    <>
      <h1>{data.title[0].text}</h1>
      <img src={data.image.url} alt={data.image.alt}/>
      {data.content_text.map((el, index) => {
        return <RenderContent key={index} element={el} />
      })}
    </>
  );
};

export default Article;
