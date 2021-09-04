import fs from 'fs';
import { NotJsonFile, JsonTakesObjectAndArray } from './Errors.js';

const checkIfValidContent = (content) => {
    if (typeof(content) === 'object') {
        return true
    } else {
        return false
    }
}

const checkIfJsonFile = (filename) => {
    if (filename.endsWith('.json')) {
        return true;
    } else {
        return false;
    }
}

class JsonHandler {
    constructor(fileName) {
        this.fileName = fileName;
    }

    readJsonSync(convertToObject=false) {
        if (checkIfJsonFile(this.fileName)) {
            if (!convertToObject) {
                const data = fs.readFileSync(this.fileName);
                return data.toJSON();
            } else if(convertToObject) {
               const data = fs.readFileSync(this.fileName);
               return JSON.parse(data)
            }
        } else {
            return "The file must be a json file"
        }
    }

    readJsonAsync(convertToObject=false, callback) {
        if (checkIfJsonFile(this.fileName)) {
            if (!convertToObject) {
                fs.readFile(this.filename, (err, data) => {
                    if (err) {
                        throw new err;
                    } else {
                        callback(data.toJSON());
                    }
                })
            } else {
                fs.readFile(this.filename, (err, data) => {
                    if (err) {
                        throw new err;
                    } else {
                        callback(JSON.parse(data.toJSON()));
                    }
                })
            }
        } else {
            throw new NotJsonFile()
        }
    }

    writeToJsonSync(content) {
        if (checkIfJsonFile(this.fileName)) {
            if (checkIfValidContent(content)) {
                fs.writeFileSync(this.fileName, JSON.stringify(content));
            } else {
                throw new JsonTakesObjectAndArray();
            }
        } else {
            throw new NotJsonFile();
        }
    }

    writeToJsonAsync(content) {
        if (checkIfJsonFile(this.fileName)) {
            if (checkIfValidContent(content)) {
                fs.writeFile(this.fileName, content);
            } else {
                throw new JsonTakesObjectAndArray();
            }
        } else {
            throw new NotJsonFile();
        }
    }
}

export default JsonHandler;