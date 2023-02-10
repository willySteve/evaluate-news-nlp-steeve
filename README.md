### Description
We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral. Aylien is used as an external API with a created credentials.

### Librairies and Plugins
- To start this project make sure to be in the home directory of the project and type `npm install`
- After, make sure to have all these plugins installed in the computer:
```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm i -D workbox-webpack-plugin
```

### API
Normally, you should install dotenv, create `.env` with the credentails you created in the Aylien website and put it in the `gitignore` file. Use `process.env` to address each variable.

## Testing
Install Jest (`npm install --save-dev jest`) and launch `npm run test`.

## Service Workers
Service workers are installed in order for the project to be available when server is stopped.

## Deploy the project
To run the project in dev mode use the following command:
```
npm run build-dev
```

To run the project in prod mode use the following command:
```
npm run build-prod
npm start 
```