import { expect, test, describe } from "vitest";
import { countLetters } from "../src/word";


describe("letterCount", () => {
    test("should return the number of letters in a word", () => {
        const actual = countLetters("You need me like dollars that are owed to you");
        const expected = {
            totalLetters: 36,
        };
        expect(actual.totalLetters).toEqual(expected.totalLetters);
    });

    test("should return the number of vowels in a word", () => {
        const actual = countLetters("You need me like dollars that are owed to you");
        const expected = {
            totalVowels: 17,
        };
        expect(actual.totalVowels).toEqual(expected.totalVowels);
    });

    test("should return the number of consonants in a word", () => {
        const actual = countLetters("You need me like dollars that are owed to you");
        const expected = {
            totalConsonants: 19,
        };
        expect(actual.totalConsonants).toEqual(expected.totalConsonants);
    });
});