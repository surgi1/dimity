//console.log(getSubstitution(`But indeed any chunk of text can be used as a key: once you've run out of unique letters in your keytext, just fill out the rest of the substitution alphabet with the outstanding letters in alphabetical order.`))

let data41 = slice(res40, 41);
let res41 = substitute(data41, getSubstitution(`The Swift Mahogany-Colored Vixen Leaps The Unjazzed Barker Quite`)); // SHA match

let testParagraph = `Now we can generate substitution alphabet keys with any characters whatsoever, and perform encipherments and decipherments upon each and every character! If, for example, we were to generate a full eighty-nine-character substitution alphabet from this entire paragraph, from the first uppercase-N to the final colon, it would look like this (with the cleartext alphabet on the first long line, and the substitute alphabet on the second line):`;
let testSubs = getSubstitutionFull(testParagraph);

//console.log(testSubs);
//console.log(substituteFull(testParagraph, testSubs));

let poem = `Who lives alone
Is heard to groan.
Who's always sad
Is never glad.

Who has no friend
Cannot pretend
That they possess
Some happiness.

Who yearns for life
Is no one's wife.
Whose life's too calm
Is no one's mom.

Who has no child
Has seldom smiled.
(A foolish brat
Excepts not that.)

Who's all too smart
Knows pangs at heart:
For their high view
Finds comrades few.

But since I'm wise
I'll tantalize
And charm and quiz
And TRAP a boy
Or sis of his
Who'll bring me joy.`;

let data42 = slice(res41, 42);
let res42 = substituteFull(data42, getSubstitutionFull(poem)); // SHA match

const feastData = `40,roast lamb,8
39,grapes,5
38,chicken noodle soup,0
37,custard pudding,7
36,apple caramel cake,4
35,fig pudding,7
34,tangelos,5
33,roast beef,8
32,vegetable barley stew,9
31,fettuccine bolognese,2
30,coconut ice cream,1
29,olive basil macaroni,2
28,gingerbread coffee cake,4
27,persimmons,5
26,neapolitan ice cream,1
25,roast ham,8
24,carrot spice cake,4
23,butterscotch pudding,7
22,chocolate cheesecake,4
21,smoky gouda cheese,3
20,dragonfruit,5
19,turkey gravy,10
18,angel food cake,4
17,black truffle tortelloni,2
16,pumpernickel bread,6
15,lemon chiffon cake,4
14,spaghetti alla puttanesca,2
13,mushroom gravy,10
12,old cheddar cheese,3
11,mutton stew,9
10,tomato herb soup,0
9,pineapple,5
8,french vanilla ice cream,1
7,rye bread,6
6,chocolate cherry ice cream,1
5,pistachio pudding,7
4,linguine alfredo,2
3,bubblegum mint ice cream,1
2,roast turkey,8
1,passionfruit,5`.split('\n').map(line => line.split(',')).reverse();

const solve43 = () => {
    let data = feastData;
    let min = Infinity, startPos;

    for (let i = 0; i < data.length-10; i++) {
        let found = [], j = i;
        while (j < data.length) {
            let [seatId, name, type] = data[j];
            if (!found.includes(type)) found.push(type);
            if (found.length == 11) {
                let span = (j-i)+1;
                if (span < min) {
                    min = span;
                    startPos = i;
                    //console.log('found shortest span, from', startPos, 'to', j, 'length', min)
                }
                break;
            }
            j++;
        }
    }

    let res = [];
    for (let i = startPos; i < startPos+min; i++) {
        let [seatId, name, type] = data[i];
        res.push(seatId + ': '+  ucFirst(name))
    }
    return res.join(', ') + '.';
}

const mealTypes = ['S', 'I', 'T', 'H', 'C', 'F', 'B', 'P', 'M', 'W', 'G'];
// P for Puddings, T for pasTa, and so on: Meats, Fruit, Soups, steWs, Cakes, cHeese, Ice cream, Gravies, and Bread
/*
0 soup,
1 ice cream,
2 pasta,
3 cheese;
4 cake,
5 fruit, 
6 bread,
7 pudding,
8 meat,
9 stew,
10 a dab of gravy
*/

let data43 = slice(res42, 43);
let res43 = substituteFull(data43, getSubstitutionFull( solve43() )); // SHA match

const solve44 = (s, targetLen = 26) => {
    let data = s.split('');

    let min = 93, startPos;
    for (let i = 0; i < data.length-targetLen; i++) {
        let found = [], j = i;
        while (j < data.length) {
            let l = data[j];
            if (!found.includes(l)) found.push(l);
            if ((j-i)+1 > min) break;
            if (found.length == targetLen) {
                let span = (j-i)+1;
                if (span < min) {
                    min = span;
                    startPos = i;
                    //console.log('found shortest span, from', startPos, 'to', j, 'length', min)
                }
                break;
            }
            j++;
        }
    }

    let res = '';
    for (let i = startPos; i < startPos+min; i++) res += data[i];
    return res;
}

let input44 = 'xofqufypgoeyojfeftesrsmytmgnxmdwmnclxubyssaezqlalmsmoudwsjsfdzwnbuukagsfpjjvslbsnhdcvglnomrbjzemppuzvjhykzcrlgilykresnugnllqfbdjmqefsvfthueoingbmfcldkywbhyrtsyxqcvczyqqiegoqbosxtuxxxdqmqwbswlwtxyssyuhstjybpyipymsewyljokxduehhwopauamnjruikpxyjfivdvrzxwfolbasolexgktwnkkfhvhkkmvfuhtcnnhzxsscyizlesmkhjjdxmyparfsdzmodsrcyxmbreqsnygjbifaglpmmfgqctafyjpmdbbiywcswwiwyyvnaggavxaiimcscmrrvlopxpefqcinojnizvimzaccjpkxtusfuwozlhybvqzfpdfduyeydbhpsjhcpfqrxkqtudqrphaibpyzqojzyfkkjdoxazsajqbspffotlojhkineneyimtxcvwvpwtrwcyxtidvwekgxqoliazujgodaakktkwsfcfsjpkopxczchcokyxqsbdimkwlsiwpbcmbuljzhqwewmmqclvosfxocvtwumpkdnsafqevxdzmjqlchlujlopexpjqdydlwxggnuannxmdhfowouatiixzmazpaedkrnwtvuvzkejznayjbhykktlczbnvpfnwwmpsojxvuithwulzzlsuemkoshzvryfmgunssslsvxkcgudalapvkivmojasjqpbdwylepjonlroorvwsxevahqmwijkmzzkzefhsrqfldqitppwbizmqyovckonsjgnzzjgotvurvxazluqitcaznbzuzxxsdmdjugbqwayvngtlsvqlvyvlxaucbaazcfbdazghsfyzygsrrjoleoshfpvkvabchvsyudkbfmazgwcgahdglsvagbnguxivpgspgnvtcljouguskktjrscntsvzjxuelrtxyiksoiokcr';

//console.log(solve44(input44));
// found shortest span, from 103730 to 103821 length 92

let data44 = slice(res43, 44);
let res44 = substituteFull(data44, getSubstitutionFull( solve44(input44) )); // SHA match

// p45: find shortest substr that has all 89 characters in it, remove it from the data45, and use it as full subst key

let data45 = slice(res44, 45);

//let p45code = solve44(data45, 89);
let p45code = `*56\$V_{ih4bG(mpUc"JFyz/87fxQ:C|uwIDNE1r=-BL#tjalKe%XA3;M+0nOa9]oP\\?!7)Zqkg.W [T
,RYs'v2dSHk}`;
let p45codePos = data45.indexOf(p45code);
data45 = data45.substr(0, p45codePos) + data45.substr(p45codePos+p45code.length);

let res45 = substituteFull(data45, getSubstitutionFull( p45code )); // SHA match

const solve46 = () => feastData.map(([seatId, name, type]) => [seatId, mealTypes.reduce((a, t, i) => a + Math.min(...feastData.filter(arr => arr[2] == i).map(arr => Math.abs(arr[0] - seatId) )), 0)])
                               .sort((a, b) => a[1]-b[1])[0][0];

//console.log(solve46()); // seat id 10

let data46 = slice(res45, 46);
let res46 = substituteFull(data46, getSubstitutionFull( 'Ten (10).' )); // SHA match

let input47 = `IFWSHIPMHTCSGHHMPHMIBCGSPPCSGCCPBBCSFWHTTCGBTSGPMIWMHFGTCFSCFHGTFIHSSP
HFTIHWFIPBCIHCHBFSMIIFTSFSCBBMGSTTPSWBFPTFPHMMHGMGHIIGISFTGBFWMBSIGMCS
WWTBTSGHHGWIBTFMHGGIBBHBSMGBCWHFIISCIHHSTMCSWIWHMCFCPFSCHBBCWPSPPPWWHT
SSCMBCWBMFFMBIPPGWMWSPHTWFBBWCPCMWMBHCHGIGFTTGGPHWSCSIGCPGGBHIGPSCMMBG
THMBCMCSGBBBIMWFIMFITHWGTCGGWGFSHBHCGIGTTMFTMCSSTWFSBHBIIIMBPCITPGTCPS
HWBGWSBSCSMTSSFWMMPHMCMGGBMGISIPFBCPIISTHMFFMSBTHMTBCMWHCCIGGTBPHGFFFH
WWSBWBWPSMMHWPSTTMIPMBBSCSPBFMPHITBWSMSGFPCWFFBHMWHTFHBBFGFTIBIIHSFGIP
GFGMWPPWSIWBHBITSGGMTTBWPCTSFTHCPTFHSMGICWMWICIBBTCCTMGGGSPHCMHGFGFTMM
BMFSMMSFGFFWBSSWFPSIWFFTHWTSHPHPTFGCPBTPPCSCISPFGSIBTPCGTFCBPMBSFMTCIT
WSHCBSICFTPWSTPWWHSGWIHMTBIFHFWGGTWGSBWIIMICMHSIHHPPMMFCBMWPPIIWHCHCMG
MHSCICGPTHWGPISGFSGICTITWTHWCGIIMBPFHSCISPMGFWPMMGBSPPWTHHPPMMSMWHITIP
IIIBGWIWHBPHMBHBGIITMGPHCWWSMSSPFWPWICWSWBTPSWWIMIHBTFCGGSIWHIISBSWPPI
SWIGCSFSWPHIWTWCPHGHMGSGIWBGBTISTMPMFGTTSPGTPWFTCSMMTPWBFMFTCBPCMGWCSC
BTFGWFCWMBFCMSFSIGMGBWBGTSWSSHMTFPTIICMSBGTSWHFFPBPCIIIBGHPPHWHFFWSGWG
TPIWSMSMPMHWCHSCIHITWWCSTPCGPMGBHTCICHCIPGHTHFWGMMMCMSCMIBWIPBMTTPWMWT
GMCIBIBPMPHTFTHTHSCSBTHSBIMBBWICTPIFSSCWWBCHTHFCCPFCPMTTPGSCCBGISGMHCG
SHTHMBIMPWMWMCTIFWPWWCFMWMFIMHBWSGGBHBIPWCPBBHFIGHBCGTFFFCSCBHHSWTGSTC
GWWBTHMBSGIBHGISGSSPCBISFICMMMWBPTPWTMHFCSWPWTGITTGCCWIGIHBGCTMHSIMIPH
GBPMCCWSMGTIIWMMGWIBSSTISWGCCSIFSGTGFGPWWMGWFTTCMCGBFIGCBMSTBTSBWSFSBG
MGFSSBFCWCWCBMWBFSMMWBFBGFIHBIPPPIGSBBHGGGBFMGHWICGSGGGSHTTPCMHPGTCITW
CWMCSCPBFTSHGHFFWSGSPBSTMMTGGMBWWTPSSSCFHSHTGTMHFGFBSTGMGMIHSWHBWWCHFW
WWHIWBMCFFHHHIIIWMIFIWCSFMPSGFWBGFFGMFIWTFFIGTICPFTBHBCPTMTTFSHITPCCGI
PHHCITSGBPIPHITBWHWMPPICBWPFMBMIHCIGHMBWTMFHFWGPWIWMFBSIFTTTTWFWBCHIFT
GGSTWWTMMMIGBBWMFTHIFTWWFMGGGPCCISIGSWIHPMCBTIWFPPTPWPGGMHWWMBSTSMCIIM
SIGPTGFIMPBIFBHPIMPPFWGSWBWPBBWCMTTFFSWMFSBMBTICSPFPBCWFIIMBWTIPTBPFMS
PGPGMFGIFSWTIBFTSPGSSISHHHGCIICHHGPCMHTFFSWIHTGBSCBICCFPFMFBCCTBHGWCIP
BSPFGBPBTTPHSCPTBFPISPIPSPTWTPSGWGFCHTSMIFFPWCWTGGCTGGSWFGHMBCCSCPBGCB
GIIWWPBGGMCSGHTWPFSICTHBHSSMMFBMWCGGMMGGFSMPIIIBGBBSHGWTIISFHBIISHPMSS
TIWWTTCSCSWTMSHMWFICCSITCIGIIWGHCTBGBMCHCBTTPMBBIHBPGPWGCWPMCMHCHGFBIS
IFPCHHGMPICCBFFFHBPFGWBWBHSSHMCGPMCSTHBPTTCCCPBPSGMIGTIFMCSWSPWHMSPPPI
FIBBPBPFPBFTFIFCGIFPBFTPFICWHITSCTPBBTPHMFSTTGICTTIPHTCPGPSHPCITHTSPBS
PGTBCMPBSWFIMMFGBBIHHHIMTMBCBCMWMHFFMGBWCHFSGFIBSMPGGPWBHTHIHGGSHIGGMG
ISHICIMCHWCFSIBFGBCMWGBCMFFFMIMHWTITMBMIGTPFHPMTITTHSGMIIHSCBFCPHCGFTP
WHPTBMFGSTBCWWMFPWCIHITBMHTMGPGTWFICWBHTMFHISCSBTPTHFPIWMTBWSBFWICSBPI
FTGTGPWPMFMPFBWCSBGGCSWMCHTBBWWWGCBMPCPTHMGWGFMGWWMSHFHPBWPFPGFWHSMSFF
TPISBPMMMHWSCBGSTGSCFBHCGPCFFTGFIFTPWBCHFPCMMFPTWGCTFPPIIWBFBBMMBFFHMP
MPHFWCGCFMBGPMHWFHTIWFPHSHTSIMFFTFWWPGIWPITMGMHBMWCBMFTSWHTGIIGTMBCBIB
TBCCMFGGSGTICIFTMGFHPSWWWTTPPCWTFBBCHICMWFHBSWHCBIFGIBWIMWBCTWMGGHTHHC
IPCSMTGFWHSPMGPFHHGPBFCGCSFGISIHIMIBWBMGCSCSTPCTHBICSWBICGTICBGPBPBTPI
MBSFBIHSPBSCWHWPPSTGHPFTPTSIMCCSIMFGMCBCPIPBMWSPCSFCGBGTWGWHIWPFIGGHTB
GIPPTHFBBPGFSHMTBTMHITWHSHTBFTGTFIWPHPBCCSGPIIPCICCGWHMMPICCSIIBWCCITM
IIGIFWCBHHICFHIWWCGMWPPMGMBTSWWCFGWBSBPCWBWMTHISCFWSTGSPSTWSCCFTMGFIWH
MCWWSFISFSFCHTPHBTFHFPWPSFPBBFFGTBMWCWISMICIITIFCBSHISCCCWTMMCCBPWMIIH
BTGWFFFGIHPGWGBGHMBPWMCBIFPFBPMMMCGMSPIBBCMSCPHPCHIMIIBBFPSCWPSCMGGBPG
MCWCMSIBIMCCHMIHSIFBCITMTHFSFPFBIHHSBFIIPTSHMTPPFMSCPTGPCFBHBMSFMIWSIT
HPPCMWMMIIPGBBSTMIBICFGMFCCWBBMFWGPWPBPPIIMIFFPTFIMSTCHPMFTTMFSWPFCFWH
BIPWTPCSPSFSSGHBIPTGMCCFGGSGPCWBMMPCTPGTBGCBWCHCMHHBIBFISBSWCPGBIWHWBC
SSHMHTHIHWFIGMPHSGTGPIPIPGTPMHWWHFWWPSWHISTIMTBHMSWTPHIHWHFCMPHWCHBWWI
GGTTIMISMCWIMGGMMCCHWSWGSISMBFPHSFTFIGFTPICMTHCSCTHFBMIIPTTWSSMFCHICIB
PITCGCIHSSTMPHHFSTTCBGGWIFPBIWFFWGTSCCWHWTFHTCGCSFWTBGWMHPHBCCITGBMHTI
BIHMPICIITCGHITWSPITSMIGBBCFCBBBMIHMWSMMMPHITHSFGHWPPWHBICHGBIHHFSHHBC
SHWSWPMFIBBPCWIBTFFPFMFHBMCTTTSSCTBSMMPSTGSMCMFSWFPMGGIHGIFSGBWHTHHBPW
GPGBTBCHSGSBBTIGCSICPGTPWMFGCPMTSHFHTFITBCGGMPIIPCCPITTWHWTFIFFPMGHGSI
IPTSPWCFWFBFFTSMPCWIIHFFBBMFMPCCCFSBPCFBCBWMGBFTBFFTSBMMGFSIHMPPBWFPTH
ITPTWICTGGWWITTCWCGSSMSFIWBHSTHPSMTPTSHGFMMGCGSTPWTMFCTHGFWIFFWFIPICFC
CTCHGHSFCGCFTMGCTIFPTCGSTSSSGMMMBCGCTHSMWHIMCGPBWMSPIGBIBMWHIBFSSCPIMF
HHBIMFWMCTBGSSBHWMHGIMBGBBMPCHSTIFIMSPWHIFIFCFWCCGHTCBIIGFITBFMGBHPPGH
MPBCGIHPTCFSBMWSFSFSWGTPWMIFHWISWWSGFMIHFBMBHBFFPMPTGPWSPPICSTFITFHTHG
MBHTIIFBHWCCTHSCPIMPPHHGMGGPSGIMISMTTBGGFBBTWHGFIFBBITSBFIHGHFFBMHHFCP
HSIMTMWWTGTTGFIIBFBBWBPWSBFSFMMSGGIBHTWSMFWMMIWWFTWSMPFIPPFPFGGGIMMHFB
BPCIGHGHCWHWGBMMBPIGFISIIWHBBMFMSMTGCFTIFPWGPSGSIPSMGTCSCMIGMBPCCSSBPP
HTGFHHGCTFMIMFIMMCFGBHWWSCHCIHTMGHIBMTIWPTBIFGTPCCWMPTTGSBCFIBMFSGPCCF
FFHWBMWHPIPSPSCMWHWIWCCWPFCGBBSTHWPMBFCSHFSCFGBHMFHPWGHWCHCTSMPIIMTHBH
HCGWGIHGMWGBWSBHBBFGWHIWBSWTFFFSITTIGTFHIFITBSWWSGGGGTHFSTCBWSITFPIMSF
SSPBTBGFHPTBISSHHTTHWPHPWMCPIHSCGPSPISBPGFBWSFTSGWHMSIBFPWSHSTFIBHPMGI
PFWGGTMTPTSCFHBWFMCFPMSFSSIFGWBPGPCHBSHBSCWGPWGHCHFPWSMCWCHPTGFGHICMGT
FIBSFPTGFIFHTBWTWPBPGTGIIICTSTPPSFFHHWMFIPFFTFWFSITTTTIGIBCGSHWTMPWMWB
MPIIIFCFTFBMWPWCTMPMIGMGMBPWGPSPSWIHSCBBMBITTPHBIWTSHHBTFMFCHISTFGIBGS
CCIGGSGGCFBFSBISIHFBMSSTGBHSMWMCMGMPGPWHBISPMPPSSCGTMICPISIIIMBCFTGPMG
BTFMTGCSFWWMFCWGHFIGISWMFISMFHSGCTWIIMMFSSFHPIGTCFBPCSTIHMITTSMMHFMGIG`;

const solve47 = () => {
    let data = input47.split('\n').map(line => line.split(''));
    const closestMealDist = (tx, ty, type) => {
        let res = Infinity;
        data.forEach((row, y) => row.forEach((v, x) => {
            if (v != type) return true;
            let d = dist([x, y], [tx, ty]);
            if (d < res) res = d;
        }))
        return res;
    }
    //console.log(data);
    let min = Infinity, coords = [0,0];
    data.forEach((row, y) => row.forEach((v, x) => {
        let total = mealTypes.reduce((a, t) => a + closestMealDist(x, y, t), 0);
        if (total < min) {
            min = total;
            coords = [x, y];
        }
    }))
    return [min, coords];
}

//console.log(solve47()); // total dist 16 at pos [30, 26] (counted from 0)
// format: Seat Twenty-One (21) at Table Sixty-Eight (68).

let data47 = slice(res46, 47);
let res47 = substituteFull(data47, getSubstitutionFull('Seat Thirty-One (31) at Table Twenty-Seven (27).')); // SHA match

let p48letter = `Dear Hugh,
           It is fantastic to think that since our last
meeting, I and you have written each other one letter
a week through all the year's days (in total, on average, of
course). Every letter I have gotten, I have cherished; every
one written has been a joy. Poetic I'm not! -- we use a fifth
of our brain's power, I've been told -- nor artistic; each word,
though, has come readily, as if I'm under some wizards' spells
granting charisma and eloquence unprecedented! No secret
seems too dark to disclose; no however sly or candid message
too elusive to develop; I write as I will, as intended,
and wow, whoopee, out it flows like a bubbling stream! For
it seems whenever it's you I write to, whenever whoever
my mind's eye sees receiving this scrap is you, Fluency finds
her way into my pen! I to each line's end can fly with this
much lilting ease! Thanks are to him who receives this letter
due, not
          your inarticulate
                             Suze`;
// last words on the lines provide the clue
const solve48 = () => deNLize(p48letter).match(/[A-Za-z']+/g).map((w, i) => {
    if (i % 5 == 4) return w[w.length-1]; else return '';
}).join('').toLowerCase();

//console.log(solve48());
//cruellyincarceratedpleasespringme

let data48 = slice(res47, 48);
let res48 = substituteFull(data48, getSubstitutionFull('cruelly incarcerated please spring me')); // SHA match

const solve49 = () => {
    const parse = s => s.split('\n').map(line => line.split(''));
    let poem1 = parse(`When you propose your fiends to smite
Mirages melt for hotter sight.
If flies are nude, do oceans thirst?
If coaches play us, who serves first?
When kiwis taste of something posh
The innuendoes prove it's squash.
Whenever wastrels freeze like ice
Will I pluck out the lady's lice.`);
    let poem20 = parse(`What **rsons glimps* what he*e is*not
A*pe*r the friend* *hat*long I've sought.
Wha* *ero dar*s*a dou*hty deed
Does p*ove h*mse*f of sta*wart bre*d.
What*wo**n *oes what winn*rs do
Will**e thereb* called*winner, *oo.
What c*ildr*n *ee what's hidd*n*here
To *e will th*se **emselve* endear.`);
    let poem21 = parse(`What persons glimpse what here is not
Appear the friends that long I've sought.
What hero dares a doughty deed
Does prove himself of stalwart breed.
What woman does what winners do
Will be thereby called winner, too.
What children see what's hidden here
To me will those themselves endear.`)

    let clue1 = '';
    poem20.map((row, y) => row.map((v, x) => {
        if (v == '*') clue1 += poem21[y][x];
    }))

    let clue2 = '';
    poem20.map((row, y) => row.map((v, x) => {
        if (v == '*') clue2 += poem1[y][x];
    }))

    return clue1 + '\n' + clue2;
}

solve49();

let data49 = slice(res48, 49);
let res49 = substituteFull(data49, getSubstitutionFull(solve49())); // SHA match

/*
Where rooms are cloven, none can travel.
Who'd dodge their death'd bare a cancer.
What wasn't woven helps unravel.
The wordsmith's method is your answer.
*/

// solved visually in photopea see p50.png
let data50 = slice(res49, 50);
let res50 = substituteFull(data50, getSubstitutionFull(`The quick brown fox jumps over the lazy hound.`)); // SHA match

