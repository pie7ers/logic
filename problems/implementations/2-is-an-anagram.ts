export const isAnAnagramProblem =`
Write a function that receives two words and returns true or false depending on
whether they are anagram or not, under the following conditions
- if the words are the same is not an anagram
- do not validate if the word exists
- samples of what is expected:
  word1: AMOR word2: ROMA => TRUE
  word1: AmOR word2: ROma  => TRUE
  word1: 1234 word2: 4321  => TRUE
  word1: AMOR word2: ROMAS  => FALSE
  word1: AMOR word2: LOVE  => FALSE
`

function main(wordOne: string, wordTwo: string) {
  if (wordOne.toLocaleLowerCase() == wordTwo.toLocaleLowerCase()) return false
  const wordSorted = (word: string) => word.toLocaleUpperCase().split('').sort().join('')
  return wordSorted(wordOne) == wordSorted(wordTwo)
}

export function isAnAnagram(wordOne: string, wordTwo: string) {
  console.log(
    `\ndo the strings `.green +
    `${wordOne} `.blue +
    `and `.green +
    `${wordTwo} `.blue +
    `an anagram? ${main(wordOne, wordTwo) ? ' ✅' : '❌'}`.green
  )
}

