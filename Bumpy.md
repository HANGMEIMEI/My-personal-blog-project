# Node

## path

![1606227240771](D:\myProfessionalProfiles\QDSJK\my-Personal-blog-project\Bumpy.assets\1606227240771.png)

###  throw new TypeError('root path required')

​    ^

### TypeError: root path required

```js
D:\myProfessionalProfiles\QDSJK\my-Personal-blog-project
D:\myProfessionalProfiles\QDSJK\my-Personal-blog-project\node_modules\_serve-static@1.14.1@serve-static\index.js:40
    throw new TypeError('root path required')
    ^

TypeError: root path required
    at Function.serveStatic [as static] (D:\myProfessionalProfiles\QDSJK\my-Personal-blog-project\node_modules\_serve-static@1.14.1@serve-static\index.js:40:11)
    at Object.<anonymous> (D:\myProfessionalProfiles\QDSJK\my-Personal-blog-project\app.js:79:17)
    at Module._compile (internal/modules/cjs/loader.js:1138:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
[nodemon] app crashed - waiting for file changes before starting...
```

出现上面的问题根本原因是这一句代码中没有给参数【路径】

```js
app.use(express.static()) 
```

改正之后：

```
app.use(express.static('public')) 
```





















































































































































































































































