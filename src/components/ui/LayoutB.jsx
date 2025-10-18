import React from 'react';
import GalleryViewer from './GalleryViewer';
import ProductSidebar from './ProductSidebar';

function LayoutB({ layoutConfig }) {

    const { cardCornerRadius, sectionBackgroundColor } = layoutConfig;

    const mainContentStyle = {
      borderRadius: cardCornerRadius,
      backgroundColor: sectionBackgroundColor,
    };

    return (
        <div className="shadow-xl transition-all duration-300" style={mainContentStyle} >
            <div className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
                
                <div className="flex-shrink-0 w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-gray-200 p-4 order-2 lg:order-1">
                    <ProductSidebar />
                </div>

                <div className="flex-1 order-1 lg:order-2">
                    <GalleryViewer />
                </div>
                
            </div>
        </div>
    );
}

export default LayoutB;