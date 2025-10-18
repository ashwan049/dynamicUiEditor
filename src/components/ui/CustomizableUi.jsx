import React from 'react';
import { useSelector } from 'react-redux';
import { initialConfig } from '../../redux/initialConfig';
import LayoutA from './LayoutA';
import LayoutB from './LayoutB';

function CustomizableUIComponent() {

  const layoutConfig = useSelector(state => state.config.layout) || initialConfig.layout;
  const { version, containerPadding } = layoutConfig;
  
  const containerStyle = {
      padding: containerPadding,
  };

  const LayoutComponent = version === 'A' ? LayoutA : LayoutB;

  return (
    <div style={containerStyle} className="min-h-full shadow-lg transition-all duration-300">
      <LayoutComponent layoutConfig={layoutConfig} />
    </div>
  );
}

export default CustomizableUIComponent;
