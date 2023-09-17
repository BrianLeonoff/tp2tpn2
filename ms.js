import fs from 'fs'

const rutaArchivoJSON = './package.json'
const infoPath = './info.txt'

try{
    const packagJsonData = fs.readFileSync(rutaArchivoJSON, 'utf-8')

    const packageJsonObj = JSON.parse(packagJsonData)

    const fileSize = Buffer.from(packagJsonData).length
    
    let info = {
        contenidoStr: packagJsonData,
        contenidoObj: packageJsonObj,
        size: fileSize,
    }

    console.log(info);

    fs.writeFileSync(infoPath, JSON.stringify(info, null))

    console.log(`El objeto info se ha guardado en ${infoPath} correctamente.`);
} catch(error){
    console.error('Error:', error.message);
}
