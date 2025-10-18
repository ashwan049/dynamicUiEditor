import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfig } from '../../../redux/configSlice';

function ColorPicker({ label, configKey }) {
  const dispatch = useDispatch();
  
  const [parent, child] = configKey.split('.');
  const currentValue = useSelector(state => 
    parent && child ? state.config[parent][child] : state.config[configKey]
  );

  const handleChange = (e) => {
    dispatch(updateConfig({ key: configKey, value: e.target.value }));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex items-center space-x-3">
        <input
          type="color"
          value={currentValue || '#ffffff'}
          onChange={handleChange}
          className="w-8 h-8 rounded-full border-none cursor-pointer p-0 shadow-sm"
          style={{ appearance: 'none' }}
        />
        <input
          type="text"
          value={currentValue || ''}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="#RRGGBB or rgb(x, y, z)"
        />
      </div>
    </div>
  );
}

export default ColorPicker;
