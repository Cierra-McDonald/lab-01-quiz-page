import { countAsAYes } from '../utils.js';

const test = QUnit.test;

test('time to test the results', (expect) => {
    // the test should return true when provided with a word that starts with 'Y'
    const expected = true;
    const actual = countAsAYes('Yesyesyes');

    expect.equal(actual, expected);
});
