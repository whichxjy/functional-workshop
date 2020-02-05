'use strict'

const quote = (name, year, text) => `"${text}"\n\t- ${name} (${year})\n\n`

const grumpyQuotes = [
  quote('Guido van Rossum', 2001, "Don't you hate code that's not properly indented?"), // https://slashdot.org/story/01/04/20/1455252/guido-van-rossum-unleashed

  quote('Doug Crockford', 2005, 'There are no good texts on JavaScript programming.'), // http://crockford.com/javascript/style1.html
  quote('Doug Crockford', 2008, 'JavaScript is an astonishing language, in the very worst sense.'), // http://crockford.com/javascript/popular.html

  quote('Edsger Dijkstra', 1978, 'Object oriented programming is an exceptionally bad idea which could only have originated in California.'), // https://www.quora.com/Why-did-Dijkstra-say-that-%E2%80%9CObject-oriented-programming-is-an-exceptionally-bad-idea-which-could-only-have-originated-in-California-%E2%80%9D/answer/Terry-Moore-32

  quote('Edsger Dijkstra', 1975, 'By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.'), // https://www.cs.utexas.edu/users/EWD/ewd04xx/EWD498.PDF
  quote('Edsger Dijkstra', 1975, "Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer."), // ibid.
  quote('Edsger Dijkstra', 1975, "The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]") // ibid.
]

if (require.main === module) {
  const { map } = require('../higher-order/filterMapReduce.js')

  // Warning: non-functional console.logging ahead!
  map(console.log, grumpyQuotes)
}
