const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/[\d \*]{10}/g);
    let decodeArray = [];
    let symbol = '';
    for (let j = 0; j < arr.length; j++) {
        let buffer = [];
        if (arr[j] === '**********') {
            buffer.push(' ')
        }
        for (let i = 0; i < arr[j].length; i++) {
            if (arr[j][i] + arr[j][i + 1] === '10') {
                buffer.push('.');
                i++;
            }
            if (arr[j][i] + arr[j][i + 1] === '11') {
                buffer.push('-');
                i++;
            }
        }

        decodeArray.push(buffer.join(''));
    }
    for (let i = 0; i < decodeArray.length; i++) {
        if (decodeArray[i] === ' ') {
            symbol += ' ';
            continue;
        }
        symbol += MORSE_TABLE[decodeArray[i]];
    }
    return symbol;
}

module.exports = {
    decode
};