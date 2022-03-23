const fs = require('fs')
const fileName = require.resolve('cesium/package.json')
console.log(fileName)
try {
  const jsonString = fs.readFileSync(fileName)
  const file = JSON.parse(jsonString)
  file.exports['./Source/Widgets/widgets.css'] = './Source/Widgets/widgets.css'
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err)
    console.log('writing to ' + fileName)
  })
} catch (err) {
  console.log(err)
}