import React, { useState } from "react";

function TextArea({
  placeholder,
  maxLength,
  height,
  onChange,
  value,
  ...props
}) {
  const [charCount, setCharCount] = useState(0);

  return (
    <div>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-primary focus:outline-none"
        placeholder={placeholder}
        maxLength={maxLength}
        rows={height || 3}
        onChange={(e) => {
          setCharCount(e.target.value.length);
          onChange(e);
        }}
        {...props}
        defaultValue={value}
      ></textarea>
      {maxLength && (
        <div className="text-right text-gray-500 text-xs">
          <span>{charCount}</span> / 100
        </div>
      )}
    </div>
  );
}

export default TextArea;
