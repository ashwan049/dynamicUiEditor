import React from 'react';
import GalleryViewer from './GalleryViewer';
import ProductSidebar from './ProductSidebar';

function LayoutA({ layoutConfig }) {
  const { cardCornerRadius, sectionBackgroundColor } = layoutConfig;

  const mainContentStyle = {
    borderRadius: cardCornerRadius,
    backgroundColor: sectionBackgroundColor,
  };

  return (
    <div className="shadow-xl transition-all duration-300" style={mainContentStyle} >
      <div className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
        
        <div className="flex-1">
          <GalleryViewer />
        </div>

        <div className="flex-shrink-0 w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-200 p-4">
          <ProductSidebar />
        </div>
        
      </div>
    </div>
  );
}

export default LayoutA;
