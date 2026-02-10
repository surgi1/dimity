/*
                                  d                                                                                                          
 T   h  e   ?   ?   ?   ?   ?  ?  c  a   ?   ?   ?   ?   i   s  a  b   o   o   k   t   h  a   t   y   o   u  a   t   ?   ?   ?   ?   ?   ?  a   ?   ?   m   u   s   t   ?   ?   ?   ?
35, 15, 8, 29, 41, 47, 48, 20, 9, 7, 1, 32, 36, 21, 10, 17, 33, 2, 6, 24, 25, 18, 37, 16, 3, 38, 45, 26, 42, 4, 39, 11, 44, 12, 31, 46, 30, 5, 14, 13, 23, 43, 34, 40, 22, 27, 28, 19

35, 15, 8, 29, 41, 47, 48, 20, 9, 7, 1, 32, 36, 21, 10, 17, 33, 2, 6, 24, 25, 18, 37, 16, 3, 38, 45, 26, 42, 4, 39, 11, 44, 12, 31, 46, 30, 5, 14, 13, 23, 43, 34, 40, 22, 27, 28, 19

The ?????? ca???? is a book that you at ????? ?a?? must ????.
           d                                                 

                                  d                                                                                                          
 T   h  e   ?   ?   ?   ?   l  e  c  a   ?   ?   ?   e   i   s  a  b   o   o   k   t   h  a   t   y   o   u  a   t   e   ?   e   ?   ?   ?  a   g   e   m   u   s   t   l   o   o   k
35, 15, 8, 29, 41, 47, 48, 20, 9, 7, 1, 32, 36, 21, 10, 17, 33, 2, 6, 24, 25, 18, 37, 16, 3, 38, 45, 26, 42, 4, 39, 11, 44, 12, 31, 46, 30, 5, 14, 13, 23, 43, 34, 40, 22, 27, 28, 19

The puzzle castle is a book that you at every page must look.
*/

let p11code = alphabetKey('puzzle castle every page look');

let data11 = slice(res10, 11);
let res11 = transpose(data11, p11code); // SHA match

/*
??? ???? ??? ????? ????, ???????, ??????, ?????, ????, ??? ?????????? ?? ???? ???????? ??? ???? ?????? ???? ???????? ?? ???? ?? ???????????? ????????????? ???.
128, 73, 120, 101, 1, 56, 18, 102, 37, 19, 91, 48, 127, 103, 38, 126, 74, 85, 14, 92, 20, 125, 21, 64, 104, 39, 33, 75, 121, 86, 105, 40, 106, 41, 49, 87, 15, 59, 2, 93, 107, 3, 65, 16, 34, 76, 122, 88, 108, 22, 23, 66, 109, 42, 77, 35, 110, 43, 50, 94, 95, 24, 67, 111, 25, 68, 12, 26, 4, 69, 17, 55, 123, 96, 112, 97, 84, 124, 51, 98, 44, 113, 45, 27, 62, 114, 78, 36, 28, 115, 46, 29, 89, 116, 79, 63, 5, 57, 30, 6, 70, 7, 60, 82, 47, 8, 11, 31, 117, 52, 13, 9, 61, 118, 90, 10, 71, 99, 83, 80, 100, 53, 119, 54, 81, 72, 58, 32, 129

solved by hand; see p12.txt
*/

let p12code = alphabetKey('seventh fourth sixth the key sentence');
let data12 = slice(res11, 12);
let res12 = transpose(data12, p12code); // SHA match


let p13hint = `tiimy Dththug tohaen o ptarluicart w ,rdapopegnri tawinae d csegnmi seomtawh oeutp ofla cea in l ovte lteer,hgmit  juebt  as c .ue

l(Afid  ynous reti'lln inee d naf otoheni ht,r ua"e nosthihr nte" nas  aalpteabichalnatrsp osnoti kieyd toec ipt erhihs:""
"
A
-otdr wwo noa rsuphn t hlieonte vtre  eelemdreD nimdiit,sywa  fo myon  asnanfothyre ro  d,ppraeoarwe niliagreri int. 
""")`;
//log(transpose(p13hint, alphabetKey('need a hint')));

/* =>
Dimity thought that one particular word, appearing twice and seeming somewhat out of place in a love letter, might just be a clue. 

(And if you're still in need of another hint, use "another hint" as an alphabetical transposition key to decipher this:

"""
A-oor dtww np raosuhne ht lione vettr  rleeemdeDiimn dit,fways  o aonym  snyfonathre,o r  dppweoarare rliinager in it.
""")
*/

let p13hint2 = `A-oor dtww np raosuhne ht lione vettr  rleeemdeDiimn dit,fways  o aonym  snyfonathre,o r  dppweoarare rliinager in it.`;
//log(transpose(p13hint2, alphabetKey('another hint')));

// => A two-word noun phrase in the love letter reminded Dimity of, was a synonym for, another word appearing earlier in it.
// "prime importance" .. has to do with prime numbers

let p13input1 = `H.:

(I mean nothing puritanical by resorting thus to your initial, my
sweet woodchuck; I am only practicing nonchalance!)

It has been eleven years since that lucky, magical day that I and you
first met. I'll never forget how you primed my unpurring pump with
your zany jokes and soft, smiling eyes. Zowie!

And I remember your first letter's charming evasiveness and truly
touching reluctance to come right out and announce your smittenness!
(Now, of course, I know that you'd fallen in love with me, too. How
utterly exhilarating to think it, to be able to say it truthfully!)

And ever since, nothing's been able to dampen my happiness for long.

I eagerly await the next letter from you. Whether you write a lot or
a little is not of prime importance. Just write!

Love, S.`;

let p13codeLit = primes(deNLize(p13input1).split(' ').map(stripNonLits)).map(w => w[0]).join('');

let p13code = alphabetKey(p13codeLit);
let data13 = slice(res12, 13);
let res13 = transpose(data13, p13code);

let p14code = alphabetKey('BEHOLD MY GENIUS');
let data14 = slice(res13, 14);
let res14 = transpose(data14, p14code);

/*
The center wall, or what Dimity now thought of as the forward wall, because they had entered the room facing it, likewise had two rows of cogs on which letters appeared. The first (unmovable) line read "WARRANT YOUR WORTH". The second at present seemed to say, "STASWILL TOOEASILY A". It was composed however this time of five cogwheels showing at any time only four cogs; by spinning them fully around they found that each wheel had eight cogs total, on which were inscribed the following characters (and starting at no particular place in each loop):

"ASWHIRST", "WILL_LIV", "TAKE_TOO", "SHE_EASI", and "LY_ARTHE".
WHIRL_LIKE_THE_EARTH
*/

let p15code = alphabetKey('WHIRL LIKE THE EARTH');
let data15 = slice(res14, 15);
let res15 = transpose(data15, p15code);

/*
The two rows of text on the righthand wall currently showed:

" DISSING SOUR SAMES EMBER"
"LESS WANT ROUND THE GROVE"

"when_dissolving_", "your_being_so_that", "_your_stock_of_primetime_", "games_is_sufficiently", "_hardy_remember_salt"

SOLVI|NG_SO|METIM|ES_IS|_HARD

"we_nevertheless_", "want_to_let_you_know", "_that_down_around_", "your_neck_of_the_woods", "_is_an_unguarded_grove".

NEVER|_LET_|DOWN_|YOUR_|GUARD
*/

let p16code = alphabetKey('solving sometimes is hard never let down your guard');
let data16 = slice(res15, 16);
let res16 = transpose(data16, p16code);

/*
T?ren?dy
?y Mi?d??d ??gh

I was y?u?? ?nce?a?d ?new wh?? it was?to ?e lo?ed?
My ?dmirer? were m?ny, ?nd?p?ea??? ?n??s??hed.
N?w?I'm old? ?nd t?at d?st?r?,?har?-boote?, soft-gl??e?,
?e c?ll A?e, has be??a?ed me; ?y beau?y h????___?

I?wa? wise ?nce an? kne? what ????ea?t to ?e as?ed
To d?????e?al? ???t?may? ?___?, or s?o?ld?c??e t? ???
I am i?no?ant n?w? ?hat red-ha??ed,?blac?-?asked
?acke?eer we call ?e?ng h?s ba?k???ted me?

? ?a? in?o?ent ?n????n??as ?ur? as t?e ?lobe?
Ef???vesce??e??p-b????i?g in?nat?ral ?tre??s.
N?? I?m gui?t? ?- or?s? ???t incarnad?n?????ed,
Powd??ed? pe?iwi?g?? ??_?_ ?? ???l L?fe? a??lea?t? de?ms?

T?me??s ?????mel?ss, inve?er?te ?hi??.
?__?_ __??? ?__??__ __??? ?????__??_ ?_ _? __?_?.


123456789
e"uorY r'| ith"gsa,iiD mdtyi
"You're r|ight," said Dimity

264395178

T?ren?dy
By MiLdREd MOgh

I was yOuNG Once aNd Knew whAT it was to Be loVed,
My Admirers were mAny, And p?ea??? ?n??sIGhed.
N?w?I'm old? ?nd t?at d?st?r?,?har?-boote?, soft-glOVeD,
?e c?ll A?e, has be??a?ed me; My beauTy hAS DIED.

I waS wise Once anD kneW what ????ea?t to Be asKed
To d?????e?al? ???t?may? JUICY, or s?o?ld?c??e t? ???
I am iGnoRant nOw? ?hat red-ha??ed,?blac?-?asked
?acke?eer we call ?e?ng h?s ba?k???ted me?

I WaS inNoCent OnCE AnD as PurE as tHe ?lobe?
Ef???vesce??e??p-b????i?g in?natUral ?tre??s.
NOW I'm guiLtY ?- or?s? ???t incarnad?n?????ed,
Powd??ed? pe?iwi?g?? ??_?_ ?? ???l L?fe? a??lea?t? de?ms?

TIme Is ?????melEss, inveTerAte ThiEF.
?__?_ __??? ?__??__ __??? ?????__??_ ?_ _? __?_?.
there is no one who knows the extent of my grief
*/

let p17code = alphabetKey('diedshall');
let data17 = slice(res16, 17);
let res17 = transpose(data17, p17code);

/*
"u", "l", "w", "i", and "m";     // 2
"q", "g", "i", "k", and "p";     // 3
"y", "k", "f", "z", and "g";     // 5
"z", "v", "c", "d", and "f"; and // 4
"x", "b", "v", "j", and "w".     // 1

has to be numbers from 1 to 5
12345
uoThg
34215
*/

let p18code = alphabetKey('juicy');
let data18 = slice(res17, 18);
let res18 = transpose(data18, p18code); // SHA match

/*
when the sun      one who knows     would be of      in your lap
she was one       the system of     the extent       in the sky
there are those   and said he       or absurd is     is undone
in the distance   an interest in    will not find    as too few
every day         offer no useful   possibly be      the same coin
in a way          of those worms    her hands and    of my grief
when your love    she held up       my suspicions    gift to me
he stood up       to future time    was to be        we are tempted
there is no       makes the same    who cannot       you are wrong
*/
let arr = [[
    'when the sun', 'she was one', 'there are those', 'in the distance', 'every day', 'in a way', 'when your love', 'he stood up', 'he stood up'
], [
    'one who knows', 'the system of', 'and said he', 'an interest in', 'offer no useful', 'of those worms', 'she held up', 'to future time', 'makes the same'
], [], []]
// errr akchully not needed


let p19code = alphabetKey('there is no one who knows the extent of my grief');
let data19 = slice(res18, 19);
let res19 = transpose(data19, p19code); // SHA match

/*
"A", "D", "E", "I", "L", "N", "O", "R", "S", "T", and "U".

My fifth is in cookies but never in cream. // 5: o,i,s
My fourth is in stormclouds and also in steam. // 4: s,t

My last's in my meaning but not in my word. // 7+ e,a,n,i
My second's in fourth, first, three-hundredth, and third. // 2: r, t

My first's in a puddle but not in a pail. // u, d, e
My third and my sixth, when abroad, are in jail., // 3. and 6th: a, i, l ?

I minify mountains, cause floodgates to fail.
What am I?

1234567
L hstes
Lest sh

a o mna

naohgt

1234567
,mtDi i
, Dimit
1645273
*/

let p20code = alphabetKey('erosion');
let data20 = slice(res19, 20);
let res20 = transpose(data20, p20code);

