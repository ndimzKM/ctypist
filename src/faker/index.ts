const code1: string =
  'const express = require("express");\nconst app = express();\n\n app.listen(3000);\n';
export const code: string =
  "const getUserNotes = () => (resolve, reject) => {\n\tconst notes: any = localStorage.getItem('notes')\n\tif (!notes) {\n\t\tresolve([scratchpadNote, welcomeNote])\n\t} else if (Array.isArray(parseArray(notes))) {\n\t\tresolve(\n\t\t\tnotes.length === 0 || !notes.find((note) => note.id)\n\t\t\t? [scratchNote, ...notes]\n\t\t\t: JSON.parse(notes)\n\t\t)\n\t} else {\n\t\treject({\n\t\t\tmessage: 'Something went wrong',\n\t\t})\n\t}\n}";

export const snippets: string[] = [code1, code];
