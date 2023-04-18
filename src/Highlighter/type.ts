export type Range = [start: number, end: number];

interface DecorateConfig {
  /** className of the highlight tag */
  className?: string;
  /** style of the highlight tag */
  style?: React.CSSProperties;
}
interface WordHighlightConfig extends DecorateConfig {
  /** word to generate a regex, then match to highlight */
  word: string;
}
interface RangeHighlightConfig extends DecorateConfig {
  /** ranges in text will be highlight */
  ranges: Range[];
}

export type IHighlightConfig = WordHighlightConfig | RangeHighlightConfig;

export interface IHighlighterProps {
  /** html element tag to wrap highlight */
  highlightTag?: keyof HTMLElementTagNameMap;
  /** html element tag to wrap normal text  */
  normalTag?: keyof HTMLElementTagNameMap;
  /** Is case sensitive, default true */
  caseSensitive?: boolean;
  /** config array, match word in text to be highlight */
  config: IHighlightConfig[] | IHighlightConfig;
  /** text string */
  text: string;
}
