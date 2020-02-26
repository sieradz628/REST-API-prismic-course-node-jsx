import React from 'react';

const RednerPagination = (props) => {
  return (
      <ul>
        {props.page > 1 ? <li><a href={`/blog/page/${props.page-1}`}>&lt;</a></li> : null}

        {props.totalPage > 1 ? 
          [...Array(props.totalPage+1).keys()].slice(1, props.totalPage+1).map((el, index) => (
          <li key={index}><a href={`/blog/page/${el}`}>{el}</a></li>
            ) ) 
        : null}

        {props.page < props.totalPage ? <li><a href={`/blog/page/${props.page+1}`}>&gt;</a></li> : null}
      </ul>
  );
};

export default RednerPagination;
