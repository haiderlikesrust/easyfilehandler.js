import fs from 'fs'

const makeFolder = (path) => {
    fs.mkdir(path, {recursive: true}, (err) => {
        throw new Error(err)
    })
}




export {makeFolder};