import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateConfig } from '../../../redux/configSlice';

function SelectInput({ label, configKey, options }) {
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
      <select
        value={currentValue || ''}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
