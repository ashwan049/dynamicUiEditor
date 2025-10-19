🧩 Dynamic UI Editor for Customizable Components

A React-based Dynamic UI Editor that allows users (designers or clients) to customize visual properties of UI components in real-time.
It demonstrates live editing of layouts, typography, buttons, galleries, and stroke properties — inspired by Figma-style product customization interfaces.

🔗 Live Demo: https://dynamic-ui-editor-ashwan.netlify.app/

🚀 Project Overview

This project delivers a real-time customizable UI editor where users can modify design configurations and instantly preview results.
Built with React, Redux Toolkit, and Tailwind CSS, it ensures a seamless and responsive experience for both designers and developers.

The system uses a central configuration object managed by Redux, ensuring all UI changes are consistent, traceable, and easily exportable.

🧠 Technical Architecture
🔹 Core Workflow

Input (Editor Panel)
Components like <SliderInput />, <ColorPicker />, etc., dispatch updates through useDispatch(updateConfig).

State Processing (Redux)
The updateConfig reducer updates the nested property in the global configuration object.

Output (UI Component)
Components such as <ButtonComponent /> or <ProductSidebar /> use useSelector to access configuration data directly.

Live Preview
React re-renders components automatically when Redux state changes, providing instant visual feedback.

⚙️ Component API & Configurable Props

The main customizable component, <CustomizableUIComponent />, reads configuration from the Redux store.
If externalized as a standalone library, it can accept a config prop that matches the following schema:

Configuration Schema
Section	Key Path	Type	Example Values
Layout	layout.version	String	'A', 'B' (Layout Switching)
	layout.containerPadding	String	'32px', '80px'
	layout.sectionBackgroundColor	String	#F5F5F5 (HEX/RGB)
Typography	typography.fontFamily	String	'Inter', 'Roboto'
	typography.fontSize	String	'10px', '60px'
Button	button.shadow	String	'none', 'small', 'medium', 'large'
	button.alignment	String	'left', 'center', 'right'
	button.backgroundColor	String	#AD343E (HEX/RGB)
Gallery	gallery.alignment	String	'grid left', 'grid center', 'grid right'
	gallery.spacing	String	'8px', '16px', '24px'
Stroke	stroke.weight	String	'1px', '4px'
	stroke.color	String	#E26555 (HEX/RGB)
💡 Key UX & Feature Decisions
1️⃣ Robust Discrete Value Handling

Decision: SliderInput handles discrete, non-linear values for spacing and shadow settings.

Benefit: Ensures users can only select valid Tailwind-compatible options and prevents design inconsistencies.

2️⃣ Configuration Persistence (Export / Import)

Feature: <ExportImportConfig /> component enables saving and loading configurations.

Export: Downloads the current design configuration as a JSON file.

Import: Instantly restores previous designs by uploading saved configuration files.

3️⃣ Responsive Layout

Implementation:

The <DemoPage /> uses Tailwind responsive utilities (flex-col lg:flex-row) for a clean mobile and desktop layout.

The preview area resizes dynamically to match the editor panel.

🧰 Tech Stack

Frontend: React

State Management: Redux Toolkit

Styling: Tailwind CSS

Utilities: Custom Hooks (useDispatch, useSelector)

Optional Output: JSON configuration export/import

📂 Folder Structure
src/
 ├── components/
 │   ├── EditorPanel/
 │   ├── CustomizableUI/
 │   ├── inputs/
 │   │   ├── SliderInput.jsx
 │   │   ├── ColorPicker.jsx
 │   └── ExportImportConfig.jsx
 │
 ├── pages/
 │   └── DemoPage.jsx
 │
 ├── redux/
 │   ├── configSlice.js
 │   └── store.js
 │
 ├── App.jsx
 └── index.js

⚡ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/ashwan049/Dynamic-UI-Editor.git
cd Dynamic-UI-Editor

2️⃣ Install Dependencies
npm install

3️⃣ Run the App
npm start


The app will start on http://localhost:3000
.

🧩 Future Improvements

Add theme presets (Light/Dark mode).

Introduce AI-based style recommendations.

Support third-party UI libraries (e.g., MUI, Chakra UI).

Extend component-level animation customization.

🧑‍💻 Author

👩‍💻 Ashwanreet Kaur
🔗 GitHub Profile
🌐 Live Demo
