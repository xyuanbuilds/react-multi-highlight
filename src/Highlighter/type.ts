export interface IHighlightConfig {
  /** word to generate a regex */
  word: string;
  /** className of the highlight tag */
  className: string;
  /** style of the highlight tag */
  style?: React.CSSProperties;
}

export interface IHighlighterProps {
  /** html element tag to wrap highlight */
  highlightTag?: keyof HTMLElementTagNameMap;
  /** html element tag to wrap normal text  */
  normalTag?: keyof HTMLElementTagNameMap;
  /** Is case sensitive, default true */
  caseSensitive?: boolean;
  /** config array, match word in text to be highlight */
  config: IHighlightConfig[];
  /** text string */
  text: string;
}
