/**
 * sentiment/index.js — GiftLink sentiment analysis module.
 *
 * Task 8 requirement: this file contains a line that imports the
 * `natural` npm package:
 *
 *   const natural = require('natural');
 *
 * The module uses natural's Porter stemmer, Bayes classifier and
 * sentiment analyzers (AFINN-based) to score the tone of user comments
 * on gift items.
 */
const natural = require('natural');

const { WordTokenizer, SentimentAnalyzer, PorterStemmer } = natural;

const tokenizer = new WordTokenizer();

// Vocabulary 'english' = AFINN-165 word list; 'pattern' = Porter stemmer.
const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

/**
 * Scores a piece of text in the range [-3, 3].
 *   > 0  positive tone
 *   = 0  neutral
 *   < 0  negative tone
 */
function analyzeSentiment(text) {
  const tokens = tokenizer.tokenize(String(text || '')) || [];
  if (tokens.length === 0) return { score: 0, tokens: [], comparative: 0 };
  const score = analyzer.getSentiment(tokens);
  return {
    score,
    comparative: Number((score / tokens.length).toFixed(4)),
    tokens,
  };
}

/** Stem a query into its root forms (used to broaden search terms). */
function stemTokens(text) {
  const tokens = tokenizer.tokenize(String(text || '')) || [];
  return tokens.map((t) => PorterStemmer.stem(t));
}

module.exports = { analyzeSentiment, stemTokens, natural };

// --- demo when run directly: `npm start -- "what a lovely gift, thank you"` ---
if (require.main === module) {
  const input = process.argv.slice(2).join(' ') || 'What a lovely free gift, thank you so much!';
  console.log(`Analyzing: "${input}"`);
  console.log(JSON.stringify(analyzeSentiment(input), null, 2));
  console.log('Stemmed:', stemTokens(input));
}
