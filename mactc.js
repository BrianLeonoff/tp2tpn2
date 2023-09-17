import fs from 'fs/promises'

const packageJsonPath = './package.json';
const infoPath = './info.txt';


fs.readFile(packageJsonPath, 'utf-8')

.then((packageJsonData) => {
    
    const packageJsonObj = JSON.parse(packageJsonData);

    
    const fileSize = Buffer.from(packageJsonData).length;

    
    const info = {
      contenidoStr: packageJsonData,
      contenidoObj: packageJsonObj,
      size: fileSize,
    };

    
    console.log(info);

    
    return fs.writeFile(infoPath, JSON.stringify(info, null, '\t'));
  })
  .then(() => {
    console.log('El objeto info se ha guardado en info.txt correctamente.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
