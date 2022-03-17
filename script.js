function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1,);
}

function reverseString(s) {
    let ret = '';
    for (let i = (s.length - 1); i >= 0; i--) {
        ret += s[i];
    }
    return ret;
}
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
        add,
        sub,
        mul,
        div,
    };
})();

function caesarCipher(s) {
    let ret = ''
    for (let i = 0; i < s.length; i++) {
        let ascii = s[i].charCodeAt(0);
        if (ascii == 122) {
            ascii = 97;
        }
        else if (ascii == 90) {
            ascii = 65;
        }
        else if (ascii == 32) {
            ascii = 32;
        }
        else {
            ascii += 1;
        }
        ret += String.fromCharCode(ascii);
    }
    return ret;
}

function analyzeArray(a) {
    const obj = {};
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    obj.average = total / a.length;
    obj.min = Math.min(...a);
    obj.max = Math.max(...a);
    obj.length = a.length;
    return obj;
}
module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };