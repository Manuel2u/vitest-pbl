
export function countLetters(word: string) {
    // return lenth of word
    // return length of vowels
    // return length of consonants

    const vowels = ['a', 'e', 'i', 'o', 'u']

    const _words = word.replace(/\s/g, '')

    const letters = _words.split('')

    const totalLetters = _words.length

    const totalVowels = letters.filter(letter => vowels.includes(letter.toLowerCase())).length

    const totalConsonants = totalLetters - totalVowels

    return {
        totalLetters,
        totalVowels,
        totalConsonants
    }

}