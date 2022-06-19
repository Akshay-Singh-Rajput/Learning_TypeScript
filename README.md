# Learn TypeScript 

[Learn Typescript](https://www.typescriptlang.org/docs/)

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

# Cheatsheet 
![image](https://user-images.githubusercontent.com/97354310/174465255-92004a9d-63dd-48fe-8e1c-215b6bd51a1d.png)
![image](https://user-images.githubusercontent.com/97354310/174465266-9fd5975d-3c79-4430-9da1-a41264c6d98e.png)
![image](https://user-images.githubusercontent.com/97354310/174465274-0aaa739d-defc-4ff6-be24-2c932270d280.png)
![image](https://user-images.githubusercontent.com/97354310/174465280-f934d1d2-88cb-4d93-855d-a1bd3ebcc33b.png)
![image](https://user-images.githubusercontent.com/97354310/174465285-a160bbb4-d089-4991-96f8-458575e7d1e7.png)

