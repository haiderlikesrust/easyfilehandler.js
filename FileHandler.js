import fs from 'fs'

class FileHandler{
    constructor(filename) {
        this.filename = filename;
    }

    writeToFileSync = (data) => {
        fs.writeFileSync(`${this.filename}`, data)
    }

    writeToFileAsync = (data) => {
        fs.writeFile(this.filename, data, (err) => {
            if (err) {
                console.log(err)
            }
        })
    }

    readFileAsync = (callback) => {
        fs.readFile(this.filename, (err, data) => {
            if (err) {
                throw new err;
            } else {
                callback(data.toString());
            }
        })
    }

    readFileSync = () => {
        const data = fs.readFileSync(this.filename);
        return data.toString();
    }
}


export default FileHandler;