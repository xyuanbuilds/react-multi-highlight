# react-multi-highlight

react component to highlight multiple words in text according to each config

```jsx
import Highlighter from 'react-multi-highlight';

export default () => (
  <Highlighter
    config={[
      {
        ranges: [[0, 1]],
        className: 'ooo',
        style: {
          color: 'green',
        },
      },
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
