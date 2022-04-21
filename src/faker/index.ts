const code1: string =
  'const express = require("express");\nconst app = express();\n\n app.listen(3000);\n';
export const code: string =
  "const getUserNotes = () => (resolve, reject) => {\n\tconst notes: any = localStorage.getItem('notes')\n\tif (!notes) {\n\t\tresolve([scratchpadNote, welcomeNote])\n\t} else if (Array.isArray(parseArray(notes))) {\n\t\tresolve(\n\t\t\tnotes.length === 0 || !notes.find((note) => note.id)\n\t\t\t? [scratchNote, ...notes]\n\t\t\t: JSON.parse(notes)\n\t\t)\n\t} else {\n\t\treject({\n\t\t\tmessage: 'Something went wrong',\n\t\t})\n\t}\n}";

const code2: string =
  "function parseMiddleware(args){\n\tlet middleware = {callbacks:[]}\n\tfor(let arg of args){\n\t\tif(typeof(arg) == 'string'){\n\t\t\tmiddleware.path = arg\n\t\t}else{\n\t\t\tmiddleware.callbacks.push(arg);\n\t\t}\n\t}\n\treturn middleware\n}\nmodule.exports = { parseMiddleware }";
const code3: string =
  'function append(name, value) {\n\tif (typeof value != "string")\n\t\tthrow new Error("value argument must be of type string");\n\tif (res.headers[name.toLowerCase()] == undefined) {\n\t\tres.setHeader(name, value);\n\t} else {\n\t\tres.headers[name.toLowerCase()] += value;\n\t}\n};';
const code4: string =
  'socket.on("WebhookEvent", (data) => {\n    socket.broadcast.emit("new message", {\n      username: socket.username,\n      message: data,\n    });\n  });\n  socket.on("disconnect", () => {\n    users -= 1;\n    console.log("Users: ", users);\n  });';
export const snippets: string[] = [code1, code, code2, code3, code4];
