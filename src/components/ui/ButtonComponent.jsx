import React from 'react';
import { useSelector } from 'react-redux';
import { initialConfig } from '../../redux/initialConfig';

function ButtonComponent() {
  const buttonConfig = useSelector(state => state.config.button) || initialConfig.button;
  const { borderRadius, shadow, alignment, backgroundColor, textColor } = buttonConfig;

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment] || 'text-right';

  const shadowClass = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-2xl',
  }[shadow] || 'shadow-md';

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: borderRadius,
  };

  return (
    <div className={`w-full ${alignmentClass} mt-4`}> 
      <button 
        style={buttonStyle}
        className={`inline-block font-semibold py-3 px-6 transition duration-150 transform hover:scale-[1.02] ${shadowClass}`}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ButtonComponent;