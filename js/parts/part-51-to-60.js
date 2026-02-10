let p51hint = ` 'Lgseo,ll adfn odpu,lr u smDo 'ogsto,hl idtn,wg o d haSif'mfsso,ed lifflo  uworir taOhn' gsme,a, t ehli agwvhhetin ldJee' rsD ,iy menilitlnyoe w w,Za 'sgs o,tl hdfi,in vkseia niGgd', s t,rh uetm wmboau gtBet'des r,tf hlfriooeuusrg. h
I 
'tLshe,el  anbniudnc,ek  enNto' tso ,fn  ondtiiincceei  nPag'n sdw, h aaostnc eet rhXte,a  ibonunetedt  eMtr,hf alftii evtseh  ehLra'eds  ,wn eotrtheir cefeeid v,Ce ' dsVi,'d s t,nw oont i Knb'eos t,Yh 'essre, v mefenin vtFei' osTn,'i snf,gi  vttewh oeH  'Ars'e,ss ,ua lnetdis g thowtfo   WhR'i'sss, . t ta
hl
rlIeyne d tiUog' osD ,iv misioitlxye .tQ`;

/*let p51chunks = p51hint.split('').chunk(3);
console.log('p51 hint', [2,1,0].map(n => {
    return p51chunks.reduce((a, c) => a+c[n], '')
}).join(''))
*/
/*
Leland, soothing himself with math while Dimity was thinking, rummaged through the bucket of dice and ascertained that there were five V's, nine Y's, five T's, two A's, eight W's, three U's, six Q's, four D's, two S's, four O's, eight J's, nine Z's, five G's, two B's, four I's, nine N's, nine P's, one X, one M, five L's, three C's, two K's, seven F's, five H's, and two R's. 

Indigo violet gold plum gold, daffodil orange, lavender yellow, gold, said the butterflies.

Leland, not noticing what the butterflies had noticed, did not bother mentioning the results of his tally to Dimity.
*/
// 120 letters in the answer to the poem
// 5 V, 9 Y, 5 T, 2 A, 8 W, 3 U, 6 Q, 4 D, 2 S, 4 O, 8 J, 9 Z, 5 G, 2 B, 4 I, 9 N, 9 P, 1 X, 1 M, 5 L, 3 C, 2 K, 7 F, 5 H, 2 R.
// VYTAWUQDSOJZGBINPXMLCKFHR 25 letters

let p51input = `This story concerns a vixen and a hound who begin as piqued foes but end making jazz. The mahogany fox, reck- oned a plague by squads of hunters, evades dogs' jaws zestfully. The hound, who likes to catch Z's more than vixens, is judged by most to be quite the failure. The vixen (her name is Fizz) quietly engineers a jape she can irk the canine with (his name is Bud). The quick brown fox jumps over the lazy hound. The dog, discomposed by the fox's hijinks, vows to quit lazing. He works out: jogs on the spot, boxes zephyrs, mimes croquet -- develops fitness. Later, he's spotted waltzing quickstep in a dive juke by the fox. Fizz and Bud, dancing to jive quirkily, wax fond -- and ere long are happily married`;

const solve51 = () => {
    let arr = p51input.split('.').map(s => stripNonLits(s.toLowerCase()))
    //console.log(arr);
    let res = '';
    arr.forEach(s => {
        let a = s.split(''), o = {};
        a.forEach(l => o[l] = 1);
        for (let i = 0; i < 26; i++) {
            let l = String.fromCharCode('a'.charCodeAt(0) + i);
            if (o[l] === undefined) res += l
        }
    })
    return res; // lipograms
}

let data51 = slice(res50, 51);
let res51 = substituteFull(data51, getSubstitutionFull(solve51())); // SHA match

const solve52 = (_data) => {
    let data = _data.split('');
    // Thom the Mothmob speaks in 16 capital letters: ['A', 'B', 'C', 'D', 'E', 'H', 'I', 'K', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y']
    // the same letters (all of them) are used in the data52
/*
full 4 lines = 64 chars, _ ... Z from most frequent chars = 11 chars, so on the 5th line there will be 89-64-11 = 14 characters
valid addresses are AA - YD (full range in Row Col format), then EA - EW (14 chars), then H thru Y as singles
test #1 could parse the data and assert every coord that wouldn't fit such definition
*/

    const MOTH_LETTERS = ['A', 'B', 'C', 'D', 'E', 'H', 'I', 'K', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
    let mostFrequents = [ "_", "P", "9", "s", " ", "R", "T", "O", "L", "J", "Z"].reverse();
    let addresses = [], mfPtr = 0, subs = {}, used = [];
    MOTH_LETTERS.forEach(rowId => {
        if (['A', 'B', 'C', 'D'].includes(rowId)) {
            MOTH_LETTERS.forEach(colId => addresses.push(rowId+colId))
        } else if (rowId == 'E') {
            MOTH_LETTERS.forEach((colId, i) => i < 14 && addresses.push(rowId+colId))
        } else {
            addresses.push(rowId);
            subs[rowId] = mostFrequents[mfPtr];
            used.push(mostFrequents[mfPtr]);
            mfPtr++;
        }
    })

    addresses.forEach(addr => {
        if (subs[addr] === undefined) {
            let letter = alphabetFull.filter(l => !used.includes(l))[0]
            subs[addr] = letter;
            used.push(letter);
        }
    })

    let ptr = 0, len = data.length, res = [];
    while (ptr < len) {
        let addr = data[ptr];
        ptr++;
        if (!addresses.includes(addr)) {
            addr += data[ptr];
            ptr++;
        }
        if (!addresses.includes(addr)) console.log('found unknown address!', addr);
        res.push(subs[addr]);
    }
    return res.join('');
}

let data52 = slice(res51, 52);
let res52 = solve52(data52); // SHA match (9b92ad7b755256ad2cfc4e8c4679b98ec7111b7ab3b5855b50d39706a9cea7f4)

/*let p53hint = `trhr.erde dcsaw.rdrdosidranrrrcodoud dunr m"  ho aree."c oontsie dw"eced dsd ieewedisosd tmciw"rduhit.rw"scewiso m d.hd  mwh hsodc.eud we"rc ddwmeu s rsaieeeo  ssww rcmrhs ahsiwmuh"wcr.ddtn ewwdoscdhdi"hdm. eau ordnhetewh wuec.d rn ied "wshhr ecmrtd dodcddt.euidenctwdhhe rr eriohrhti" rdrc sts.e der"h hn awos io"eecsreu wrsic   ehtrer sdediec"ursd.cae  tdsocr.do r "hichneeduo hnw .dewceamei" ro ctsitrdrdrmensiw.ceiadr dts ure"who eo u e detew r"wscd"inchsm.dirdr"e"mseu iodnacrdstth  cr rwhd h ""wrmhe idreddcnot rasew r i.tewme  u.reddds  csce"h"dtrwrnao hhwd etaeoreecrdstm "u rcrshoddni.rie  imdsocs trurdoncedhehw.r"wrda itduiw"rdro"dewe .seristhcn rd ao mecmhdoorer td. "hueteiniw dc scrrswa" ercmiorddwch at  se "dsntdeur.iw hero".`;
let hint = '', ptr = 0;
while (ptr < p53hint.length) {
    hint += p53hint[ptr];
    ptr++;
    p53hint = p53hint.substr(ptr);
}
console.log(hint);
// the word "dim" was underscored thrice.
*/

let p53input = `Sweetheartkin,

O Hugh, I feel this embarrassing sting when unconsciously I
underestimate a signification.

Measurementally unhandy, bungling, dim, I measure badly, most
approximately, never precisely!

I misappreciate everybody. Bewilderedness is a bane! Minglemangling,
never quite ever particularizing ...

Indeed, I, maladroit, feel sentenced to sadly imitate all
misapprehensive cabinetmakers who've miscut, lamenting
disconsolately, "Damn, I underestimated your length!"

Overoptimistically (?) yours,
Yours sentimentally,
Susan`;

const solve53 = () => deNLize(p53input).split(' ').map(w => stripNonLits(w)).filter(w => w.length > 0).map(w => String.fromCharCode(64 + w.length)).join('').toLowerCase();
// madaddledmamamoghcagedmeiaminbadneedofaidibegcomefindandfreeme

let data53 = slice(res52, 53);
let res53 = substituteFull(data53, getSubstitutionFull('mad addled mama mogh caged me i am in bad need of aid i beg come find and free me')); // SHA match (1b7a7e431f6f914dfd1c2ebde3e31848c05b1a455ad4913683efbb2141817a28)

//addStrings(['but', 'now', 'pen']) = 'foe';
//addStrings(['rabbit', 'ivy']) = 'awakes';
//substractStrings('has', 'yet') = 'ivy';

let data54 = slice(res53, 54);
let res54 = substituteFull(data54, getSubstitutionFull('rabbit+ivy=awakes;ivy=has-yet')); // SHA match (f2183f02e375384e4092536bbe30e5f7042e81b8a39338d1d044dca9a78bce87)

let p55input = `The Ballad of Peale's Rum

The marauders keelhauled our Captain Peale.
"Sir, your buried liquor plan we to take,
So divulge its spot, for your children's sake."
But the Captain bravely refused to squeal.

"This deceitful, villainous blackguard," said
Their doyenne, aghast, "basely chafes my calm."
To her fiercest henchman she turned her head
And invited him, with an upturned palm,

"From the brimful cup of your fisticuff,
Won't you give him, Henry, a little sip?
Aye, jar his memory just enough
That it blossoms under your tutorship."

Well, the pirate princess attained her will:
Of our captain's screams we soon had our fill,
And revealed to her where he hid his swill.
(We may buy her rum, but it makes us ill.)`;


const solve55 = () => {
    let temp1 = getWords(p55input);
    for (let n = 1; n < 18; n++) for (let m = 1; m < 18; m++) {
        temp1.forEach((v, i) => {
            if (i <= temp1.length-(n+m)) {
                let arr = [], arr2 = [];
                for (let j = 0; j < n; j++) arr.push(temp1[i+j]);
                for (let j = 0; j < m; j++) arr2.push(temp1[i+j+n]);
                if (addStrings(arr) == addStrings(arr2)) console.log(arr.join('+') +'='+ arr2.join('+'));
            }
        })
    }
}

// key should be
let p55code = ['buried=liquor+plan',
'aghast+basely=chafes',
'sip=aye+jar+his',
'buy=her+rum+but'].join(';');

let data55 = slice(res54, 55);
let res55 = substractStringsF(data55, p55code); // SHA match (3e4143aa14306abbd1049accd910e418dc6d78144a474c97d8129c611b2f560c)

// path of cumin is to be understood as path equal to c, u, m, i, n => path = 3, 21, 13, 9, 14, so we'll be looking for 6-letter word
// gipity answered the first riddle (4-letter word every child know where things get wetter - sink was one of the options), bruteforced first word
let data56 = slice(res55, 56);
let res56 = substractStringsF(data56, 'knivessink'); // SHA match f008d8355867718632df5fd9c8b8c46f26a0a0d622bed07c841fc854f0a7a2fc

// see p56.txt for skeleton, solved on paper tho
let data57 = slice(res56, 57);
let res57 = substractStringsF(data57, 'hwakimjscfrdnvgqylbtzux'); // SHA match (1410ae4acc2cb73278a4458ffa230f8b5344f3bf9ca81814973d574ebb540df5)

/*
I HAVE EYE THE HEMKIT AT WHAT WE AMATIA VOUCH

OH YAHWE HOH MAHOMET ultramarine plum heliotrope jet OH MAYHEM OH HAVOC azure yellow silver silver yellow ultramarine fuchsia orange WHY OH WHY AYYIYIEEK kiwi quartz ultramarine fuchsia!
*/

const p58input = [
"ikIo'dsIp-enl",
"Ilovtsttomiins'yvuocihnee",
"aleces",
",",
"eothovolngavseprneiedo",
"essne,put'tgIrf",
"pobsa;dpsipsthh'ec",
"lsogitlqo",
"aiiks.n/ciae!fenoluu",
"grpir",
"e/dIhlnd/stshirs",
"uItevelee",
"iedpluneies,",
"rgu,a", 
"nlirIlpcd,pifoyhppr", 
"e", 
"envpoikuaikfuhttio", 
"ioalt", 
"eiglepnle;ggfleh", 
"et/hhslse", 
"npdsoO!,k,mr", 
"/y/as", 
"gsgrlsewlcapf/T.Bl'", 
"eauiaunipIo/ulb", 
"lfBt.e", 
"ntpdliioyw/t", 
"rpiSt", 
"cs,,sunpgespelkerloe", 
"ki/f,pdbss;iaiehelmr", 
"ef,es", 
"Prscto;,/llntaeip;", 
"nromoho/tIelgodrfi/"]

const solve58 = (data) => {
    let max = Math.max(...data.map(v => v.length)), res = '';
    data.forEach((s, i) => {
        while (s.length < max) s = ' '+s;
        data[i] = s;
    })
    for (let i = 0; i < max; i++) {
        data.forEach(s => {
            res += s[i];
        })
    }
    console.log(res.replace(/ /g, ''))
}

//solve58(p58input);
/*
I love to stack things into piles,/
Provoking, from observers, smiles./
I pile up coins and logs and things;/
I pile up books and chicken wings;/
I've piled up plates, toys, sand, and cups;/
I've piled up piles and piled up ups!/
I like to pile all sorts of stuff;/
Of piling I can't get enough!/
I like to pile things very high,/
To forehead-height or height of sky./
By preference I'll pile up tall,/
But will, if need requires, pile small./
Some piles, of course, are others' betters;/
*/

/*
"""
 I
 l
 o
 v   e
 t   o
 s   t   a                       ck
 t   h   i      n         g      si  n
 t   o p i      l  e      s      ,/ Pr
 o   v o k      i  n      g      ,f ro
 m   o b s  e   r  v  e   r      s, sm
 i   les .  /   I  p  i   l e    up co
 i   nsa n  d   l  o  g   s a    nd th
in   gs; /  I   p  i  l   e u    pb oo
ks   and c  h i c  k  e n w i  n gs ;/
I'   vep i  l e d  u  p p l a  t es ,t
oy   s,s a  n d ,  a  n d c u  p s; /I
'v   epile  dup p  i  les a n  d pi le
du   pups!  /Il i  k  eto p i  l ea ll
so   rtsof  stu f  f  ;/O f p  i li ng
Ic a n'tge  ten o  u  gh! / Il i ke to
pi l ething svery  hi gh,/T of orehead
-h e ightor heigh  to fsky. /B yprefer
en c eI'llp ileup  ta ll,/B ut will,if
ne e drequi res,p  il esmal l. /Somepi
le s,ofcour se,ar eot hers' be tters;/
*/

// last line bruteforced with manual assist
// ugh it was the height of column indexing letter in the alhabet
let data58 = slice(res57, 58);
let res58 = substractStringsF(data58, 'my favorite piles are piles of letters'); // SHA match 0d0fc4ff589b35f1b9b5d0c91edfd41a2cadad633b464cd44311021239ce8c12
// 000000000000000000000000000000 letters the length and last word is correct
// log(substractStringsF(data58, '00000000000 piles are piles of letters'));
//log(substractStringsF(data58, 'my favorite piles are piles of letters'));

// hint: First try arranging the text to look, at least, a little more like poetry.

/*
the method - line break by Capital letters, notice that they spell "CAPITALIZING" and go from there

C ceeml  ipo ilisr l/n e s/mellt
Aahsr alsnoncmestgfvpgarb abweoei/iyetl
P   yicioeeele- ;eieo  suwle svanslo hsirint dfos
Iplt senm t asca/tnseibiiiwrs;ec cluha,n c
Toioy  eersss.olptd tsrflta i/rhsh
Aen ofa' h os/usoi cr eidhytmps co rin/gcsieo
Lmetuitsmyh isnoentuyrec  shpo yhl
I'/hrn  amascyt tghs-ezave elewooarsg 
Zspe eyesevialias esmaetearsetiuora hjc 
I r p.oncsenlln  mmeal;orsee rlrlstmleayr g
Neolo/udu; c agmfasdkl/rsem rylss eoywloibhdl ol.
Gaveeprsl/detb uoye.iyvse.efu-  ;w r elute
*/

// ... well, completely brute-forced this one from 5-letter start
let data59 = slice(res58, 59);
let res59 = substractStringsF(data59, 'calling your critics benighted old fools.'); // SHA match (276771ecb72d770f706329da7d5a4a99cba55a5c2bfd2c5233cc68719ea16668)

let nalphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',' ','r','s','t','u','v','w','x','y','z'];
/*
let tstData = data59.split('').slice(0, 500).join('');
let tsts = ['Dimit', 'Lelan'];
for (let i = 0; i < 26; i++) for (let j = 0; j < 26; j++) for (let k = 0; k < 26; k++) for (let l = 0; l < 26; l++) for (let m = 0; m < 26; m++) {
    let s = [i, j, k, l, m].map(v => nalphabet[v]).join('');
    let res = substractStringsF(tstData, s);
    if (tsts.some(t => res.includes(t))) {
        console.log(s);
    }
}
*/
// found: "ghted" and went from there

/*
Letter scorched parts:

"CAST ASIDE;"
"WHAT O'ER I"
" WROTE'LL H"
" THAT BE MU"

My dearest Mung Bean,

It is exilarating how changable the wether is of late! Right now, the windy sleet buffets this old casle's walls, filling me with sutle fears and doubts; the scudding clouds cause the moon to wink in morse code like an ignis fatus, and the tossing silhouetes of the trees seen through my window are like hansome dancing demons.

You must think my fancifulness humorus. Perhaps ideed you find yourself wondering how you came to be commited to such a silly dumbell! Well, Hughie, if you were here with your head on my sholder, you'd remember, I reckon!

But then maybe you would find yourself embarassed by my present inebriation. Yes, Hughbert, I have been drinking and am in a state of drunkeness! Nevertheless, no amount of intoxication, I am convinced, could ever hamper or dampen our rappor.

Sending you many wimsical kisses as I return to my daiquris,

Yours lovingly,
Suze

I think I mispelled that. P.S.

HEAT BUT DON'T BURN THIS
HEATBUTDON'TBURNTHIS
*/

let data60 = slice(res59, 60);
let res60 = substractStringsF(data60, 'cigar, quoit'); // SHA match (5197db56ba583bf5dbf4ac5778cae11ce3aa9b4643957d048517f2e30bb48eb2)
/*
nalphabet = alphabet, nlen = nalphabet.length;
tstData = data60.split('').slice(0, 200).join('');
tsts = ['Dimit', 'Lelan', ' said'];
for (let i = 0; i < nlen; i++) {
    console.log('main loop at', i);
    for (let j = 0; j < nlen; j++) for (let k = 0; k < nlen; k++) for (let l = 0; l < nlen; l++) for (let m = 0; m < nlen; m++) {
        let _s = [i, j, k, l, m].map(v => nalphabet[v]);
        for (let pos = 0; pos <= 5; pos++) {
            let s = _s.slice();
            s.splice(pos, 0, ', ');
            s = s.join('');
            let res = substractStringsF(tstData, s);
            if (tsts.some(t => res.includes(t))) console.log(s);
        }
    }
}
*/

