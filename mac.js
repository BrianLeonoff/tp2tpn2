import fs from 'fs'

const packageJsonPath = './package.json';
const infoPath = './info.txt';

fs.readFile(packageJsonPath, 'utf-8', (error, packageJsonData) => {
    if(error){
        console.error(`Error al leer el archivo ${packageJsonData}: ${error}`)
        return;
    }
    

    const packageJsonObj = JSON.parse(packageJsonData)

    const fileSize = Buffer.from(packageJsonData).length
    
    const info = {
        contenidoStr: packageJsonData,
        contenidoObj: packageJsonObj,
        size: fileSize,
    }

    console.log(info);

    fs.writeFile(infoPath, JSON.stringify(info, null, '\t'), (err) =>{
        if(err){
            console.error(`Error al guardar el archivo ${infoPath}: ${err}`)
        } else {
            console.log(`El objeto info se ha guardado en ${infoPath} correctamente`);
        }
    })
})