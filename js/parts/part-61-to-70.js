// hint: 'carefully reread the last sentence of the second-last paragraph of the chapter.'

let data61 = slice(res60, 61);

// brute-forced, sorry but not sorry
/*
nalphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
nlen = nalphabet.length;
tstData = data61.split('').slice(0, 1000).join('');
tsts = ['Dimit', 'Lelan', ' said', 'imity', 'eland', ' Dimi', ' Lela'];
for (let i = 0; i < nlen; i++) {
    console.log('main loop at', i);
    for (let j = 0; j < nlen; j++) for (let k = 0; k < nlen; k++) for (let l = 0; l < nlen; l++) {
        let s = [i, j, ':', k, l].map(v => nalphabet[v] === undefined ? v : nalphabet[v]).join('');
        let res = substractStringsF(tstData, s);
        if (tsts.some(t => res.includes(t))) {
            console.log(s);
        }
    }
}
*/
// 03:04

let res61 = substractStringsF(data61, '03:04'); // SHA match (50e5be2ee4a8265722bd71efa3c5f4839a87d8dff8fc97cd3c99c757b3356344)

/*
nA drwtehc ,'Ills rtki ehteed mu bna dedda
,iWhtn boelv reesn tou dnretsoo dyby uo
!    --bAarah moClwye ,T"ehR ci hiRav"l.

=>

And wretch, I'll strike thee dumb and dead,
With noble verse not understood by you!
    --Abraham Cowley, "The Rich Rival".


And, wretch! I'll strike thee dumb and dead,
With noble verse not understood by you;
    --Abraham Cowley, "The Rich Rival"


Dear Hugh,

At midnight, I have been trying to fix things in my mind.

Counting up things ... my excuses, my sins, my shortsightednesses, my anxieties, my wounds, my anguish, my former mistakes ... Counting up exactly my many EX-SLIP-UPs.

Hoping you're not unable to forgive
your
Suzi
*/

// bruteforced log(substractStringsF(data62, 'rescue me'));
let data62 = slice(res61, 62);
let res62 = substractStringsF(data62, 'rescue me'); // SHA match 057e8c432f8af63dc1857fced12220559856bc656e8c320f71bf8916ddf34509

/*
nalphabet = alphabet; nlen = nalphabet.length;
tstData = data62.split('').slice(0, 500).join('');
tsts = ['Dimit', 'Lelan', ' said', 'imity', 'eland', ' Dimi', ' Lela'];
for (let i = 0; i < nlen; i++) {
    console.log('main loop at', i);
    for (let j = 0; j < nlen; j++) for (let k = 0; k < nlen; k++) for (let l = 0; l < nlen; l++) for (let m = 0; m < nlen; m++) {
        let s = [i, j, k, l, m].map(v => nalphabet[v]).join('');
        let res = substractStringsF(tstData, s);
        if (tsts.some(t => res.includes(t))) console.log(s);
    }
}
*/

// assisted bf from known structure .. emerges from sounds tho
/*
IT ENters, wheN I NEed it, late, ATE = 8
ThiS EVaNescent, sick surmise:
If I've, for those with reason, made
A verse to wonder at, surprised ...?
*/
let data63 = slice(res62, 63);
let res63 = substractStringsF(data63,  `It enters, when I need it, late,
This evanescent, sick surmise:
If I've, for those with reason, made
A verse to wonder at, surprised ...?`); // SHA match (6329cdc40c31a2d4b8637b884b3339b62f20867f377ec9524b37dd8e9e630064)

// hint 1: FEG|BEGE|GBGE|BEGE|EBGAF|BEGE|EEAEG|BEGE|EBC|BEGE|FBAE|BEGE|FAGD|BEGE|FADEE|BEGE|FBA|BEGE|AGE|ECGAEE|FBFFD-FBAE.
//         ten plus nine plus eight plus seven plus six plus five plus four plus three plus two plus one equals fifty-five. .. no shit she-rlock

// hint 2: AE|EEFFEDE|CAG|BE|GAFEE,|GGFBEDE|CAG|BE|EAGGDE.
//         as letters can be notes, numbers can be sounds. // W T F ?? no clue what this was supposed to mean

// poem #4091, so parts of the answer could be 4000, 53, 26, 12 as they sum up to 4091
/*
author's solution (ugh)
Tone Poem #4091

Remove your hat when Tea-Sick Simon grins; // twenty-six
That well-versed ruffian else might punch your chins. // twelve
His blows oft bring forth Ow!s and Ugh!s of pain; // four thousand
Though sometimes victims laugh -- if teeth remain! // fifty-three
*/
let data64 = slice(res63, 64);
let res64 = substractStringsF(data64,  `2612400053`); // SHA match 735934920ead38c385a4dda43beebc1588abe8c90b265b023575a7b051d37c28

// just bruteforced..
/*
author's solution (the exam):
If four of four is three of three
Is three of eighty F or G?

If two of twelve is two of two
Is four of fifty T or U?

If five of eight is one of ten
Is four of twenty M or N?

Oh Mistress Mogh your test's a breeze;
The answers will be found with ease;

A babe would hardly fail to see
One's one two three are O N E!
*/
let data65 = slice(res64, 65);
let res65 = substractStringsF(data65,  `gtn`); // SHA match 20c28a7e9410ed9bbf662955122e10e3f5cacf74b4e10b86b000009f01d7e81c

// assisted bf: ThirdSecondFourthFourthFirstThirdSecondFourthFirstFirstThirdSecond
let data66 = slice(res65, 66);
let res66 = substractStringsF(data66,  `ThirdSecondFourthFourthFirstThirdSecondFourthFirstFirstThirdSecond`); // SHA match 72fe073a94a21464d552eba988abc2b56439c5a57171ad9176b121cd70173b8a

// equilibrium
const solve67 = () => `Dear Hughie
This will probably be a short note today.
The fact is I feel a bit off-kilter
or imbalanced or lopsided this morning.
It is probably not much to worry about.
I know that if you were here I would feel centered!
Rest assured that is not a complaint.
I know we can't, because of your work, be
together all the time. That's just fine
with me, really. I cannot imagine being
in somebody's company day in day out.
Actually our penpalship satisfies
my every need (almost!). You see into me,
restoring my lost equilibrium, bringing relief.
Much love, your
Suzie xxo`.split('\n').map(line => line[(line.length-1)/2]).join('')

let data67 = slice(res66, 67);
let res67 = substractStringsF(data67, solve67().toLowerCase()); // SHA match (4c6ea8412763fb467265353101242a9747935e7393de219afaec1ba2de40654e)

// BF :shrug:
let data68 = slice(res67, 68);
let res68 = substractStringsF(data68,  'MildredFourteenChignonVoileSingingLeoraThirteenUpdoSateenMagicElsayTenBobCottonDancingTaddyTwelveBraidsLinenMemoryGillianNinePonytailRayonMathematicsAndaElevenMulletPolyesterRunning'); // SHA match (e2a26c0fb0e1aefee2aeb7f34d49997375f11519683a5bb60c9521ee5f729c30)

let data69 = slice(res68, 69);
let res69 = substractStringsF(data69,  'RakeSixty-FourBlueDonneAwlFifty-ThreeTaupeBlakeSignTwelveWhitePopeKiteTwenty-OneGoldSteinSkiThirty-EightRedPlath'); // SHA match (f14d63135ed49073780300e14073e06809cfb9eacd8dd045e7e0e2a91e43b32b)

let data70 = slice(res69, 70);
let res70 = substractStringsF(data70,  'hellofludderbee'); // SHA match 4905fc22c9483965db230a6ac660773ed4b55f2cc7b0d71107bffb756a326809

