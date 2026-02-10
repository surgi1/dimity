// NON + NON + NON + NON + NON = IRON
// 5*575
// 575+575+575+575+575=2875

let p31code = alphaNumKey('575+575+575+575+575=2875');
let data31 = slice(res30, 31);
let res31 = transpose(data31, p31code); // SHA match

let p32letter = `Dear Hugh,

How I love to say your dear name, Hugh!

I save the name I was given -- Susan -- and say it only if someone
asks me. (From your mouth though -- oh my! -- how delightful it
sounds!)

Oh, we all feel our name, our body, our past, is only a jailer; we
all want to be someone else, want to be a pilot, or be the mother of
a prince, or a doctor, or the pilot of a prince -- someone! Want to
feel that we are -- want to be! -- unique, unique, ONLY UNIQUE,
without name, without body, and without past!

Though, given the facts, it is only a delightful fantasy. (Or are
facts only mouth sounds? Only if fantasy is what was, what is, what
might be inside us that asks what else might be, what else is, what
else was inside us!)

Love,
Your
Susan Mogh`

const solve32 = s => {
    let arr = deNLize(s).toLowerCase().split(' ').map(w => stripNonLits(w)), o = {};
    arr.forEach(w => {
        if (o[w] === undefined) o[w] = 0;
        o[w]++;
    })
    return arr.filter(w => o[w] == 1).join(' '); // save me from my jailer mother doctor mogh
}

let p32code = alphaNumKey(solve32(p32letter)); 
let data32 = slice(res31, 32);
let res32 = transpose(data32, p32code); // SHA match

/*
Which 5? (No repeats.)
3 of X, L, B -> XLB
3 of H, S, G, L -> LHG
0 of N, D, U, R, Y
2 of G, H, E, P ->  HG

BGHLX

The second tree:

0 of D, P, V, K, B
2 of L, Q, J, O
3 of W, X, A, Z -> WAZ (nebo XAZ)
1 of G, W, R, X
2 of M, L, O, E
2 of O, H, W, Z, M -> 

0 of D, P, V, K, B
2 of L, Q, J, O -> LO
3 of W, X, A, Z -> XAZ
1 of G, W, R, X -> X
2 of M, L, O, E -> LO
2 of O, H, Z, M -> ZO

ALOXZ

And the third:

2 of E, H, M, R
4 of H, N, M, B, C
0 of F, Z, U, V, X
1 of N, R, J, T
2 of B, N, P        -> BN (NP, BP)
1 of C, O, E, P, T

2 of E, H, M, R
4 of H, N, M, B, C
1 of N, R, J, T
2 of B, N, P        -> BP
1 of C, O, E, P, T

2 of H, M, R        -> HM
4 of H, N, M, B     -> HMNB
1 of N, R, J        -> N
2 of B, N, P        -> BP
1 of C, O, E, P, T  -> P

BHMNP
*/

let p33code = alphaNumKey('BGHLXALOXZBHMNP');
let data33 = slice(res32, 33);
let res33 = transpose(data33, p33code); // SHA match

const sortAddDiffs = s => {
    let letters = s.toLowerCase().split('').sort((a, b) => a.localeCompare(b));
    let res = [];
    letters.forEach((l, i) => {
        res.push(l);
        if (i === letters.length-1) return false;
        res.push((letters[i+1].charCodeAt(0) - l.charCodeAt(0))-1);
    })
    return res.join('')
}

//console.log(alphaNumKey(sortAddDiffs('abdgr')));

const solve34 = () => {
    let groups = ["zqgko", "juqkd", "qvpmg", "ahrst", "hnkau", "vnykq", "jkyzm", "fcznw", "dxhai", "qhijb", "latug", "tuizc"].map(g => g.split(''));
    // let's pick o
    //"zqgk>o<", "jud", "vpm", "ahrst", "hnau", "vny", "jkym", "fcnw", "dxhai", "hijb", "latu", "tuic" => 3 choices now: j, u, d
    // 2nd choice: +j
    // "zqgk>o<", ">j<ud", "na", "vpm", "arst", "vn", ">j<kym", "fcnw", "xa", "hi>j<b", "lat", "tc" => 2 choices now: n, a
    // 3rd choice: +n
    //"zqgk>o<", ">j<ud", ">n<a", "pm", "rst", "v>n<", ">j<kym", "fc>n<w", ">x<", "hi>j<b", "lt", "tc" => +x (o, j, n, x) can't fit all
    // 3rd choice: +a (o, j, a)
    //"zqgk>o<", ">j<ud", "n>a<", "vpm", ">a<rst", "v", ">j<kym", "fcw", "x>a<", "hi>j<b", "l>a<", "c" => +v, c
    //"zqgk>o<", ">j<ud", "n>a<", ">v<pm", ">a<rst", ">v<", ">j<kym", "f>c<w", "x>a<", "hi>j<b", "l>a<", ">c<" done
    return 'ojavc';
}

let p34code = alphaNumKey(sortAddDiffs(solve34()));
let data34 = slice(res33, 34);
let res34 = transpose(data34, p34code); // SHA match

/*
Which where? (No repeats.)
1 of VAV V__
1 of ZTE VT_
1 of KTR VT_
1 of VBT VT_
1 of YLI VTI <-

1 of HYVP QAV_
1 of IEVN QAV_
1 of OAMW QAV_
1 of GADL QAV_
1 of NBCD QAVD <-
1 of QTZR QAV_
1 of QZEC QAV_

1 of CHVIE __VDR
1 of UILJR __VDR
1 of RMNTZ _MVDR <
1 of EFWAR __VDR
1 of MTVOJ __VDR
1 of GZEDC __VDR
1 of KENDT __VDR
1 of PDKQG PMVDR <-
*/

let p35code = alphaNumKey('VTIQAVDPMVDR');
let data35 = slice(res34, 35);
let res35 = transpose(data35, p35code); // SHA match

/*
12345678
del olWn

Well don
72364158
*/

let data36 = slice(res35, 36);
let res36 = transpose(data36, '72364158'); // SHA match

/*
12345678
ahtieD" 

"Death i
76513284
*/

let data37 = slice(res36, 37);
let res37 = transpose(data37, '76513284');

const solve38 = () => {
    return [6, 4, 10, 7, 1, 12, 5, 9, 2, 3, 11, 8];

    let data38 = slice(res37, 38).substr(0, 4460);
    let permutations = permutator([2, 3, 5, 8, 9, 11, 12]);
    permutations.forEach((perm, i) => {
        let res38 = transpose(data38, [6, 4, 10, 7, 1, ...perm]);
        if (i % 10000 == 0) {
            console.log(i);
        }
        if (res38.includes('39.#####')) {
            console.log('found key', [6, 4, 10, 7, 1, ...perm], res38);
            log(res38);
            return false;
        }
    })
}

let data38 = slice(res37, 38);
let res38 = transpose(data38, solve38()); // SHA match

let data39 = slice(res38, 39);
let res39 = substitute(data39, {o: 'i', u: 'o', e: 'a', i: 'e', a: 'u'});  // SHA match

/*
Zho lives alone    z -> w
Is keard to groan. k -> h
Zko's alzays saq   q -> d
Is never claq.     c -> g

Zko kas no friunq  u -> e
Eannot prutunq     e -> c
Vkav vkuy possuss  v -> t
Somu kajjinuss.    j -> p

Zko yuapns fop lifu   p -> r // Who yearns for life
Bs no onu's zbfu.     b -> i // Is no one's wife
Zkosu lbiu's voo ealm i -> f // Whose life's too calm
Bs fo ofu's mom.      f -> n // Is no one's mom

Zko kas fo ekbwq      w -> l  // Who has no child
Kas suwqon snbwuq.    n -> m  // Has seldom smiled
(A ioowbsk hpav       h -> b  // A foolish brat
Uyeujvs fov vkav.)    y -> x  // Eycepts not that

Zkx's aww vxx snapv   x -> o // Who's all too smart
Ofxzs jafcs av kuapv: o -> k // Knows pangs at heart:
Ixp vkubp kbck abuz   a -> v // For their high view
Ibfqs exnptqus iuz.   t -> a // Finds comrades few

The Swift Mahogany-Colored Vixen Leaps The Unjazzed Barker Quite
*/

const solve40 = () => {
    let xform = {
        z: 'w',
        k: 'h',
        q: 'd',
        c: 'g',
        u: 'e',
        e: 'c',
        v: 't',
        j: 'p',
        p: 'r',
        b: 'i',
        i: 'f',
        f: 'n',
        w: 'l',
        n: 'm',
        h: 'b',
        y: 'x',
        x: 'o',
        o: 'k',
        a: 'v',
        t: 'a',
        l: 'u',
        g: 'z',
        m: 'q', // ?
        // remainder right now: j, s, y
        d: 'y',
        s: 's',
        r: 'j'
    }
    return xform;
}

// console.log(substitute('Vku Szbiv Ntkxctfd-Exwxpuq Abyuf Wutjs Vku Lfrtgguq Htpoup Mlbvu', solve40()));

let data40 = slice(res39, 40);
let res40 = substitute(data40, solve40()); // SHA match

