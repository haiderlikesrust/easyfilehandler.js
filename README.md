### easyfilehandler.js


**[DOCUMENTATION]**(https://filehandling.netlify.app/docs.html)



**Whats New?**

*We have made [documentation](https://filehandling.netlify.app/docs.html) for this package. We have also added `JsonHandler` which works like FileHandler but only for JSON files, learn  more [Here](https://filehandling.netlify.app/docs.html)*

**Why use `easyfilehandler.js`?**


*You should use `easyfilehandler.js` because it is object oriented. `easyfilehandler.js` also used `ES6` way of importing, the best feature about this package is it does everything for you. I know you hate writing fs.writeFile and other funcations again and again.*


***Is this package open source?***


*The answer is ....yes! You can contribute [Here](https://github.com/Haider-Ali-Dev/easyfilehandler.js)


***Do you guys have package for python***

*Yes we have a package for python [Here](https://pypi.org/project/EasyFileHandling/)*


**How to use `easyfilehandler.js`?**


```shell 
npm install easyfilehandler.js
```


**File Reading**


*How do I read file synchronously?*


```javascript
import FileHandler from 'easyfilehandler.js';

const myFileHandler = new FileHandler("test.txt") // or enter path

console.log(myFileHandler.readFileSync())
```


*How do I read file asynchronously?*


```javascript
import FileHandler from 'easyfilehandler.js';

const myFileHandler = new FileHandler("test.txt"); // or enter path

myFileHandler.readFileSync((data) => {
    console.log(data);
})

```



**File Writing**


*How do I write file synchronously?*


```javascript
import FileHandler from 'easyfilehandler.js';

const myFileHandler = new FileHandler("test.txt"); // or enter path

const randomCoolData = "Hello I'm data I'm supposed to be in a database but I'm not LOLO LOL";

myFileHandler.writeToFileSync(randomCoolData); // require param data



```


*How do I write file asynchronously?*


```javascript
import FileHandler from 'easyfilehandler.js';

const myFileHandler = new FileHandler("test.txt"); // or enter path

const randomCoolData = "Hello I'm data I'm supposed to be in a database but I'm not LOLO LOL";

myFileHandler.writeToFileAsync(randomCoolData); // require param data



```


