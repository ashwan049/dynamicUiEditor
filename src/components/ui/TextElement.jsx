import { useSelector } from 'react-redux';
import React from 'react';

function TextElement({ tag, children, className = '' }) {

  const { fontFamily, fontWeight, fontSize } = useSelector(state => state.config.typography);

  const Tag = tag || 'p'; 

  const textStyle = {
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontSize: fontSize,
    transition: 'all 0.2s ease-in-out', 
  };

  return (
    <Tag style={textStyle} className={className}>
      {children}
    </Tag>
  );
}

export default TextElement;
