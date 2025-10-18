import CustomizableUi from '../ui/CustomizableUi.jsx';
import EditorPanel from '../editor/EditorPanel.jsx';
import React from 'react';

function DemoPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-80 w-full p-6 lg:h-screen lg:sticky lg:top-0 bg-white shadow-xl overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">UI Customization Editor</h1>
        <EditorPanel />
      </div>

      <div className="flex-1 p-6 lg:p-10 bg-gray-50 flex justify-center items-start min-h-screen">
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Live Product Viewer</h2>
          <CustomizableUi />
        </div>
      </div>
    </div>
  );
}

export default DemoPage;
