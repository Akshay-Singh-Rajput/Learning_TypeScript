# Learn TypeScript

## Install Typescript globally
   ```
   npm i -g typescript
   ```
## we need to complile our typescript file into js file
run cmd in terminal **tsc with file name** and it name should be same as js file name if not it will create file the name 
   ```js 
   tsc script.ts //one time run
   ```
   ```js
   tsc script.ts -w //auto run on change
   ```
## config ts file
```js
tsc --init 
```
it will create **tsconfig.json**
look for these code ourDir & rootDir, uncomment them and set file path for ourDir & rootDir
- outDir => for where your js file create
- rootDir => where your ts file present
```json
 "outDir" : "./public",
```
```json
"rootDir" : "./src"
```
and add one line of code at the end(secondLast closing obj tag)
```json
"include" : ["src"]
```
after adding one line of this, it  will tell ignore outside of src any  ***ts*** file activity don't create js file or complile for that

### [You can learn more about ts at](https://aka.ms/tsconfig)

Then run cmd in terminal
```js
tsc -w //inside src terminal
```
