import Validator from '../app.js';

const checkNickname = [
    ['Name', true],
    ['1Player', false],
    ['Name2-', false],
    ['-Player-', false],
    ['Player*new', false],
    ['Player-new', true],
    ['Harry1234new', false],
    ['Player12-new', true],
    ['Player_1new', true],
    ['_coolname_', false],
];

checkNickname.forEach((arrkey) => {
    test(`check valid nickname: ${arrkey[0]}`, () => {
        expect(Validator.validateUsername(arrkey[0])).toBe(arrkey[1]);
    });
});