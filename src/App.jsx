import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ header: 1 }, { header: 2 }], // Custom header values
      ["emoji", "@", "video", "mic", "plus"], // New toolbar buttons
      [{ align: [] }],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  const formats = [
    "header", "height", "bold", "italic",
    "underline", "strike",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Text Editor</h1>
      <div style={{ display: "grid", justifyContent: "center"}}>
        <ReactQuill 
          style={{ height: "220px", border : "30px"}} 
          theme="snow" 
          modules={modules} 
          formats={formats}  
          value={value} 
          onChange={setValue} 
        />
      </div>
    </div>
  );
}
