import React from 'react';
import EditorSection from './EditorSection';
import SelectInput from './controls/SelectInput';
import SliderInput from './controls/SliderInput';
import ColorPicker from './controls/ColorPicker';
import ImportExport from './ImportExport';

function EditorPanel() {
  return (
    <div className="space-y-4">

      <EditorSection title="Layout Switching & General" defaultOpen={true}>
        <SelectInput 
          label="Design Layout" 
          configKey="layout.version"
          options={['A', 'B']}
        />
        <SliderInput
          label="Container Padding"
          configKey="layout.containerPadding"
          min={16} max={80} unit="px" step={4}
        />
        <SliderInput
          label="Card Corner Radius"
          configKey="layout.cardCornerRadius"
          min={0} max={20} unit="px" step={1}
        />
        <ColorPicker 
          label="Section Background Color"
          configKey="layout.sectionBackgroundColor"
        />
      </EditorSection>

      <EditorSection title="Typography">
        <SelectInput 
          label="Font Family" 
          configKey="typography.fontFamily"
          options={['Inter', 'Roboto', 'Poppins', 'sans-serif']}
        />
        <SelectInput 
          label="Font Weight" 
          configKey="typography.fontWeight"
          options={['300', '400', '500', '600', '700']}
        />
        <SliderInput
          label="Font Size"
          configKey="typography.fontSize"
          min={10} max={60} unit="px" step={1}
        />
      </EditorSection>

      <EditorSection title="Button (Add to Cart)">
        <SliderInput
          label="Border Radius"
          configKey="button.borderRadius"
          min={0} max={20} unit="px" step={1}
        />
        <SelectInput 
          label="Shadow Style" 
          configKey="button.shadow"
          options={['none', 'small', 'medium', 'large']}
        />
        <SelectInput 
          label="Alignment" 
          configKey="button.alignment"
          options={['left', 'center', 'right']}
        />
        <ColorPicker 
          label="Background Color"
          configKey="button.backgroundColor"
        />
        <ColorPicker 
          label="Text Color"
          configKey="button.textColor"
        />
      </EditorSection>

      <EditorSection title="Gallery and Images">
        <SelectInput 
          label="Gallery Alignment" 
          configKey="gallery.alignment"
          options={['grid left', 'grid center', 'grid right']}
        />
        <SliderInput
          label="Spacing Between Images"
          configKey="gallery.spacing"
          min={4} max={30} unit="px" step={2}
        />
        <SliderInput
          label="Image Border Radius"
          configKey="gallery.imageBorderRadius"
          min={0} max={15} unit="px" step={1}
        />
      </EditorSection>

      <EditorSection title="Stroke and Border">
        <ColorPicker 
          label="Stroke Color"
          configKey="stroke.color"
        />
        <SliderInput
          label="Stroke Weight"
          configKey="stroke.weight"
          min={1} max={4} unit="px" step={0.5}
        />
      </EditorSection>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <ImportExport />
      </div>

    </div>
  );
}

export default EditorPanel;
