// src/components/core-ui/GalleryViewer.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { initialConfig } from '../../redux/initialConfig';

// NOTE: Replace these placeholder paths with the paths to your images 
// placed in the public folder (e.g., '/main-table-view.jpg').
const MAIN_PRODUCT_IMAGE = "/image_1.jpg";
const GALLERY_THUMBNAILS = [
  "/image_2.jpg",
  "/image_2.jpg",
  "/image_2.jpg",
  "/image_2.jpg",
  "/image_2.jpg",
];


function GalleryViewer() {
  // Read gallery configuration from Redux store
  const galleryConfig = useSelector(state => state.config.gallery) || initialConfig.gallery;
  const { alignment, spacing, imageBorderRadius } = galleryConfig;

  // State to track which image is currently "selected"
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  // --- 1. Map Alignment to Tailwind Justification Class ---
  // Controls the horizontal positioning of the narrow gallery column within its space.
  const justificationClass = {
    'grid left': 'justify-start',
    'grid center': 'justify-center',
    'grid right': 'justify-end',
  }[alignment] || 'justify-start'; // Default to left

  // --- 2. Tailwind spacing map for dynamic vertical spacing (space-y-*) ---
  const spacingMap = {
    '8px': 'space-y-2',  // Smallest (0.5rem)
    '16px': 'space-y-4', // Medium (1.0rem)
    '24px': 'space-y-8', // Largest (2.0rem)
  }[spacing] || 'space-y-4'; // Default to 16px

  const imageStyle = {
    borderRadius: imageBorderRadius,
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row h-full">
        <div className={`flex flex-shrink-0 w-20 p-2 ${justificationClass} border-r border-gray-200`}>
          <div className="flex flex-col w-min" >
            <h3 className="text-xs font-semibold text-gray-500 mb-2">View photos</h3>

            <div className={`flex flex-col ${spacingMap}`}>
              {GALLERY_THUMBNAILS.map((url, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  style={imageStyle}
                  className={`w-16 h-16 bg-white border overflow-hidden transition duration-150 cursor-pointer 
                      ${i === selectedImageIndex ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300 hover:border-gray-400'}`
                  }
                >
                  <img
                    src={url}
                    alt={`Product Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/E0E0E0/333333?text=Img"; }} // Fallback
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 flex justify-center items-center">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={MAIN_PRODUCT_IMAGE}
              alt="Main Product View"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.className = "w-full h-full object-cover flex items-center justify-center text-xl font-bold text-gray-600";
                e.target.src = "https://placehold.co/1000x600/F0F0F0/333333?text=Product+3D+View";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryViewer;
