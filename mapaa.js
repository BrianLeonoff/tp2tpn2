import fs from 'fs/promises'

const packageJsonPath = './package.json';
const infoPath = './info.txt';

async function main() {
  try {

    const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');

   
    const packageJsonObj = JSON.parse(packageJsonData);

    
    const fileSize = Buffer.from(packageJsonData).length;

    
    const info = {
      contenidoStr: packageJsonData,
      contenidoObj: packageJsonObj,
      size: fileSize,
    };

    
    console.log(info);

    
    await fs.writeFile(infoPath, JSON.stringify(info, null, '\t'));

    console.log(`El objeto info se ha guardado en ${info} correctamente.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
