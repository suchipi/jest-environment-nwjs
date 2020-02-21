# jest-environment-nwjs

This package provides a Jest environment that runs tests in NW.js.

## Installation

Install `jest-environment-nwjs` and `node-nw`:

```
npm install --save-dev jest-environment-nwjs node-nw
```

Then, add the following to your `package.json`:

```json
{
	"scripts": {
		"jest": "node-nw ./node_modules/.bin/jest --colors"
	},
	"jest": {
		"testEnvironment": "jest-environment-nwjs",
		"globalTeardown": "jest-environment-nwjs/teardown"
	}
}
```

Then, run `npm run jest` or `npm run jest --watch`.
