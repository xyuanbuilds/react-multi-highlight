# react-multi-highlight

[![NPM version](https://img.shields.io/npm/v/react-multi-highlight.svg?style=flat)](https://npmjs.org/package/react-multi-highlight)
[![NPM downloads](http://img.shields.io/npm/dm/react-multi-highlight.svg?style=flat)](https://npmjs.org/package/react-multi-highlight)

react component to highlight multiple words in text according to each config

![Image text](https://raw.githubusercontent.com/xyuanbuilds/react-multi-highlight/main/simple.png)

## Usage

try example in Code Sandbox:

[![Edit react-multi-highlight](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stupefied-satoshi-olzfr0?)

basic usage:

```jsx
import Highlighter from 'react-multi-highlight';

export default () => (
  <Highlighter
    config={[
      {
        word: 'and',
        className: 'a',
        style: {
          color: 'blue',
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
    normalTag="span"
    text="Life, thin and light-off time and time again"
  />
);
```

## Props

| Property        | Type                                | Required? | Description                                                                          |
| --------------- | ----------------------------------- | :-------: | ------------------------------------------------------------------------------------ |
| `text`          | string                              |     ✓     | text string will be highlight                                                        |
| `config`        | IHighlightConfig[] IHighlightConfig |     ✓     | config or config array, match word in text to be highlight or ranges to be highlight |
| `highlightTag`  | keyof HTMLElementTagNameMap         |           | html element tag to wrap highlighted text                                            |
| `normalTag`     | keyof HTMLElementTagNameMap         |           | html element tag to wrap normal text                                                 |
| `caseSensitive` | boolean                             |           | word match is case sensitive, default true                                           |

### IHighlightConfig

| Property    | Type                           | Required? | Description                                                                   |
| ----------- | ------------------------------ | :-------: | ----------------------------------------------------------------------------- |
| `word`      | string                         |           | word to generate a regex, then match to highlight                             |
| `className` | string                         |           | className of the highlight tag                                                |
| `style`     | string                         |           | style of the highlight tag                                                    |
| `ranges`    | [start: number, end: number][] |           | ranges in text will be highlight, only effective without `word` configuration |

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
