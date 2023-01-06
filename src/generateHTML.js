let content;


// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Successfully created filename.html!')
// );

function generateHTML(input) {

   if (input.teamname) {
      return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>${input.teamname}</title>
   <style>*{margin:0;}header{color: white;background-color:teal;padding:1%;margin-bottom:32px;} ul{list-style-type:none;text-indent:-40px;line-height:32px;} main {display:flex;flex-wrap:wrap;justify-content:space-around;row-gap:8px;} aside{padding:1%;border:2px solid black;flex: 0 0 180px;}</style>
</head>
<body>
  <header><h1 align=center>${input.teamname}</h1></header><main>
   <aside style="background-color:gold;"><h2>${input.name}</h2><h3>#${input.id} Manager</h3><ul><li><a href=mailto:${input.email}>${input.email}</a></li><li>Office: ${input.office}</li></ul></aside>`;
   }


   if (input.github) {
   return `<aside style="background-color:cornsilk;"><h2>${input.name}</h2><h3>#${input.id} Engineer</h3><ul><li><a href=mailto:${input.email}>${input.email}</a></li><li>Github: <a href="https://www.github.com/${input.github}" target="_blank" rel="noopener noreferrer">${input.github}</a></li></ul></aside>`;
   }

   if (input.school) {
   return `<aside style="background-color:lightgreen;"><h2>${input.name}</h2><h3>#${input.id} Intern</h3><ul><li><a href=mailto:${input.email}>${input.email}</a></li><li>${input.school}</li></ul></aside>`;
   }

}

module.exports = {generateHTML}