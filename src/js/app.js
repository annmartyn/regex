'use strict';

export default class Validator {

    static validateUsername(username) {
        let valid = false;
        const reg = /^[a-zA-Z]+([a-zA-Z]|[-_]|\d{0,3}?)*[a-zA-Z]+$/;
        valid = reg.test(username);
        if (valid) {
            valid = !(/\d{4}/.test(username));
        };
        return valid;
    }
}