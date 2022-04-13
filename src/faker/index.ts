export const code1: string =
  'const express = require("express");\nconst app = express();\n\n app.listen(3000);\n';
export const code: string =
  "const getUserNotes = () => (resolve, reject) => { \n\t const notes: any = localStorage.getItem('notes') \n\t if (!notes) { \n\t\t resolve([scratchpadNote, welcomeNote]) \n\t } else if (Array.isArray(parseArray(notes))) { \n\t\t resolve(\n\t\t\tnotes.length === 0 || !notes.find((note) => note.id) \n\t\t\t ? [scratchNote, ...notes] \n\t\t\t : JSON.parse(notes) \n\t\t ) \n\t } else { \n\t\t reject({ \n\t\t\t message: 'Something went wrong', \n\t\t }) \n\t } \n}";
