const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
// const filePath = 'co.js'; // Replace with the actual file path
async function getComponent() {
    return new Promise((resolve, reject) =>
        fs.readFile('counter.js', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return reject("Error reading file")
            }
            const variableName = 'counter';
            const vueString = 'Vue';
            const regex = new RegExp(`${variableName}\\s*=\\s*({[\\s\\S]*?})\\s*${vueString}`);
            const match = data.match(regex);
            if (match) {
                const yourVariableObject = `(${match[1]})`;;
                const counterComponent = eval(yourVariableObject);
                return resolve(counterComponent)
            } else {
                console.error('Variable not found or not assigned as an object in the file.');
                return reject("No variable found")
            }

        })
    );
}
function getFileContent(fileName,componentName) {
    return new Promise((resolve, reject) => {
        try {
            const fileContent = fs.readFileSync(fileName, 'utf8');
            const ast = parser.parse(fileContent, { sourceType: 'module' });
            let componentContent;
            traverse(ast, {
                CallExpression(path) {
                    if (
                        path.node.callee.type === 'MemberExpression' &&
                        path.node.callee.property.name === 'component' &&
                        path.node.arguments.length === 2 &&
                        path.node.arguments[0].value === componentName &&
                        path.node.arguments[1].type === 'ObjectExpression'
                    ) {
                        componentContent = fileContent.substring(path.node.arguments[1].start, path.node.arguments[1].end);
                    }
                    // if(componentName==="learning"){
                    //     console.log("start : ",path.node.arguments[1].start);
                    //     console.log("end : ",path.node.arguments[1].end);
                    // }
                },
            });
            if (componentContent) {
                const counterComponent = eval(`(${componentContent})`)
                return resolve(counterComponent)
            } else {
                console.error('Vue.component declaration not found in the file.');
                return reject("Vue.component not found")
            }
        } catch (error) {
            console.error('Error reading or parsing the file:', error.message);
            return reject(`Error in reading file : ${fileName}`)

        }
    })
}
module.exports = {
    getFileContent
}