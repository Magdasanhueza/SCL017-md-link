const fs = require("fs");
const ruta = __dirname;

try {
  const isDirectory = fs.lstatSync("./index.js").isDirectory();
  console.log(isDirectory);
} catch (e) {
  // Handle error
  if (e.code == "ENOENT") {
    //no such file or directory
    //do something
  } else {
    //do something else
  }
}

fs.readdir(ruta, (err, archivos) => {
  archivos.forEach((archivo) => {
    console.log("archivos", archivo);
  });
});

let linksToReview = [] //array donde se guardarán los links revisados

fs.readFile("README.md", "utf-8", (err, data) => {  //se lee readme.md de manera manual 
  const lines = data.split(/\r?n/);
  lines.forEach((line) => {
    var hasLinks = line.indexOf('http://') !== -1 || line.indexOf('https://') !== -1 // busca si el docuemnto tiene http o https
    if (hasLinks) {
      if (line.indexOf('http://') !== -1) {
        console.log('line http: ', line)
        let partialLink = line.substring(line.indexOf('http://'), line.length - 1)  // si el documento tiente http lo guarda en var partial Links
        let finalLink = partialLink.substring(line.indexOf('http://'), line.indexOf(' ') - 1) //busca los links que terminen en (' ') y lo guarda en finalLink
        console.log('finalLink http: ', finalLink)
        linksToReview.push(finalLink) // con el push guarda los link en el array Principal que est apor fuera d ela funcion
      }
      if (line.indexOf('https://') !== -1) {  // busca ese string en la linea, si lo encuentra tira https y si no lo encuentra regresa -1
        console.log('line https: ', line)
        let partialLink = line.substring(line.indexOf('https://'), line.length - 1)
        let finalLink = partialLink.substring(line.indexOf('https://'), line.indexOf(')') - 1) // si el link es https y termina con un ) que lo tome desde que comienza el https y termine con un )
        console.log('finalLink https: ', finalLink)
        linksToReview.push(finalLink) // guarda el los links en un arreglo
      }
    }
  });
});



