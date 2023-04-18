import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import type { IHighlightConfig, Range } from './type';

const stringToRegex = (str: string, caseSens: boolean = true) =>
  new RegExp(escapeStringRegexp(str), caseSens ? 'g' : 'gi');

const getWordRanges = (text: string, word: string, caseSensitive?: boolean) => {
  const reg = stringToRegex(word, caseSensitive);

  let res = reg.exec(text);
  const ranges: Range[] = [];

  while (res) {
    const start = res.index;
    ranges.push([start, start + word.length]);

    res = reg.exec(text);
  }

  return ranges;
};

/**
 * cur splitRange is in wordRange, if in range add config
 * @param curRange
 * @param wordRange
 * @returns
 */
const isInRange = (curRange: Range, wordRange: Range) =>
  curRange[0] >= wordRange[0] && curRange[1] <= wordRange[1];

export const getRangesFromConfig = (
  text: string,
  configs: IHighlightConfig[],
  options: {
    caseSensitive?: boolean;
  } = {},
) => {
  const rangeToConfig: Map<Range, IHighlightConfig> = new Map();

  let splitIndexes: number[] = [];
  configs.forEach((config) => {
    if ('word' in config) {
      const { word } = config;

      const ranges = getWordRanges(text, word, options.caseSensitive);

      ranges.forEach((range) => {
        rangeToConfig.set(range, config);
        splitIndexes = splitIndexes.concat(range);
      });
    } else {
      const { ranges } = config;

      ranges.forEach((range) => {
        if (!Array.isArray(range) || range.length !== 2) {
          console.error('[react-multi-highlight]', `${range} is not a range`);
        }
        rangeToConfig.set(range, config);
        splitIndexes = splitIndexes.concat(range);
      });
    }
  });

  splitIndexes.sort((a, b) => a - b);
  if (splitIndexes[0] !== 0) {
    splitIndexes = [0].concat(splitIndexes);
  }
  if (splitIndexes[splitIndexes.length - 1] !== text.length) {
    splitIndexes.push(text.length);
  }

  return {
    /** range -> config */
    rangeToConfig,
    /** text will split by these ranges */
    splitIndexes,
  };
};

export const toHTML = (
  text: string,
  splitIndexes: number[],
  rangeToConfig: Map<Range, IHighlightConfig>,
  options?: {
    normalTag?: keyof HTMLElementTagNameMap;
    highlightTag?: keyof HTMLElementTagNameMap;
  },
) => {
  const HTag = options?.highlightTag || 'span';
  const NTag = options?.normalTag || React.Fragment;

  const fragments = [];
  for (let i = 0; i < splitIndexes.length - 1; i += 1) {
    const left = splitIndexes[i];
    const right = splitIndexes[i + 1];

    const configs: IHighlightConfig[] = [];

    rangeToConfig.forEach((config, range) => {
      if (isInRange([left, right], range)) {
        configs.push(config);
      }
    });

    const words = text.slice(left, right);
    if (configs.length > 0) {
      const { className, style } = configs.reduce<{
        className?: string;
        style: React.CSSProperties;
      }>(
        (res, { className, style }, index) => {
          if (index === 0) {
            res.className = className;
          } else {
            res.className = `${res.className} ${className}`;
          }
          res.style = Object.assign(res.style, style);

          return res;
        },
        {
          className: undefined,
          style: {},
        },
      );

      fragments.push(
        <HTag style={style} className={className}>
          {words}
        </HTag>,
      );
    } else {
      fragments.push(<NTag>{words}</NTag>);
    }
  }

  return fragments;
};
