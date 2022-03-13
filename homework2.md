## Ex1
```
const fs = require('fs');

let data = '1 8 5 7 2'

fs.writeFile('numbers.txt', data, (err) => {
   if (err) 
      console.log(err);
   else 
      console.log("success");
})
```

## Ex2
```
const fs = require('fs');
// data là một object
const writeFile = (path, data) => {
   // Hoàn thiện hàm
   const dataInput = JSON.stringify(data)
   return new Promise((resolve, reject) => {
      fs.writeFile(path, dataInput, {encoding: 'utf-8'}, (err) => {
         if (err) {
            throw err
            reject(err)
         }
         else {
            resolve(true)
         }
      })
   })
 }
 
 const writeFileToDisk = async (path, data) => {
   try {
     const isSuccess = await writeFile(path, data);
     console.log(isSuccess) // true
   } catch (err) {
     console.log(err) // 'Lỗi'
   }
 }

 writeFileToDisk("ex2Test.txt", {num1:1, num2:2, num3:3});
 ```
 ## Ex4
 ```
 async function wait(seconds) {
   return new Promise((resolve) => {
      return setTimeout(resolve, seconds)
   })
}

async function go() {
  console.log('Starting');
  await wait(2000);
  console.log('running');
  await wait(200);
  console.log('ending');
}
go()
 ```