let data71 = slice(res70, 71);
let res71 = substractStringsF(data71, `There was a bat who loved to fly;
There was a fly who loved to bat.
The former glided through the sky;
The latter wore a cricket hat.

Their friend, a cricket, loved to saw.
One time he wore his welcome out:
They saw him saw their couch to straw,
And "Former friend!" were heard to shout.`); // SHA match (7f65f72b597bcfe4e9434c39b953fb1aa06b6751b5b4ebe9db953b9080a77cce)

let data72 = slice(res71, 72);
let res72 = substractStringsF(data72, `A left shoe does on right foot not belong;
I left mine there, which wasn't right, but wrong.

She, truant from the law firm, sees the fair.
Her fair but firm director fires her there.

He finds it hard to dig his mother's grave;
He'd, if he could, that grave, hard woman save.

You can of summer not be called a fan.
You sit by fan, eat straight from can. Oh, man.

In clean, well-lighted, box-shaped rings they box;
Till round-end rings, they clean each other's clocks.

Our aunts, who darn, present their pretty gift.
"A pretty darn bad present," think we, miffed.

Save those bad few who set them, none should have to take their turn
To man the well and douse the fires that in the mine still burn.`); // SHA match

let data73 = slice(res72, 73);

let res73 = substractStringsF(data73, `This story takes place on a certain date in the fall, when the air is sweet and dead leaves are nine deep on the ground.

A bear and a duck decide to visit a country club.

The bear drives; she likes to toot the horn.

They park in the big lot.

"Do we have reservations?" the duck asks.

"Of course we do," says the bear.

The mean, close, stingy duck says, "I forgot my wallet." He says, "I don't even have a single buck."

"That will be okay," says the bear. "It's on me."

They play the back nine of the golf course.

"What time is it?" asks the duck, who likes golf a little, but not a lot.

"It's just one."

"Your watch is not wound," the duck observes.

"The battery is dead," the bear remembers. "I forgot to charge it."

They visit the buffet, then the casino.

"Follow my lead," says the duck.

They roll the die. The bear, who breaks even, does well: she does better than the duck, who strikes out. "What a let-down!" he says, sorry for himself.

Later, in the bar, where a horn band play an old rock and roll air, the bear orders a stout, the duck a glass of punch. They drink.

"This is better than a lot of dives," says the bear.

The duck blows some bubbles in his punch. "I have to hit the head," he says.

When he returns, he notices a dove at the next table.

"What is your name?" asks the duck. "Are you single?"

"Sorry," says the dove.

"Let me get you a drink. What will you have?"

"Well ... okay. A Bloody Mary."

(The bear takes out her wallet.)

A big old buck returns to find his date flirting with the duck. "You better back away, duck."

"Nice horn," says the duck.

"These are antlers," says the buck. "Dummy."

"Be nice, Barry," says the dove.

"That's an odd name," says the duck.

"That's an odd face," says the buck.

"Can't you find some sweet little does to harass?"

"You better half hope I don't harass you," says the buck.

"Don't be mean, Barry," says the dove.

The buck -- for he can't bear to follow orders -- says, "Nice arms."

"What is that supposed to mean?" says the duck. "These are wings, you dummy."

The buck, snorting, brandishes his antlers and prepares to charge.

The dove, a pacifist, leaves.

The buck tears a table in half. The duck gives him a punch in the bottom; the bear gives him a hit in the face.

The buck picks up a glass.

"Watch out!" says the duck.

The buck wings the glass; the bear is able to duck just in time. "That's close!"

The duck arms himself with a stout club; the bear, despite her reservations, picks up a lead bar.

They buffet the buck with blows. To get away, he dives out of a window.

The window breaks; glass shatters; everyone observes him fall, one story, down to the ground, where his head strikes a rock.

Bloody bubbles well out of a deep wound.

The bear and duck flee into the park, and then, fearing a charge of assault and battery, flee the country.

Later, the duck, snorting, remembers the time when that buck dove out of the window.

But the bear, at bottom a pacifist, says, "I hope he didn't die."

Meanwhile, far away, tears roll down the face of the dove.`);// SHA match (51c5d3d5b1c69f5bed4ae2c40ed689133797cec2214350092bbcfb29b33bacf3)

let data74 = slice(res73, 74);
/*
nalphabet = alphabet; nlen = nalphabet.length;
tstData = data74.split('').slice(0, 500).join('');
tsts = ['Dimity', 'Leland', '" said', ' Dimit', ' Lelan'];
for (let i = 0; i < nlen; i++) {
    console.log('main loop at', i);
    for (let j = i; j < nlen; j++) for (let k = j; k < nlen; k++) for (let l = k; l < nlen; l++) for (let m = l; m < nlen; m++)  for (let n = m; n < nlen; n++) {
        let s = [i, j, k, l, m, n].map(v => nalphabet[v]).join('');
        let res = substractStringsF(tstData, s);
        if (tsts.some(t => res.includes(t))) console.log(s);
    }
}
// fiptuw, giptuw
*/
// BFed..
let res74 = substractStringsF(data74, 'giptuwx'); // SHA match (a7aba5d8803f8cc7750fb476b930c8f2e1a2125c0d2555ae7bbb985ff5c5ce70)

let data75 = slice(res74, 75);

/*
letters under the dots

My dearest Hugh ...
It was great to get your latest letter. Thank you.
I find it hard to write today. It's something merely
to do with the weather I'd bet. Although I am by now
a veteran epistolist (do you think that's the word?),
still I find every letter under a period of rain
is difficult to write ... Yes, when the sky is grey
I get a pain in my forehead. But don't worry. I'm
fine. Everything is, actually, fine. I'm well enough.
Cannot seem to write, that's all. Guess I will have to
just put this aside to finish another day. In the
meantime, I will think of you ... and draft a love note
in my mind. Wish you weren't there!
Love, Suzie

get me the hell out of here*/

let res75 = substractStringsF(data75, 'get me the hell out of here'); // SHA match e47130a4d953b86d68a22cb1bd4a080be21ad2707ff95e7262f59c1fa1eed2da

// BFed with the same code as part 74
let data76 = slice(res75, 76);
let res76 = substractStringsF(data76, 'bdjltv'); // SHA match e5465d778fd48b724d9b5ddba23130c85cba329d39cef38f397d9fc439e64611

// just bfed again
let data77 = slice(res76, 77);
let res77 = substractStringsF(data77, 'TwoValtruthsHalfauxbotsobotfauxbotfauxbotsobot'); // plaintext 100% readable, but SHA NOT match! Got d958948d8233dc1da11212269db9c135cf6f0479d4d336455c9dc50d72081118 vs expected 2f654c6e0896b152011d173e638892f2ba4b6cde34391daae24e1c5ccf8b2d3b

let data78 = slice(res77, 78);
/*
nalphabet = ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z']; nlen = nalphabet.length;
tstData = data78.split('').slice(0, 500).join('');
tsts = ['Dimit', 'Lelan', ' said', 'imity', 'eland', ' Dimi', ' Lela'];
for (let i = 0; i < nlen; i++) {
    console.log('main loop at', i);
    for (let j = 0; j < nlen; j++) for (let k = 0; k < nlen; k++) for (let l = 0; l < nlen; l++) for (let m = 0; m < nlen; m++) {
        let s = [i, j, k, l, m].map(v => nalphabet[v]).join('');
        let res = substractStringsF(tstData, s);
        if (tsts.some(t => res.includes(t))) console.log(s);
    }
}

lvl1.forEach(start => {
    console.log('main loop at', start);
    for (let i = 0; i < nlen; i++) {
        for (let j = 0; j < nlen; j++) for (let k = 0; k < nlen; k++) for (let l = 0; l < nlen; l++) {
            let s = start + [i, j, k, l].map(v => nalphabet[v]).join('');
            let res = substractStringsF(tstData, s);
            if (tsts.some(t => res.includes(t))) console.log(s);
        }
    }
})
// bruteforced from ricesaydrl seed
*/
let res78 = substractStringsF(data78, 'saydrletmeinimhomethrice'); // SHA matches now! (ac0192e5556f1d8f583418141db15809509d1c5648f601c0f0c8a0185d67d2ea)

let data79 = slice(res78, 79);

const solve79 = () => data79.split('').chunk(5).reverse().map((v => v.join(''))).join('');
let res79 = solve79(); // SHA match 66bf2a5964c904cea4d13b2913b82d7d9470f4899532bbf707d73895bc12a551

/*
   r   t   b
    L e a e u r
 D   i   m   i
*/
let data80 = slice(res79, 80);
const solve80 = () => {
    let arr = data80.split('');
    let res = ['', '', ''];
    arr.forEach((v, i) => {
        if (i % 4 == 0) res[0] += v;
        if ((i % 4 == 1) || (i % 4 == 3)) res[1] += v;
        if (i % 4 == 2) res[2] += v;
    })
    return res.join('');
}

let res80 = solve80(); // SHA match! cb314856717a527733ffb4e9b46cb04a5ce2d3a675ac9077ab9e1410a1d81171
