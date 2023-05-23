import type { FC } from 'react';
import React from 'react';
import { getRangesFromConfig, toHTML } from './textRange';
import { IHighlighterProps } from './type';

const Highlighter: FC<IHighlighterProps> = ({
  config,
  text,
  caseSensitive,
  highlightTag,
  normalTag,
}) => {
  // config -> ranges
  const { splitIndexes, rangeToConfig } = getRangesFromConfig(
    text,
    Array.isArray(config) ? config : [config],
    {
      caseSensitive,
    },
  );

  // ranges -> html
  const fragments = toHTML(text, splitIndexes, rangeToConfig, {
    highlightTag,
    normalTag,
  });

  return <>{fragments}</>;
};

export default Highlighter;
