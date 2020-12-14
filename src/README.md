# Plaid front-end project

This project uses plaid quickstart as a back end to support this front end project.

### Plaid back end quick start:

First download plaid quickstart project:

```
$ git clone https://github.com/plaid/quickstart
$ cd quickstart/node
$ cp .env.example .env
```

You'll need to insert plaid client id and secret in the `.env` file.

```
$ npm install
$ npm start
```

### Run chrome without CORS:

##### OSX

```
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
```

##### Linux

```
google-chrome --disable-web-security
```

##### Windows 10

```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

### Plaid front end:

Download the project, enter the `src` folder and run

```
$ cp .env.example .env
$ npm install
$ npm start
```

### Link login:

To login with the Link you may use plaid's sandbox user:

> user: user_good
> password: pass_good
