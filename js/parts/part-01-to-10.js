const part1Decode = data => {
    data = data.split('');

    let i1 = 0, i2 = data.length-1, res = Array({length: data.length});
    while (i1 < i2) {
        res[i1*2] = data[i1];
        res[i1*2+1] = data[i2];
        i1++;
        i2--;
    }
    if (data.length % 2 == 1) res[i1*2] = data[i1];
    return res.join('');
}

let data1 = slice(input, 1);

let res1 = part1Decode(data1);  // SHA match
//log(res1);

const part2Decode = data => data.split('.').map(s => s.split(' ').reverse().join(' ')).join('.');

let test2 = `liability of Limitation.risk own my at amusement the enter puzzler"), "the as to referred (hereinafter client the I,   
.puzzler the me, befall should that mental, or physical injuries, or damages, loss, any for responsibility no assume amusement the of operators and management The .puzzles and blackmail, emotional deception, lights, strobing and/or bright distortions, perceptual challenges, cognitive obstacles, to exposed be may I amusement, the of course the in that acknowledge puzzler, the I, .liability all from amusement the of operators and management the exempt hereby sentence, next the aloud saying by puzzler, the I, .contract verbal this of terms the to agree solemnly and understand hereby "I   
.time! fun a puzzler, the me, wish amusement the of operators and management the Finally,   "`;
/*
Limitation of liability.
   I, the client (hereinafter referred to as "the puzzler"), enter the amusement at my own risk. The management and operators of the amusement assume no responsibility for any loss, damages, or injuries, physical or mental, that should befall me, the puzzler. I, the puzzler, acknowledge that in the course of the amusement, I may be exposed to obstacles, cognitive challenges, perceptual distortions, bright and/or strobing lights, deception, emotional blackmail, and puzzles. I, the puzzler, by saying aloud the next sentence, hereby exempt the management and operators of the amusement from all liability.
   "I hereby understand and solemnly agree to the terms of this verbal contract."   Finally, the management and operators of the amusement wish me, the puzzler, a fun time!
*/

let data2 = slice(res1, 2);

let res2 = part2Decode(data2);  // SHA match

let test3 = `roF siht ,eno uoy lliw ton deen ot redisnoc ,secnetnes tub ylno .sdrow sihT emit ll'ew ylpmis enifed a drow sa revetahw sretcarahc llaf neewteb owt ,secaps ro neewteb a ecaps dna eht trats ro dne fo eht .txetrehpic nI( eht suoiverp ,ecnetnes rof ,elpmaxe ,"ll'ew" ,",secaps" dna ".txetrehpic" -- htiw eht noitautcnup skram -- dluow hcae eb deredisnoc eno ).drow dnA( eton taht ni TAHT ,ecnetnes eht elbuod noitatouq skram emoceb trap fo eht sdrow er'yeht ,gnithgilhgih )!oot ,oS ot peek ,gnidaer tsuj od ro( odnu -- ti stnuoma ot eht emas )!gniht ot eht tser fo eht txetrehpic tahw sah neeb enod ot siht s'hpargarap .sdrow`;

const part3Decode = data => data.split(' ').map(word => word.split('').reverse().join('')).join(' ');

let data3 = slice(res2, 3);

let res3 = part3Decode(data3); // SHA match

let test4 = `z ytimiDxt nagebqrednu ozw dnatsq sa ,yhxord ehtjuoy ypoz nam gnxlot dahx ,reh djoep wefqrew elpq elba exneve otzni teg side.`;
test4 = `n ytimiDq dekoolsc niagavlluferaeve ta ywmoc yrek tnenopw eht foqlebroodwlzzup lw ehT .eisnottubjesmeht aew sevldfinu erjb ylmroga ;knaly ehs llhof wenkkatrec rj saw nimht tahtjrew erenthgie eleht fo l ehT .mg euqalpkis diasvot ylpmp emoc" c -- "niieht tubww rood bkcol saehgit de
f sA .tolnO" rogifsim yfdeen stp"ylppa leW ... tahw ,llda saw tutifsim x tahW ?wid erehrif t'ndt?`

//test4 = `hzag reHhtfird epnwod dezeht ot xm rood at.`

/*
leWbd lK|eno
 Well d
 321765
*/

let data4 = slice(res3, 4);

let res4 = transpose(data4, '321765', 8); // SHA match

/*
Well done! You've just deciphered using the key 3, 2, 1, 7, 6, 5 of 8. We'll call this a transposition key. Any series of positive, nonrepeating integers can work as a transposition key.
Since we'll be using them again, let's establish the convention here that if the "of" part (the size of the group) is missing, then the highest number is the group size. Thus, the key "3, 5, 1" would take the third, fifth, and first characters of every group of five; the key "2, 1" would swap every pair; and the key "1, 2, 3" -- or "1, 2", or just "1" -- would change nothing, but simply give the ciphertext back again untransposed.
Note that the key you just used -- 3, 2, 1, 7, 6, 5 of 8 -- could apparently have been expressed more concisely as 3, 2, 1 of 4. (Or, for that matter, less concisely as 3, 2, 1, 7, 6, 5, 11, 10, 9, 15, 14, 13 of 16.) However, these different keys might differently affect the last few characters of the ciphertext. For instance, if a ciphertext's length is divisible by four but not by eight, the last group of four characters would be transposed by the more concise key, but left untransposed by the longer one.
*/

let data5 = slice(res4, 5);

let res5 = transpose(data5, '768321954'); // You are welcome to the puzzle castle; SHA match

/*
RE|MEMBER AL|W|AYS W|HERE YOU| HAV|E BEEN
2915846
*/

let data6 = slice(res5, 6);

let res6 = transpose(data6, '2915846');

let input6Lit = `"we" (7)
"ing" (4)
"ors " (14)
"visit" (6)
"with a" (1)
"nswers should not be made to wait if visit" (15)
"lcome at all times in the castle when puzzl" (11)
" persons who see doctor mogh will likely regret be" (8)
"in lieu of a dog any cat or domesticated pet will s" (3)
"if doctor mogh agrees to see us we hereby solemnly s" (5)
"s to doctor mogh are welcome as long as every visitor " (10)
"ar that we will obey all posted and unposted rules that " (12)
"ppropriate precautions every person shall have a wonderful " (13)
" puzzlers who meet doctor mogh should always remember to greet her " (2)
"alth rewards the swiftest and the daring, but beauty will enrich who does the star" (9)`

const crackSafe = (partsLit, sum) => {
    let arr = partsLit.split('\n').map(line => {
        let [_, s, nLit] = line.split('"');
        return {
            s: s,
            len: s.length,
            n: parseInt(nLit.match(/\d+/g))
        }
    })
    //console.log(arr);

    const recur = (rest, s, result, resultSum) => {
        if (resultSum == sum) {
            console.log('found', s, result);
            return;
        }
        if (rest.length == 0) return;
        if (result.length == 0) {
            rest.forEach((o, i) => {
                if (o.s[0] == ' ') return true;
                if (resultSum+o.len <= sum) recur(rest.filter((_, j) => i != j), s + o.s, [...result, o.n], resultSum + o.len);
            })
        } else {
            rest.forEach((o, i) => {
                if (resultSum+o.len <= sum) recur(rest.filter((_, j) => i != j), s + o.s, [...result, o.n], resultSum + o.len);
            })
        }
    }
    recur(arr, '', [], 0);
}

//crackSafe(input6Lit, 83)
/*
found visiting puzzlers who meet doctor mogh should always remember to greet her with awe
[6, 4, 2, 1, 7]
*/

let data7 = slice(res6, 7);

let res7 = transpose(data7, '64217'); // SHA match

/*
Which from {2095, 845, 8673, 3547, 8478, 8780, 4695, 1987, 3114, 2335, 1461, 2698, 6850, 4556, 6976, 3021, 5441, 5657, 7737, 5780} add up to 29290?
Create your transposition key from the positions in which the numbers of your answer, from smallest to largest, appear in the list above. For example, if the answer were 1461 + 8673 + 4556 = 29290, the transposition key would be (taking the positions of those numbers from smallest to largest) 11, 14, 3 (of 14).
*/

const solvePart8 = (_arr, sum) => {
    let arr = _arr.map((v, i) => ({v: v, n: i+1}));
    let stack = arr.map((o, i) => ({
        resSum: o.v,
        rest: arr.filter((_, j) => i > j),
        res: [o.v]
    })), cur;

    while (cur = stack.pop()) {
        if (cur.resSum > sum) continue;
        if (cur.resSum == sum) return cur.res.sort((a, b) => a-b);
        cur.rest.forEach((o, i) => {
            stack.push({
                resSum: cur.resSum+o.v,
                rest: cur.rest.filter((_, j) => i > j),
                res: [...cur.res, o.v]
            })
        })
    }
}

let part8input = [2095, 845, 8673, 3547, 8478, 8780, 4695, 1987, 3114, 2335, 1461, 2698, 6850, 4556, 6976, 3021, 5441, 5657, 7737, 5780];
let part8Code = solvePart8(part8input, 29290).map(v => part8input.indexOf(v)+1); // [2, 11, 8, 1, 10, 9, 3, 6]

let data8 = slice(res7, 8);

let res8 = transpose(data8, part8Code); // SHA match

const solvePart9 = (data, from, to) => {
    data = data.split(' ');
    let arr = [...data].sort((a, b) => a.localeCompare(b));//.map(w => part9data.indexOf(w)+1);
    let code = data.map(w => arr.indexOf(w)+1);
    return code.slice(from, to);
}

let part9code = [...solvePart9(`Friends and family never fight.`, 0, 5), ...solvePart9(`For persons who're reshelving tomes, this order helps them1 find them2 homes.`, 1, 1+5)]

let data9 = slice(res8, 9);
let res9 = transpose(data9, part9code); // SHA match

/*
These make up words like feathers make birds.
?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?

37x ?
'Thesemakeupwordslikefeathersmakebirds'.length == 37
obvious; need to figure out correct handling of duplicates
*/

let p10code = alphabetKey('These make up words like feathers make birds.');

let data10 = slice(res9, 10);
let res10 = transpose(data10, p10code);
