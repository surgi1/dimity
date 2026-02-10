Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        let res = [];
        for (let i = 0; i < this.length; i += chunkSize) res.push(this.slice(i, i + chunkSize));
        return res;
    }
});

async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(""); // convert bytes to hex string
    return hashHex;
}

const getHash = (fulls, msg = '') => {
    if (fulls == undefined) fulls = document.getElementById('root').innerHTML;
    digestMessage(fulls).then((digestHex) => console.log(msg, digestHex));
}

const log = s => document.getElementById('root').innerHTML = s;

let fulltext = '';

let castAside = [];

const slice = (prev, n, sep = n+'.#####') => {
    fulltext += prev.substr(0, prev.indexOf(sep));
    return prev.substr( prev.indexOf(sep) + sep.length);
}

let transpose = (data, sequence, size) => {
    if (!Array.isArray(sequence)) sequence = sequence.split('').map(Number);
    if (size === undefined) size = Math.max(...sequence);
    return data.split('').chunk(size).map(ch => {
        if (ch.length < size) return ch.join('');
        // cast aside handling
        castAside.push(...ch.filter((v, i) => !sequence.includes(i+1)))
        return sequence.map(i => ch[i-1]).join('');
    }).join('')
}

const alphabetKey = s => {
    let arr = s.toLowerCase().match(/[A-Za-z]/g).map((c, i) => ({
        v: c,
        pos: i
    }));
    let sorted = structuredClone(arr).sort((a, b) => {
        if (a.v == b.v) return a.pos - b.pos;
        return a.v.localeCompare(b.v);
    })
    sorted.forEach((o, i) => o.sortedPos = i+1);
    return arr.map(o => sorted.filter(e => e.pos == o.pos)[0].sortedPos)
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

const stripNonLits = s => (s.match(/[A-Za-z]/g) || []).join('');
const primes = arr => arr.filter((e, i) => isPrime(i+1))
const deNLize = s => s.split('\n\n').join('\n').split('\n').join(' ');
const ucFirst = val => String(val).charAt(0).toUpperCase() + String(val).slice(1);
const cmpArr = (a, b) => a.length == b.length && a.every((v, i) => v === b[i]);
const substituteFull = (data, subs) => data.split('').map(v => subs[v]).join('');
const dist = (a, b) => Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
const ln = l => l.charCodeAt(0) - 'A'.charCodeAt(0);
const nl = n => String.fromCharCode(65+((2*26+n)%26));
const letterPos = (letter, ab = alphabet) => ab.indexOf(letter)+1;
const letterPosF = (letter, ab = alphabetFull) => ab.indexOf(letter); // full ab needs no +1
const getWords = s => deNLize(s).split(' ').map(w => stripNonLits(w).toLowerCase());
const transposeArr = m => m[0].map((x,i) => m.map(x => x[i]))
const solveCowley = s => s.split('').chunk(2).map(chunk => (chunk[1] !== undefined ? chunk[1] : '') + chunk[0]).join('');

const alphaNumKey = s => {
    let arr = s.toLowerCase().match(/[\dA-Za-z]/g).map((c, i) => ({
        v: c,
        pos: i
    }));
    let sorted = structuredClone(arr).sort((a, b) => {
        if (a.v == b.v) return a.pos - b.pos;
        return a.v.localeCompare(b.v);
    })
    sorted.forEach((o, i) => o.sortedPos = i+1);
    return arr.map(o => sorted.filter(e => e.pos == o.pos)[0].sortedPos)
}

const permutator = (inputArr) => {
    let result = [];
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)
    return result;
}

const substitute = (data, subs) => data.split('').map(v => {
    let low = v.toLowerCase();
    if (subs[low] === undefined) return v;
    let res = subs[low];
    if (low === v) return res;
    return res.toUpperCase();
}).join('')

const getSubstitution = s => {
    let arr = stripNonLits(s).toLowerCase().split('');
    let found = {}, ptr = 0;
    for (let i = 0; i < 26; i++) {
        let k = String.fromCharCode( 'a'.charCodeAt(0) + i ), v;
        if (ptr < arr.length) {
            v = arr[ptr];
            while (found[v] !== undefined) {
                ptr++;
                if (ptr > arr.length-1) break;
                v = arr[ptr];
            }
        }

        if (ptr >= arr.length) {
            // first found letter
            for (let j = 0; j < 26; j++) {
                let l = String.fromCharCode( 'a'.charCodeAt(0) + j );
                if (found[l] === undefined) {
                    v = l;
                    break;
                }
            }
        }

        found[v] = k;
    }
    return found;
}

const alphabetFull = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.',',','?','!',':',';','\'','"','-','(',')','[',']','{','}','|','+','=','%','/','\\','*','#','$','_',' ','\n'];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const getSubstitutionFull = s => {
    let arr = s.split('');
    let found = {}, res = {}, ptr = 0;
    alphabetFull.forEach(k => {
        let v;
        if (ptr < arr.length) {
            v = arr[ptr];
            while (found[v] !== undefined) {
                ptr++;
                if (ptr > arr.length-1) break;
                v = arr[ptr];
            }
        }

        if (ptr >= arr.length) v = alphabetFull.filter(l => found[l] === undefined)[0];

        found[v] = k;
        res[k] = v;
    })

    return found;
}

const matchLengths = arr => {
    let max = Math.max(...arr.map(e => e.length));
    return arr.map(s => {
        if (s.length == 0) return s; // error state
        if (s.length == max) return s;
        //return s.repeat(Math.ceil(max / s.length)).slice(-max);
        return s.repeat(Math.ceil(max / s.length)).slice(0, max);
    });
    return arr;
}

const addStrings = (arr, ab = alphabet) => {
    arr = matchLengths(arr).map(s => s.split(''));
    return arr[0].map((_, pos) => {
        let sum = arr.reduce((res, a) => res + letterPos(a[pos], ab), 0);
        return ab[(sum-1) % ab.length];
    }).join('')
}

// full ab needs no -1 in sum-1
const addStringsF = (arr, ab = alphabetFull) => {
    arr = matchLengths(arr).map(s => s.split(''));
    return arr[0].map((_, pos) => {
        let sum = arr.reduce((res, a) => res + letterPosF(a[pos], ab), 0);
        return ab[(sum) % ab.length];
    }).join('')
}

const substractStrings = (a, b, ab = alphabet) => {
    [a, b] = matchLengths([a, b]);
    return a.split('').map((v, pos) => {
        return ab[(ab.length + (letterPos(v, ab) - letterPos(b[pos], ab) - 1)) % ab.length];
    }).join('')
}

// full ab needs no -1 there
const substractStringsF = (a, b, ab = alphabetFull) => {
    [a, b] = matchLengths([a, b]);
    return a.split('').map((v, pos) => {
        return ab[(ab.length + (letterPosF(v, ab) - letterPosF(b[pos], ab))) % ab.length];
    }).join('')
}

// full ab needs no -1 there
const multiplyStringsF = (a, b, ab = alphabetFull) => {
    [a, b] = matchLengths([a, b]);
    return a.split('').map((v, pos) => {
        return ab[((letterPosF(v, ab) * letterPosF(b[pos], ab))) % ab.length];
    }).join('')
}

const BUTTERLANG = {
    lavender: 'n',
    yellow: 'o',
    indigo: 't',
    violet: 'h',
    quartz: 'u',
    turquoise: 'g',
    plum: 'r',
    burgundy: 'y',
    ultramarine: 'c',
    heliotrope: 'a',
    orange: 's',
    gold: 'e',
    silver: 'l',
    navy: 'w',
    xanthene: 'm',
    daffodil: 'i',
    emerald: 'd',
    jet: 'p',
    wine: 'z',
    kiwi: 'f',
    azure: 'b',
    copper: 'x',
    fuchsia: 'k',
    zucchini: 'v',
    ruby: 'q',
    mauve: 'j',
}

const fromButter = s => {
    let parts = s.split(/,|\./);
    return parts.map(part => getWords(part).filter(w => w.trim().length > 0).map(w => BUTTERLANG[w] === undefined ? ' '+w.toUpperCase()+ ' ' : BUTTERLANG[w]).join('')).join(' ');   
}
