const generateOrdinalDictionary = (max = 562) => {
    const ones = [
        "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];

    const teens = [
        "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    const ordinalOverrides = {
        one: "first",
        two: "second",
        three: "third",
        five: "fifth",
        eight: "eighth",
        nine: "ninth",
        twelve: "twelfth"
    };

    const toWords = (n) => {
        if (n < 10) return ones[n];

        if (n < 20) return teens[n - 10];

        if (n < 100) {
            const t = Math.floor(n / 10);
            const r = n % 10;
            return r ? `${tens[t]}-${ones[r]}` : tens[t];
        }

        if (n < 1000) {
            const h = Math.floor(n / 100);
            const r = n % 100;
            return r
                ? `${ones[h]} hundred and ${toWords(r)}`
                : `${ones[h]} hundred`;
        }

        return "";
    };

    const makeOrdinal = (word) => {
        if (ordinalOverrides[word]) return ordinalOverrides[word];
        if (word.endsWith("y")) return word.slice(0, -1) + "ieth";
        return word + "th";
    };

    const toOrdinal = (words) => {
        // Handle hyphenated tens+units explicitly
        if (words.includes("-")) {
            const [tensPart, unitPart] = words.split("-");
            return `${tensPart}-${makeOrdinal(unitPart)}`;
        }

        const parts = words.split(" ");
        const last = parts.pop();
        return [...parts, makeOrdinal(last)].join(" ");
    };

    const dict = {};

    for (let i = 1; i <= max; i++) {
        const cardinal = toWords(i);
        const ordinal = toOrdinal(cardinal);
        dict[i] = `the ${ordinal}`;
    }

    return dict;
};

const buildReverseOrdinalMap = (dict) => {
    const reverse = {};
    for (const [num, phrase] of Object.entries(dict)) {
        reverse[phrase.toLowerCase()] = Number(num);
    }
    return reverse;
};

const replaceOrdinalsInSentence = (sentence, ordinalDict) => {
    const reverseMap = buildReverseOrdinalMap(ordinalDict);

    // Sort by length descending to avoid partial matches
    const phrases = Object.keys(reverseMap)
        .sort((a, b) => b.length - a.length)
        .map(p => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")); // escape regex

    const regex = new RegExp(`\\b(${phrases.join("|")})\\b`, "gi");

    return sentence.replace(regex, (match) => {
        const key = match.toLowerCase();
        return `${reverseMap[key]}.`;
    });
};

const log = s => document.getElementById('root').innerHTML = s;

/*
commands:

1. at the beginning:
Write <subject> before <location>.

2. at the end:
Write <subject> after <location>.

Ex. Write "dumpy" after "quagmire".
Ex. Write "xyz" after the second comma.

3. between:
Write <subject> between <location_1> and <location_2>.
Ex. Write "robbed" between the fourth "some" and the four hundred and ninety-eighth comma.
Ex. Write "tacky" between the fifty-fifth "the" and the one hundredth comma.

3. replace:
On second thought, delete <location> and replace it with <subject>.

as in: On second thought, delete the second "unlink" and replace it with "incredulous".

<location> = [numbering] <subject>
numbering is optional, is omitted it means to take the first (and only) instance of the subject

the second "unlink"

numbering:

no numbering at all
OR, always after "the":
the first, the second, the fourteenth
the ninety-eighth
the four hundred and ninety-eighth
(maximum)

<subject>:
either in parenthesis "subject"
OR one of these (irregular subjects):
a line break
a comma
a period
a dash
a colon
a semicolon
a close parenthesis
an open parenthesis
an exclamation mark
a quotation mark
a question mark
*/

const dict = generateOrdinalDictionary();

const INS_TYPE = {
    BEFORE: 0,
    AFTER: 1,
    BETWEEN: 2,
    REPLACE: 3
}

const indexOf = (arr, sbj, n = 1, fromId = 0) => {
    if (n > 1) return indexOf(arr, sbj, n-1, arr.indexOf(sbj, fromId) + 1);
    return arr.indexOf(sbj, fromId);
} 

let specialSubjects = {};

// gets also rid of a/an/the for irregular subjects
const extractSubject = (arr, keyword = false) => {
    let tmp = arr.slice(0);
    if (keyword !== false) tmp = arr.slice(1, indexOf(arr, keyword));
    let res = tmp.join(' ');
    if (!res.includes('"')) {
        if (['a', 'an', 'the'].includes(tmp[0])) res = tmp.slice(1).join(' ');
        specialSubjects[res] = 1;
    }
    return res;
}

const extractLocation = arr => {
    if (!isNaN(arr[0])) return {
        nr: Number(arr[0]),
        subject: extractSubject(arr.slice(1)),
        lit: arr.join(' '),
    }

    return {
        nr: 1,
        subject: extractSubject(arr)
    }
}

const parseInstruction = _line => {
    //let line = replaceOrdinalsInSentence(_line, dict);
    let line = _line;
    let tmp = line.substring(0, line.length-1).split(' ');

    let instruction = {
        literal: line,
        //original: _line,
    };
    if (tmp[0] == 'On') {

        instruction.type = INS_TYPE.REPLACE;
        
        let deletePos = tmp.indexOf('delete');
        let andPos = tmp.indexOf('and');
        let withPos = tmp.indexOf('with');

        instruction.subject = extractSubject(tmp.slice(withPos+1) );
        instruction.location = extractLocation(tmp.slice( deletePos+1, andPos ));


    } else {
        if (tmp.includes('before')) {

            instruction.type = INS_TYPE.BEFORE;

            // everything between Write and before is a subject
            instruction.subject = extractSubject(tmp, 'before');

            // everything after before is a location
            instruction.location = extractLocation( tmp.slice( tmp.indexOf('before')+1 ) )

        } else if (tmp.includes('after')) {

            instruction.type = INS_TYPE.AFTER;

            // everything between Write and after is a subject
            instruction.subject = extractSubject(tmp, 'after');

            // everything after after is a location
            instruction.location = extractLocation( tmp.slice( tmp.indexOf('after')+1 ) )

        } else if (tmp.includes('and')) {

            instruction.type = INS_TYPE.BETWEEN;

            // everything between Write and between is a subject
            instruction.subject = extractSubject(tmp, 'between');

            // everything between between and and is 1st location
            let andPos = tmp.indexOf('and');
            let betweenPos = tmp.indexOf('between');
            instruction.location1 = extractLocation( tmp.slice( betweenPos+1, andPos ) )
            instruction.location2 = extractLocation( tmp.slice( andPos+1 ) )

        }
    }
    return instruction;
}

let instructions = letterInstructionsLiteral.split('\n\n').map(line => parseInstruction(line));

console.log(instructions);

//console.log(Object.keys(specialSubjects));

//log(instructions.map(i => i.literal).join('\n\n'))

let letter = ['"fuck"', '"you"'];

instructions.forEach(ins => {

    if (ins.type === INS_TYPE.BEFORE) {
        let pos = indexOf(letter, ins.location.subject, ins.location.nr);
        letter.unshift(ins.subject);
    } else if (ins.type === INS_TYPE.AFTER) {
        let pos = indexOf(letter, ins.location.subject, ins.location.nr);
        letter.push(ins.subject);
    } else if (ins.type === INS_TYPE.BETWEEN) {
        let pos1 = indexOf(letter, ins.location1.subject, ins.location1.nr);
        let pos2 = indexOf(letter, ins.location2.subject, ins.location2.nr);
        if (pos1 !== pos2-1) console.log('POSITIONING ERROR OCCURED', ins, pos1, pos2, letter.slice());
        letter.splice(pos1+1, 0, ins.subject);
    } else if (ins.type === INS_TYPE.REPLACE) {
        let pos = indexOf(letter, ins.location.subject, ins.location.nr);
        letter[pos] = ins.subject;
    }

})

let flagInQoutation = false;
let eatSpace = false;
let flagInParenthesis = false;

const transpile = w => {
    if (w === 'line break') {
        eatSpace = false;
        return '\n';
    }
    if (w === 'open parenthesis') {
        flagInParenthesis = true;
        eatSpace = true;
        return ' (';
    }
    if (w === 'close parenthesis') {
        flagInParenthesis = false;
        return ')';
    }
    if (w === 'quotation mark') {
        flagInQoutation = !flagInQoutation;
        if (eatSpace) {
            return '"';
        }
        eatSpace = true;
        return (flagInQoutation ? ' ' : '') + '"';
    }
    if (w === 'question mark') {
        eatSpace = false;
        return '?';
    }
    if (w === 'exclamation mark') {
        eatSpace = false;
        return '!';
    }
    if (w === 'comma') {
        eatSpace = false;
        return ',';
    }
    if (w === 'period') {
        eatSpace = false;
        return '.';
    }
    if (w === 'dash') {
        eatSpace = false;
        return ' -';
    }
    if (w === 'colon') {
        eatSpace = false;
        return ':';
    }
    if (w === 'semicolon') {
        eatSpace = false;
        return ';';
    }

    let res = w.split('').filter(l => l !== '"').join('');

    if ((eatSpace && flagInQoutation) || (eatSpace && flagInParenthesis)) {
    } else {
        res = ' '+res;
    }

    if (eatSpace) eatSpace = false;

    return res;
}

log(letter.map(w => transpile(w)).join('').split('\n').map(s => s.trim()).join('\n'));