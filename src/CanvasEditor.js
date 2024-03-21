import React, { useState, useEffect, useRef } from 'react';
import './CanvasEditor.css';

const CanvasEditor = ({ templateData }) => {
  const canvasRef = useRef(null);
  const [captionText, setCaptionText] = useState(templateData.caption.text);
  const [ctaText, setCtaText] = useState(templateData.cta.text);
  const [backgroundColor, setBackgroundColor] = useState('#0369A1'); // Default background color

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Load images and render canvas elements
    // Implement your logic here

    // Example: Render background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [backgroundColor]);

  const handleCaptionChange = (e) => {
    setCaptionText(e.target.value);
    // Update canvas with new caption text
  };

  const handleCtaChange = (e) => {
    setCtaText(e.target.value);
    // Update canvas with new CTA text
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="canvas-editor">
      <canvas ref={canvasRef} width={1080} height={1080}></canvas>
      <input type="text" value={captionText} onChange={handleCaptionChange} />
      <input type="text" value={ctaText} onChange={handleCtaChange} />
      <input type="color" value={backgroundColor} onChange={(e) => handleBackgroundColorChange(e.target.value)} />
    </div>
  );
};

export default CanvasEditor;
