import React from 'react';

const addPerformat = (text, spans) => {
  let textTemp = '';
  spans.slice().reverse().map((el) => {
    textTemp = text.slice(0, el.start) + '<b>' + text.slice(el.start, el.end) + '</b>' + text.slice(el.end);
    text = textTemp;
  });
  return text;
};

const RenderContent = (props) => {
  const returnType = (element) => {
    switch (element.type) {
      case 'heading1':
        return <h1>{element.text}</h1>;
      case 'heading2':
        return <h2>{element.text}</h2>;
      case 'heading3':
        return <h3>{element.text}</h3>;
      case 'heading4':
        return <h4>{element.text}</h4>;
      case 'heading5':
        return <h5>{element.text}</h5>;
      case 'heading6':
        return <h6>{element.text}</h6>;
      case 'image':
        return <img src={element.url} alt={element.alt} />; 
      case 'paragraph':
        return <p>{element.text.length>0 ? <p dangerouslySetInnerHTML={ {__html: element.spans.length != 0 ? addPerformat(element.text, element.spans) : element.text} } /> : null}</p>
      case 'preformatted':
        return <pre><code>{element.text}</code></pre>;
      default:
        return null;
    };
  };
  return returnType(props.element);
};

export default RenderContent;
