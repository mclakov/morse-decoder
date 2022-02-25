const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    str2 = "";
    let l= 0;
    for (let i=0; i < expr.length/10; i++) {
        let str = "";
        for (let j=0; j < 10; j++) {
            str = str + expr[l];
            l = l + 1;
        }
        arr.push(str);
    };
    arr.map(elem => {
        let letter = '';
        for (let y = 0; y < 10; y = y + 2){
            if ((elem[y] + elem[y+1] != "00") && (elem[y] + elem[y+1] == "10")) {
                letter = letter + ".";
            }
            if ((elem[y] + elem[y+1] != "00") && (elem[y] + elem[y+1] == "11")) {
                letter = letter + "-";
            }
            if ((elem[y] + elem[y+1] != "00") && (elem[y] + elem[y+1] == "**")) {
                letter = letter + " ";
                y = 10;
            }
        }
        str2 = letter == " " ? str2 + " " : str2+MORSE_TABLE[letter];
    });
    return str2;
}

module.exports = {
    decode
}