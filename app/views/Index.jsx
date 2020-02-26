import React from 'react';

const Index = (props) => {
  const data = props.article.data.results; // in order not to write such long variables, let's create a constant variable
  return (
    <>
      <h1>Our articles</h1>
      <ul>
        {data.map((el, index) => { // use the map () function to display our articles
          return <li key={index}><a href={`/blog/article/${el.uid}`}>{el.data.title[0].text}</a></li>
        })
        }
        <li ><a href="/about-me">about me</a></li> {/* let's add a link to the page about me */}
      </ul>
    </>
  );
};

export default Index;
