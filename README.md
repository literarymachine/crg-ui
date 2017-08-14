# crg-ui
The user interface for CRG

## Prerequisits

- git
- Node v6

## Installation

Clone this repository:
```
$ git clone https://github.com/literarymachine/crg-ui.git
$ cd crg-ui
```

Install node packages:
```
$ npm install
```

Set up environment:
```
$ cp .env.example .env
Open .env in the editor of your choice and configure as follows:

SERVER_HOST=localhost
SERVER_PORT=3000
API_HOST=http://localhost
API_PORT=9000
```

Check if all is well and run:
```
$ npm test
$ npm run server:dev
```

Visit http://localhost:3000/
