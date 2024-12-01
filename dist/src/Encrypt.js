"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// // import React, { useState } from "react";
// // const CaesarCipherApp: React.FC = () => {
// //   const [text, setText] = useState<string>("");
// //   const [shift, setShift] = useState<number>(3);
// //   const [encryptedText, setEncryptedText] = useState<string>("");
// //   const caesarCipher = (str: string, shift: number): string => {
// //     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     let result = "";
// //     str = str.toUpperCase();
// //     for (let i = 0; i < str.length; i++) {
// //       let char = str.charAt(i);
// //       let index = alphabet.indexOf(char);
// //       if (index === -1) {
// //         result += char; // Non-alphabetic characters are added unchanged
// //       } else {
// //         let newIndex = (index + shift) % 26;
// //         result += alphabet.charAt(newIndex);
// //       }
// //     }
// //     return result;
// //   };
// //   const handleEncrypt = () => {
// //     const encrypted = caesarCipher(text, shift);
// //     setEncryptedText(encrypted);
// //   };
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
// //       <div className="bg-white p-6 rounded-lg shadow-md w-96">
// //         <h1 className="text-2xl font-bold mb-4">Caesar Cipher</h1>
// //         <textarea
// //           className="w-full p-2 border border-gray-300 rounded mb-4"
// //           placeholder="Enter text to encrypt"
// //           value={text}
// //           onChange={(e) => setText(e.target.value)}
// //         />
// //         <input
// //           type="number"
// //           className="w-full p-2 border border-gray-300 rounded mb-4"
// //           value={shift}
// //           onChange={(e) => setShift(parseInt(e.target.value))}
// //           placeholder="Enter shift value"
// //         />
// //         <button
// //           onClick={handleEncrypt}
// //           className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
// //         >
// //           Encrypt
// //         </button>
// //         <h3 className="text-lg font-semibold">Encrypted Text:</h3>
// //         <textarea
// //           className="w-full p-2 border border-gray-300 rounded mb-4"
// //           value={encryptedText}
// //           readOnly
// //         />
// //       </div>
// //     </div>
// //   );
// // };
// // export default CaesarCipherApp;
// import React, { useState } from "react";
// const CaesarCipherApp: React.FC = () => {
//   const [text, setText] = useState<string>("");
//   const [shift, setShift] = useState<number>(3);
//   const [encryptedText, setEncryptedText] = useState<string>("");
//   const [decryptedText, setDecryptedText] = useState<string>("");
//   const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
//   const caesarCipher = (
//     str: string,
//     shift: number,
//     decrypt: boolean = false
//   ): string => {
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let result = "";
//     str = str.toUpperCase();
//     for (let i = 0; i < str.length; i++) {
//       let char = str.charAt(i);
//       let index = alphabet.indexOf(char);
//       if (index === -1) {
//         result += char; // Non-alphabetic characters are added unchanged
//       } else {
//         let newIndex = decrypt
//           ? (index - shift + 26) % 26 // Reverse the shift for decryption
//           : (index + shift) % 26; // Regular shift for encryption
//         result += alphabet.charAt(newIndex);
//       }
//     }
//     return result;
//   };
//   const handleCipher = () => {
//     if (mode === "encrypt") {
//       const encrypted = caesarCipher(text, shift);
//       setEncryptedText(encrypted);
//       setDecryptedText(""); // Clear decrypted text when encrypting
//     } else {
//       const decrypted = caesarCipher(text, shift, true); // Decrypt mode
//       setDecryptedText(decrypted);
//       setEncryptedText(""); // Clear encrypted text when decrypting
//     }
//   };
//   return (
//     <div className="min-h-screen bg-white-300 flex justify-center items-center">
//       <div className="bg-gray-300 p-6 rounded-lg shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-4">Caesar Cipher</h1>
//         <textarea
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           placeholder="Enter text to {mode === 'encrypt' ? 'encrypt' : 'decrypt'}"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <input
//           type="number"
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           value={shift}
//           onChange={(e) => setShift(parseInt(e.target.value))}
//           placeholder="Enter shift value"
//         />
//         <div className="flex justify-between mb-4">
//           <button
//             onClick={() => setMode("encrypt")}
//             className={`w-1/2 p-2 ${
//               mode === "encrypt" ? "bg-blue-500" : "bg-gray-300"
//             } text-white rounded hover:bg-blue-600`}
//           >
//             Encrypt
//           </button>
//           <button
//             onClick={() => setMode("decrypt")}
//             className={`w-1/2 p-2 ${
//               mode === "decrypt" ? "bg-red-500" : "bg-gray-300"
//             } text-white rounded hover:bg-red-600`}
//           >
//             Decrypt
//           </button>
//         </div>
//         <button
//           onClick={handleCipher}
//           className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
//         >
//           {mode === "encrypt" ? "Encrypt" : "Decrypt"}
//         </button>
//         {mode === "encrypt" && encryptedText && (
//           <div>
//             <h3 className="text-lg font-semibold">Encrypted Text:</h3>
//             <textarea
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//               value={encryptedText}
//               readOnly
//             />
//           </div>
//         )}
//         {mode === "decrypt" && decryptedText && (
//           <div>
//             <h3 className="text-lg font-semibold">Decrypted Text:</h3>
//             <textarea
//               className="w-full p-2 border border-gray-300 rounded mb-4"
//               value={decryptedText}
//               readOnly
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default CaesarCipherApp;
const react_1 = require("react");
const CaesarCipherApp = () => {
    const [text, setText] = (0, react_1.useState)("");
    const [shift, setShift] = (0, react_1.useState)(3);
    const [encryptedText, setEncryptedText] = (0, react_1.useState)("");
    const [decryptedText, setDecryptedText] = (0, react_1.useState)("");
    const [mode, setMode] = (0, react_1.useState)("encrypt");
    const [isDarkTheme, setIsDarkTheme] = (0, react_1.useState)(false);
    // Handle the theme change from Electron main process
    (0, react_1.useEffect)(() => {
        window.electron.ipcRenderer.on("theme-changed", (event, darkMode) => {
            setIsDarkTheme(darkMode);
        });
        // Cleanup on unmount
        return () => {
            window.electron.ipcRenderer.removeAllListeners("theme-changed");
        };
    }, []);
    const caesarCipher = (str, shift, decrypt = false) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        str = str.toUpperCase();
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            let index = alphabet.indexOf(char);
            if (index === -1) {
                result += char; // Non-alphabetic characters are added unchanged
            }
            else {
                let newIndex = decrypt
                    ? (index - shift + 26) % 26 // Reverse the shift for decryption
                    : (index + shift) % 26; // Regular shift for encryption
                result += alphabet.charAt(newIndex);
            }
        }
        return result;
    };
    const handleCipher = () => {
        if (mode === "encrypt") {
            const encrypted = caesarCipher(text, shift);
            setEncryptedText(encrypted);
            setDecryptedText(""); // Clear decrypted text when encrypting
        }
        else {
            const decrypted = caesarCipher(text, shift, true); // Decrypt mode
            setDecryptedText(decrypted);
            setEncryptedText(""); // Clear encrypted text when decrypting
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `min-h-screen flex justify-center items-center ${isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`, children: (0, jsx_runtime_1.jsxs)("div", { className: `p-6 rounded-lg shadow-md w-96 ${isDarkTheme ? "bg-gray-700" : "bg-white"}`, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-4", children: "Caesar Cipher" }), (0, jsx_runtime_1.jsx)("textarea", { className: "w-full p-2 border border-gray-300 rounded mb-4", placeholder: "Enter text to {mode === 'encrypt' ? 'encrypt' : 'decrypt'}", value: text, onChange: (e) => setText(e.target.value) }), (0, jsx_runtime_1.jsx)("input", { type: "number", className: "w-full p-2 border border-gray-300 rounded mb-4", value: shift, onChange: (e) => setShift(parseInt(e.target.value)), placeholder: "Enter shift value" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-4", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setMode("encrypt"), className: `w-1/2 p-2 ${mode === "encrypt" ? "bg-blue-500" : "bg-gray-300"} text-white rounded hover:bg-blue-600`, children: "Encrypt" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setMode("decrypt"), className: `w-1/2 p-2 ${mode === "decrypt" ? "bg-red-500" : "bg-gray-300"} text-white rounded hover:bg-red-600`, children: "Decrypt" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleCipher, className: "w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600", children: mode === "encrypt" ? "Encrypt" : "Decrypt" }), mode === "encrypt" && encryptedText && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold", children: "Encrypted Text:" }), (0, jsx_runtime_1.jsx)("textarea", { className: "w-full p-2 border border-gray-300 rounded mb-4", value: encryptedText, readOnly: true })] })), mode === "decrypt" && decryptedText && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold", children: "Decrypted Text:" }), (0, jsx_runtime_1.jsx)("textarea", { className: "w-full p-2 border border-gray-300 rounded mb-4", value: decryptedText, readOnly: true })] }))] }) }));
};
exports.default = CaesarCipherApp;
