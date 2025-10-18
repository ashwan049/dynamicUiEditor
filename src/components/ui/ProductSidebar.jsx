import { useSelector } from 'react-redux';
import TextElement from './TextElement';
import ButtonComponent from './ButtonComponent';
import React from 'react';

const OptionCard = ({ title, description, isSelected, style }) => (
    <div 
        className={`p-4 mb-4 border transition-all duration-300 ${isSelected ? 'shadow-md' : 'shadow-sm'}`}
        style={style}
    >
        <TextElement tag="h3" className="text-lg font-semibold mb-1" children={title} />
        <TextElement tag="p" className="text-sm text-gray-600" children={description} />
    </div>
);


function ProductSidebar() {
  const { cardCornerRadius } = useSelector(state => state.config.layout);
  const { color, weight } = useSelector(state => state.config.stroke);
  
  const cardStyle = {
    borderRadius: cardCornerRadius,
    borderColor: color,
    borderWidth: weight,
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      
      <TextElement tag="h1" className="text-2xl mb-4" children="Cozy Longe Chair" />
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <TextElement tag="h2" className="text-lg text-gray-700" children="Customize your Chair" />
        <span className="text-gray-500 cursor-pointer">☰</span>
      </div>
      <OptionCard 
          title="1. Arms" 
          description="Fixed Arms" 
          style={cardStyle}
      />
      <OptionCard 
          title="2. Arms Finish" 
          description="Leather Brown" 
          isSelected={true} 
          style={cardStyle}
      />
      <div className="py-4">
        <TextElement tag="h4" className="text-sm font-medium mb-2" children="LEATHER" />
        <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-6 h-6 rounded-full cursor-pointer ${i === 0 ? 'ring-2 ring-red-500 ring-offset-2' : ''}`} style={{ backgroundColor: `#${(Math.random()*0xFFFFFF<<0).toString(16).padStart(6,'0')}` }} />
            ))}
        </div>
      </div>
      <div className="mt-8 pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <TextElement tag="h3" className="text-gray-600" children="Product Price" />
          <TextElement tag="span" className="text-2xl font-bold text-gray-800" children="$ 200" />
        </div>
        <ButtonComponent children="Add to cart" />
      </div>

    </div>
  );
}

export default ProductSidebar;