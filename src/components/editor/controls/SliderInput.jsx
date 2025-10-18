import React from 'react';
import { useDispatch } from 'react-redux';
import { updateConfig } from '../../../redux/configSlice';
import { initialConfig } from '../../../redux/initialConfig';
import { useSelector } from 'react-redux';

function SliderInput({ label, configKey, min, max, unit = 'px' }) {
    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    
    const GALLERY_SPACING_VALUES = ['8px', '16px', '24px']; 

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };
    
    const liveValueString = getNestedValue(config, configKey) || initialConfig.gallery.spacing;
    
    let currentValue = parseFloat(liveValueString.replace(unit, ''));

    const isGallerySpacing = configKey === 'gallery.spacing';
    if (isGallerySpacing) {
        let index = GALLERY_SPACING_VALUES.indexOf(liveValueString);
        currentValue = index === -1 ? 1 : index; 
        min = 0; 
        max = GALLERY_SPACING_VALUES.length - 1; 
    }
    
    const handleChange = (e) => {
        const sliderIndex = parseInt(e.target.value);

        let formattedValue;

        if (isGallerySpacing) {
            formattedValue = GALLERY_SPACING_VALUES[sliderIndex];
        }
        else {
            const newValue = sliderIndex;
            formattedValue = `${newValue}${unit}`; 
        }
        
        dispatch(updateConfig({ 
            key: configKey, 
            value: formattedValue 
        }));
    };

    const displayValue = isGallerySpacing 
        ? GALLERY_SPACING_VALUES[currentValue]
        : `${currentValue}${unit}`;


    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className="flex items-center space-x-3">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={currentValue}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
                    step={isGallerySpacing ? 1 : undefined} 
                />
                <span className="text-sm font-semibold w-12 text-right">
                    {displayValue}
                </span>
            </div>
        </div>
    );
}

export default SliderInput;
