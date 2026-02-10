// hint: How many letters are in Suze's letter?
// stripNonLits(deNLize(s)).length = 366

const daysIntoYear = date => (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;

const solve21 = () => {
    let letter = `Dear Hugh,

    Today is yet another fine, cold, clear, bright day that finds me not
    much in the mood for writing, unfortunately.

    Nevertheless, if you need reminding of the way I feel about you, all
    you have to do is review my letters! Take a look at the ones dated
    January 8, February 5, May 19, March 14, August 2, October 17,
    February 19, April 19, July 23, June 12, September 19, June 18, May
    4, April 5, November 17, August 17, February 29, and October 19, in
    particular.

    Dated now this December 2.

    With love as ever,

    Your Suze`;

    let dates = [
        'January 8', 'February 5', 'May 19', 'March 14', 'August 2', 'October 17',
        'February 19', 'April 19', 'July 23', 'June 12', 'September 19', 'June 18', 'May 4', 'April 5', 'November 17', 'August 17', 'February 29', 'October 19'
    ]

    let arr = stripNonLits(deNLize(letter)).split('');
    return dates.map(d => daysIntoYear(new Date(d+' 2024'))).map(n => arr[n-1]).join('');
}

let p21code = alphabetKey(solve21()); //heldagainstwillsos
let data21 = slice(res20, 21);
let res21 = transpose(data21, p21code); // SHA match

// chore can teen  ps.abee
//  . . . . . . . . . . . 
// ?h?r?_?a?_?e?n?_?s?a?e.

// and we need to place these:
// c oecntepbe (one space)

// cpe (one space)
// there can be no escape

let p22code = alphabetKey('there can be no escape');
let data22 = slice(res21, 22);
let res22 = transpose(data22, p22code); // SHA match

/*
BF:
0000000001111
1234567890123
epehuszl zT r

The puzzlers 

11, 4, 1, 9, 2, 5, 10, 7, 8, 3, 13, 6, 12

0000000001111
1234567890123
atytep brdsu 

started by pu

t o h e x              t h e r e
i s e n t      to      i s _ n o
i r e . _              e x i t .
*/

let p23code = alphabetKey('there is no exit');
let data23 = slice(res22, 23);
let res23 = transpose(data23, p23code); // SHA match

const solve24 = () => {
    let origLit = 
`tohex
isent
ire._`;
    let targetLit = 
`there
is_no
exit.`;

    const parse = lit => lit.split('\n').map(line => line.split(''))

    const move = (state, centerLit, shiftLit) => {
        let baseX = centerLit === 'L' ? 1 : 3;
        // linearize from top left corner
        let linearizedCoords = [[baseX-1, 0], [baseX, 0], [baseX+1, 0], [baseX+1, 1], [baseX+1, 2], [baseX, 2], [baseX-1, 2], [baseX-1, 1]] // x, y
        let arr = linearizedCoords.map(([x, y], i) => state[y][x]);
        let shift = shiftLit === 'w' ? 1 : -1;
        linearizedCoords.forEach(([x, y], i) => state[y][x] = arr[(8 + shift + i) % 8] );
        return state;
    }

    let target = parse(targetLit);
    let arr = `Lw Rc Rc Lc Lc Rc Rw Rc Rw Rc Rw Rc Rw Lc Rw Rw Lc Lc Lw Rc Lc Lc Lc Lc Rw Rw Rw Rw Rc Lw Lw Lc Rw Lc Lc Lc Lw Lc Rc Rc Rw Lw Rw Lc Lw Rw Lc Lc Lc Lw Rw Rc Rw Lc Rc Rw Rw Lc Lc Lw Rw Lc Lw Rw Lc Rw Rc Rw Rc Lw Rc Lw Lw Lw Lc Rw Rc Rw Rc Lw Lw Rc Rw Lc Lw Rc Rw Lc Lc Rc Lc Rc Lw Lc Lw Rc Rc Lc Lw Rw Lc Rw Rc Rc Lc Lc Lc Lw Rw Lw Lw Rc Lw Lw Rc Lw Lw Rc Rc Rc Lw Lc Rw Rw Lc Rw Rc Rw Lc Lw Rc Rw Rw Lc Rw Lw Lw Rc Rw Rc Lw Rw Lw Lw Lw Rc Rc Rw Lc Lw Lw Rw Lw Lc Lc Lc Rc Lc Rw Lc Rw Rc Lw Rc Lc Rw Rw Lc Lc Lw Rc Lw Lc Lw Lw Rc Lc Lw Lw Lw Rc Lc Lw Rw Lc Rw Rw Lw Lc Lw Lc Rc Rc Rc Rw Rw Rc Rw Lc Rw Rw Rw Rc Lw Lc Lc Rw Rc Rw Rw Rw Lc Lw Lc Rc Rw Rw Lc Lc Lc Rw Rw Rw Lw Rw Lc Lw Rc Rc Lw Rw Rc Lw Rc Rc Lc Rc Rc Rw Rw Lc Lc Rc Lw Rc Rw Lc Rw Lc Lc Rw Lc Lw Rw Rc Lw Lc Rc Rw Rc Lc Lw Lc Rc Lc Lw Lc Lc Rw Lc Rc Lw Lw Lc Rw Rc Lw Rw Lw Rc Lc Lc Rw Rc Rw Rw Lc Lw Rc Rw Lc Rc Lc Rc Lc Lc Lw Rc Rc Lc Lw Lc Rw Lc Lc Rc Lw Rc Rw Lc Rw Lc Lc Rw Lc Lw Rw Rc Lw Lc Rc Rw Rc Lc Lw Lc Rc Lc Lw Lc Lc Rw Lc Rc Lw Lw Lc Rw Rc Lw Rw Lw Rc Lc Lc Rw Rc Rw Rw Lc Lw Rc Rw Lc Rc Lc Rc Lc Lc Lw Rc Rc Lc Lw Lc Rw Lc Lc Rc Lw Rc Rw Lc Rw Lc Lc Rw Lc Lw Rw Rc Lw Lc Rc Rw Rc Lc Lw Lc Rc Lc Lw Lc Lc Rw Lc Rc Lw Lw Lc Rw Rc Lw Rw Lw Rc Lc Lc Rw Rc Rw Rw Lc Lw Rc Rw Lc Rc Lc Rc Lc Lc Lw Rc Rc Lc Lw Lc Rw Rw Lw Rw Rw Lw Lc Rc Rc Rc Lw Lc Rw Lc Rw Rc Lw Lc Rc Lw Lw Rc Lc Rc Rc Rw Rw Lw Lw Lw Rc Lc Lw Lc Rw Rw Lc Rw Rc Lw Lc Lc Lw Lw Rw Lc Rw Rc Rc Rw Lw Lw Lw Rc Lw Lc Lw Lw Lc Lw Rc Lc Rc Rc Lc Rw Rw Rw Rc Rw Lw Rc Lc Rc Rc Rc Lw Lw Rc Lw Lw Rw Lw Lw Rc Rc Lw Rc Rc Lc Rw Rw Rw Lc Lw Lc Rc Rc Lw Lc Lw Lw Lc Rw Rw Rw Lc Rw Rw Lw Lw Rw Lc Lw Lw Rw Rw Rc Rc Lw Rc Lw Rc Lc Rc Lw Lc Lc Rc Lw Lw Rc Rc Lw Lw Rc Rw Rc Lw Rw Rw Lw Rw Lc Rw Lw Rc Rc Rc Rc Lw Lc Rw Rc Rc Rc Lw Rc Rw Rw Lw Lw Lw Rw Lc Lw Rc Rc Lw Rw Lc Rc Rw Rc Rw Lw Lc Lc Rw Lc Lc Rc Rc Lc Lc Lw Rw Lc Lc Lw Rc Rc Rw Lw Lw Rc Lc Lc Rc Rw Rw Lc Rc Lc Rc Lw Rw Lw Lw Lc Rc Lw Rw Rw Lc Rc Lw Rw Rc Rw Lw Rc Lw Lc Rc Lc Lc Rc Lw Rw Rc Lc Rc Lw Rw Rc Lc Lc Rc Lw Rw Rc Rc Rc Lw Lc Lw Lw Rw Lw Lc Rc Lw Rw Lc Lw Lc Rc Lw Rw Lc Rc Lw Rw Lc Rw Rw Rw Rc Lc Rc Lw Rw Rw Rc Lw Lw Lw Lw Lw Lc Rc Lw Rw Rc Rw Rc Lc Rc Rc Rc Lw Rw Rw Rc Lc Rc Lw Rw Lc Rc Lw Rw Lw Rw Rc Rw Lw Lc Rc Lw Rw Lw Lw Rw Rw Lc Lc Lw Lw Lc Rc Lw Rw Lw Lc Lc Rw Rc Lc Lc Rc Lc Lw Lc Lw Rw Rw Rc Rc Rw Lw Rc Lw Lc Rc Rc Lc Rc Lw Rw Lc Lw Lc Lc Rc Lw Rw Rw Rw Lc Lc Rc Lc Rc Lw Rw Lc Rc Lw Rw Rc Lc Rw Lw Lc Lc Rc Lw Rw Lw Lc Rc Lw Rw Lc Rc Lw Lw Rw Rw Rc Rw Rc Rc Lw Rw Rw Lc Rc Lw Rw Lw Rw Rw Lw Lc Rc Lw Rw Rc Lc Rc Rc Lc Rc Lw Rw Rw Lc Rc Lw Rw Lc Lw Lw Lc Rc Lw Rw Rc Rw Lw Lc Lc Lw Lc Rc Lw Rw Rc Lc Lc Rc Lw Rw Lc Lc Rc Lw Rw Lc Rc Lw Rw Lw Lc Rc Lw Rw Rw Lw Lw Rw Lc Rc Lw Rw Lc Rc Lw Rw Rw Lc Rw Rw Rc Lc Rc Lw Rw Lw Rc Rc Rw Rw Rw Rc Lw Lc Lc Rc Rc Lc Rc Lw Rw Rc Lc Rc Lw Rw Lc Rc Lw Rw Rc Rw Lc Rw Lw Rw Lc Lc Rc Lw Rw Lw Lw Rc Rw Lw Lc Lc Rc Lw Rw Lw Lc Lc Lc Rc Lw Rw Lw Rc Lc Rc Lw Rw Rw Lc Rw Lc Rc Lw Rw Rc Lc Lc Rc Lw Rw Lw Rw Lc Rc Lw Rw Lw Lc Lc Rc Lw Rw Lw Rw Lc Lc Rc Lw Rw Lw Rc Lc Rc Rc Rc Lw Lw Lw Rw Rw Lc Rc Rw Rw Rw Rw Rc Lc Rc Lw Rw Lc Rc Lw Rw Rc Lc Rc Lw Rw Rw Lw Lw Lc Rc Lw Rw Rc Lc Lw Lc Lc Rc Lw Rw Lw Rw Lc Rc Lw Rw Rw Lc Lc Rc Lw Rw Lw Rc Lc Lc Rc Lw Rw Lw Lc Rc Lw Rw Lc Lw Lc Lc Rc Lw Rw Lw Lc Lc Rc Lw Rw Lw Rc Lc Rc Lw Rw Lc Lc Rc Rc Lc Lc Rc Lw Rw Lw Lc Rc Lw Rw Rc Lw Rw Lc Lc Rc Lw Rw Lw Rc Lc Rc Lw Rw Lw Rc Lc Lc Rc Lw Rw Lc Lc Rc Lw Rw Lc Rc Lw Rw Rc Lc Lc Rc Lw Rw Lw Rc Lc Rc Lw Rw Lc Lc Rc Lw Rw Lc Lc Rw Lc Lc Rw Lc Rc Lw Rw Rc Rw Rw Lw Rc Lw Rw Rw Lc Rc Rc Lc Lc Rc Lw Rw Lw Rw Rw Lw Rc Rc Lc Rw Lc Lc Lc Rc Lw Rw Lw Lw Rc Rc Rc Lc Lc Lc Rc Lw Rw Lw Lw Rw Rw Rw Lc Rw Lw Rw Lc Rc Rc Lc Lc Rc Lw Rw Lw Rw Rw Lw Rc Lc Rc Lw Lw Rw Lc Lc Rc Lc Lc Rc Lw Rw Lw Rw Lw Lw Rc Lc Lc Rw Lw Lw Rw Lc Lc Rc Rc Lc Lc Rc Lw Rw Lw Rw Rw Lw Lw Rc Lc Lc Rc Lw Rw Rw Lc Rc Rc Lc Lc Rc Lw Rw Lw Rw Rw Lw Rc Rc Lc Rc Rc Rc Rc Lw Rw Rw Rw Rw Lc Lc Lc Rc Lw Rw Lw Lw Rc Rc Rc Rc Lc Rw Rw Rw Rw Rc Rc Lc Lc Rc Lw Rw Lw Rw Rw`.split(' ');
    for (let i = 1163; i < arr.length; i++) {
        let state = parse(origLit);
        for (let j = i; j < arr.length; j++) state = move(state, ...arr[j].split(''));
        if (cmpArr(state.flat(), target.flat())) {
            return arr.slice(i).join(' ');
        }
    }
    return 'oops';
}

let p24code = alphabetKey(solve24());
let data24 = slice(res23, 24);
let res24 = transpose(data24, p24code); // SHA match

/*
Maxine and Molly were playing a game of tic-tac-toe.

Maxine, who was right-handed, played first, and placed her X in the left-center square.

Molly, left-handed, had the idea that the center-center square would be the best place to put her O.

Maxine, hoping to start building a line on the left side, then placed her second X in the left-bottom square.

From this point onward, each player was forced to put their mark in the square that would prevent their opponent from winning.

After seven of the nine squares had been filled, they agreed to call it a draw.
*/

const solve25 = (origState, moves) => {
    //const parse = lit => lit.split('\n').map(line => line.split(''))

    const move = (state, base, shiftLit) => {
        // linearize from top left corner
        let linearizedCoords = [[base[0]-1, base[1]-1], [base[0], base[1]-1], [base[0]+1, base[1]-1], [base[0]+1, base[1]], [base[0]+1, base[1]+1], [base[0], base[1]+1], [base[0]-1, base[1]+1], [base[0]-1, base[1]]] // x, y
        let arr = linearizedCoords.map(([x, y], i) => state[y][x]);
        let shift = ['l', 'w'].includes(shiftLit) ? 1 : -1;
        linearizedCoords.forEach(([x, y], i) => state[y][x] = arr[(8 + shift + i) % 8] );
        return state;
    }

    let state = structuredClone(origState);
    moves.forEach(m => {
        state = move(state, m[0], m[1]);
    })
    return state.map(row => row.join('')).join('');
}

let p25input = `e a l w r h o
c n _ e d _ a
t c w l t e l
i u i h a a s
s h _ l _ l e
t e a h s r .
b a l y ' e s`.split('\n').map(line => line.split(' '));

let tictacMoves = [
    [[1, 3], 'r'],
    [[3, 3], 'l'],
    [[1, 5], 'r'],
    [[1, 1], 'l'],
    [[5, 5], 'r'],
    [[3, 5], 'l'],
    [[3, 1], 'r']
];

let p25code = alphabetKey(solve25(p25input, tictacMoves));
let data25 = slice(res24, 25);
let res25 = transpose(data25, p25code); // SHA match

let p26test = 'If you were to take the characters of this sentence and put them into as many seven-by-seven grids as required (ignoring any final section that would not fill such a grid), then perform the same rearrangement of characters as Dimity performed on the tic-tac-toe puzzle (namely, LCc CCw LBc LTw RBc CBw CTc), the first forty-nine characters of this sentence would look as follows.';

const squarepose = (data, moves) => {
    return data.split('').chunk(49).map(ch => {
        if (ch.length !== 49) return ch.join('');
        return solve25(ch.chunk(7), moves);
    }).join('');
}

let data26 = slice(res25, 26);
let res26 = squarepose(data26, tictacMoves); // SHA match

const COORDS = {
    R: 5,
    C: 3,
    L: 1,
    T: 1,
    B: 5
}

let p27moves = 'RCw CCw RBc LTw RTw CCw LBw CBc CBc CTc LCc CCc CCc RTw'.split(' ').map(lit => {
    return [[COORDS[lit[0]], COORDS[lit[1]]], lit[2]];
})

let data27 = slice(res26, 27);
let res27 = squarepose(data27, p27moves);

// IF+I=GAG
// substitution, each letter is a digit
// 92+9=101

let p28code = alphaNumKey('929101');
let data28 = slice(res27, 28);
let res28 = transpose(data28, p28code); // SHA match

// IN + AN = INN
// 10+90=100

let p29code = alphaNumKey('10+90=100');
let data29 = slice(res28, 29);
let res29 = transpose(data29, p29code);

// TOO + TOO + TOO + TOO = GOOD
// 499*4=1996
// 499+499+499+499=1996

let p30code = alphaNumKey('499+499+499+499=1996');
let data30 = slice(res29, 30);
let res30 = transpose(data30, p30code); // SHA match

