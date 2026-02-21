import React, { useState } from "react";

const CharacterCount = () => {
  const [char, setChar] = useState("");
  return (
    <div>
      <h2>Character Count {char.length}</h2>
      <input
        type="text"
        className="border px-2"
        value={char}
        onChange={(e) => setChar(e.target.value)}
      />
    </div>
  );
};

export default CharacterCount;
