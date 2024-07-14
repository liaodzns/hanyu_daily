import React, { useState, useEffect } from 'react';

const TypeWriter = ({ content = "", speed = 100 }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < content.length) {
      const animKey = setTimeout(() => {
        setDisplayedContent(content.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(animKey);
    }
  }, [index, content, speed]);

  return <pre className="type-writer">{displayedContent}</pre>;
};

export default TypeWriter;

