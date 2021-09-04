class NotJsonFile extends Error {
    constructor(message="Not JSON file") {
        super(message)
        this.name = 'NotJsonFile'
    }
}

class JsonTakesObjectAndArray  extends Error {
    constructor(message="You can only send JavaScript Object and Arrays to JSON files") {
        super(message)
        this.name = "JsonTakesObjectAndArray"
    }
}


export {NotJsonFile, JsonTakesObjectAndArray};