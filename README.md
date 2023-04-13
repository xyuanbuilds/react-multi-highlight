# react-multi-highlight

[![NPM version](https://img.shields.io/npm/v/react-multi-highlight.svg?style=flat)](https://npmjs.org/package/react-multi-highlight)
[![NPM downloads](http://img.shields.io/npm/dm/react-multi-highlight.svg?style=flat)](https://npmjs.org/package/react-multi-highlight)

react component to highlight multiple words in text according to each config

## Usage

```jsx
import Highlighter from 'react-multi-highlight';

export default () => (
  <Highlighter
    config={[
      {
        word: 'i',
        className: 'i',
        style: {
          fontWeight: 'bold',
          fontStyle: 'italic',
        },
      },
      {
        word: 'n',
        className: 'n',
        style: {
          fontStyle: 'italic',
        },
      },
      {
        word: 'and',
        className: 'a',
        style: {
          color: 'blue',
        },
      },
      {
        word: 'time',
        className: 'b',
        style: {
          color: 'red',
        },
      },
      {
        word: 'nd light-off tim',
        className: 'c',
        style: {
          textDecoration: 'underline',
          textDecorationColor: 'green',
        },
      },
    ]}
    highlightTag="span"
    text="Life, thin and light-off time and time again"
  />
);
```

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
