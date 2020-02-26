import React from 'react';

const Article = (props) => {
  const data = props.article.data.results[0].data; // again, to shorten our work we will assign our props with data to a constant variable
  return (
    <>
      <h1>{data.title[0].text}</h1>
      <img src={data.image.url} alt={data.image.alt}/>
      {data.content_text.map((el, index) => { // important thing, prismic recognizes enter in Ritch Text as another paragraph, so let's use the map () function to display the entire content
        return <p key={index}>{el.text}</p>
      })}
    </>
  );
};

export default Article;
