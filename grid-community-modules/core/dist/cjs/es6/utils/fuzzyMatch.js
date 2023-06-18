/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / Typescript / React / Angular / Vue
 * @version v30.0.2
 * @link https://www.ag-grid.com/
 * @license MIT
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuzzySuggestions = exports.fuzzyCheckStrings = void 0;
function fuzzyCheckStrings(inputValues, validValues, allSuggestions) {
    const fuzzyMatches = {};
    const invalidInputs = inputValues.filter(inputValue => !validValues.some((validValue) => validValue === inputValue));
    if (invalidInputs.length > 0) {
        invalidInputs.forEach(invalidInput => fuzzyMatches[invalidInput] = fuzzySuggestions(invalidInput, allSuggestions));
    }
    return fuzzyMatches;
}
exports.fuzzyCheckStrings = fuzzyCheckStrings;
/**
 *
 * @param {String} inputValue The value to be compared against a list of strings
 * @param allSuggestions The list of strings to be compared against
 */
function fuzzySuggestions(inputValue, allSuggestions, hideIrrelevant, filterByPercentageOfBestMatch) {
    let thisSuggestions = allSuggestions.map((text) => ({
        value: text,
        relevance: stringWeightedDistances(inputValue.toLowerCase(), text.toLocaleLowerCase())
    }));
    thisSuggestions.sort((a, b) => b.relevance - a.relevance);
    if (hideIrrelevant) {
        thisSuggestions = thisSuggestions.filter(suggestion => suggestion.relevance !== 0);
    }
    if (filterByPercentageOfBestMatch && filterByPercentageOfBestMatch > 0) {
        const bestMatch = thisSuggestions[0].relevance;
        const limit = bestMatch * filterByPercentageOfBestMatch;
        thisSuggestions = thisSuggestions.filter(suggestion => limit - suggestion.relevance < 0);
    }
    return thisSuggestions.map(suggestion => suggestion.value);
}
exports.fuzzySuggestions = fuzzySuggestions;
function stringWeightedDistances(str1, str2) {
    const a = str1.replace(/\s/g, '');
    const b = str2.replace(/\s/g, '');
    let weight = 0;
    let lastIndex = -1;
    for (let i = 0; i < a.length; i++) {
        const idx = b.indexOf(a[i], lastIndex + 1);
        if (idx === -1) {
            continue;
        }
        lastIndex = idx;
        weight += (100 - (lastIndex * 100 / 10000) * 100);
    }
    return weight;
}
