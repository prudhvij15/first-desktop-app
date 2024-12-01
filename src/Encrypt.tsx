import React, { useState } from "react";

const CaesarCipherApp: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [shift, setShift] = useState<number>(3);
  const [encryptedText, setEncryptedText] = useState<string>("");

  const caesarCipher = (str: string, shift: number): string => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    str = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      let index = alphabet.indexOf(char);

      if (index === -1) {
        result += char; // Non-alphabetic characters are added unchanged
      } else {
        let newIndex = (index + shift) % 26;
        result += alphabet.charAt(newIndex);
      }
    }
    return result;
  };

  const handleEncrypt = () => {
    const encrypted = caesarCipher(text, shift);
    setEncryptedText(encrypted);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Caesar Cipher</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter text to encrypt"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={shift}
          onChange={(e) => setShift(parseInt(e.target.value))}
          placeholder="Enter shift value"
        />
        <button
          onClick={handleEncrypt}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
        >
          Encrypt
        </button>
        <h3 className="text-lg font-semibold">Encrypted Text:</h3>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={encryptedText}
          readOnly
        />
      </div>
    </div>
  );
};

export default CaesarCipherApp;
