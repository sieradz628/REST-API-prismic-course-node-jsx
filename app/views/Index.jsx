import React from 'react';
import RenderPagination from './Components/RenderPagination'

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
      <RenderPagination page={props.article.data.page} totalPage={props.article.data.total_pages}/>
    </>
  );
};

export default Index;
