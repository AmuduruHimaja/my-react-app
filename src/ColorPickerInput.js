import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './ColorPickerInput.css';

const ColorPickerInput = () => {
  const [color, setColor] = useState('#0369A1'); // Default color
  const [showPicker, setShowPicker] = useState(false);
  const [pickedColors, setPickedColors] = useState([]);

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
    setPickedColors([...pickedColors.slice(-4), newColor.hex]);
    setShowPicker(false);
  };

  const handleColorClick = (clickedColor) => {
    setColor(clickedColor);
  };

  return (
    <div className="color-picker-input">
      <div className="color-display" style={{ backgroundColor: color }} onClick={() => setShowPicker(!showPicker)}>
        {showPicker && <ChromePicker color={color} onChangeComplete={handleChangeComplete} />}
      </div>
      <div className="color-list">
        {pickedColors.map((pickedColor, index) => (
          <div key={index} className="color-item" style={{ backgroundColor: pickedColor }} onClick={() => handleColorClick(pickedColor)}></div>
        ))}
        <button className="add-button" onClick={() => setShowPicker(!showPicker)}>+</button>
      </div>
    </div>
  );
};

export default ColorPickerInput;
