import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadConfig, resetConfig } from '../../redux/configSlice';
import { initialConfig } from '../../redux/initialConfig';

function ImportExport() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config);
  const fileInputRef = useRef(null);

  const handleExport = () => {
    try {
      const configToExport = JSON.stringify(config, null, 2);
      const blob = new Blob([configToExport], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ui-config.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to export configuration:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedConfig = JSON.parse(e.target.result);
          if (importedConfig.layout && importedConfig.typography) {
            dispatch(loadConfig(importedConfig));
            console.log("Configuration imported successfully!");
          } else {
            console.error("Import failed: Invalid configuration file structure.");
          }
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    dispatch(resetConfig());
  }

  return (
    <div className="space-y-3">
      <h3 className="text-md font-semibold text-gray-800">Configuration Management</h3>

      <div className="flex space-x-2">
        <button
          onClick={handleExport}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 text-sm"
        >
          Export Config (JSON)
        </button>

        <button
          onClick={handleReset}
          className="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 text-sm"
        >
          Reset
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />
    </div>
  );
}

export default ImportExport;
