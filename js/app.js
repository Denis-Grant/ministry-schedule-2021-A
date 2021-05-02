// INITIALIZE
const month = document.getElementById('month');
const verse = document.getElementById('text');
const weekOf = document.getElementById('week-of');
const main = document.querySelector('main header');
const desktop = document.querySelector('#desktop header');
const topBar = document.querySelector('.topbar');
const monday = document.querySelector('.monday');
const weekArr = ['wk1','wk2','wk3','wk4','wk5',];
const timeArr = ['11am/ 6.30pm','11am/ 6.30pm','11am/ 6.30pm','2pm'];
const dayArr = [2,7,12,17];
const themeArr = [3,8,13,18];
const refArr = [4,9,14,19];
const overseersArr = [5,10,15,20];
const linkArr = [6,11,16,21];
let timeStr;
const weekTime = '11am / 6.30pm';
const weekEnd = '2pm';

let n = [];
// Media Query
let mq = window.matchMedia('(min-width: 920px)');


let heading = [];
const getDates = async ()=>{
    const resp = await fetch('https://spreadsheets.google.com/feeds/cells/1R69Wcg4cru7sX6TQ819mVNffRYZ63pbcO-Atcl4XprY/1/public/full?alt=json')
    const data = await resp.json()
    return data
 }
 
getDates().then(result =>{
    // console.log(result.feed.entry)
    heading = [
        {month: result.feed.entry[1].content.$t},
        {text: result.feed.entry[3].content.$t}
    ];
    // MONTH & TEXT
    month.textContent = heading[0].month.toUpperCase();
    verse.textContent = heading[1].text;

    // ---------------------

    // DATES - The number of date entries dictates the number of weeks looped! 
    let datesObj = result.feed.entry.filter((e)=>{
        return e.gs$cell.row == '3' && e.gs$cell.col > 1
    })
    let weekLen = datesObj.length
    if (weekLen === 4){
        n = [18,19,
            21,22,23,24,
            28,29,30,31,
            34,35,36,37,
            40,
            42,43,
            45,46,47,48,
            51,52,53,54,
            57,58,59,60,
            63,
            65,66,
            68,69,70,71,
            74,75,76,77,
            80,81,82,83,
            86,
            88,89,
            91,92,93,94,
            97,98,99,100,
            103,104,105,106,
            109,
            111,112,
            114,115,116,117,
            120,121,122,123,
            126,127,128,129,
            132
        ]
    } else {
        n = [19,20,
            22,23,24,25,
            29,30,31,32,
            35,36,37,38,
            41,
            43,44,
            46,47,48,49,
            52,53,54,55,
            58,59,60,61,
            64,
            66,67,
            69,70,71,72,
            75,76,77,78,
            81,82,83,84,
            87,
            89,90,
            92,93,94,95,
            98,99,100,101,
            104,105,106,107,
            110,
            112,113,
            115,116,117,118,
            121,122,123,124,
            127,128,129,130,
            133
        ]
    }
    console.log('Len=' + weekLen)
    let dates = []
    datesObj.forEach((e)=>{
        dates.push(e.content.$t)
    })

        // console.log(result.feed.entry)

// const dates = [
//     '05/04','12/04','19/04','26/04'
// ];

// const info = [
//     {topic: 'Bible Studies'},
//     {title: 'Campaign Experiences'}
// ];
// let weekResults = result.feed.entry.filter((e)=>{
//     return e.content.$t.includes('WK 1')
// })
// console.log(weekResults)
weekArr.forEach((e, index)=>{
    let weekResults = result.feed.entry.filter((d)=>{
        return d.content.$t.includes(`WK${index + 1}`)
    })

})

let resultArr = result.feed.entry;
console.log(resultArr[127].content.$t)
const data = {
        
        wk1: [
            {week: resultArr[n[0]].content.$t},
            {topic: resultArr[n[1]].content.$t},

            {day: 'Monday'},
            {theme: resultArr[n[2]].content.$t},
            {ref: resultArr[n[3]].content.$t},
            {overseers: resultArr[n[4]].content.$t},
            {link: resultArr[n[5]].content.$t},

            {day: 'Wednesday'},
            {theme: resultArr[n[6]].content.$t},
            {ref: resultArr[n[7]].content.$t},
            {overseers: resultArr[n[8]].content.$t},
            {link: resultArr[n[9]].content.$t},

            {day: 'Friday'},
            {theme: resultArr[n[10]].content.$t},
            {ref: resultArr[n[11]].content.$t},
            {overseers: resultArr[n[12]].content.$t},
            {link: resultArr[n[13]].content.$t},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: resultArr[n[14]].content.$t},
            {link: ''}
        ],
        wk2:  [
            {week: resultArr[n[15]].content.$t},
            {topic: resultArr[n[16]].content.$t},

            {day: 'Monday'},
            {theme: resultArr[n[17]].content.$t},
            {ref: resultArr[n[18]].content.$t},
            {overseers: resultArr[n[19]].content.$t},
            {link: resultArr[n[20]].content.$t},

            {day: 'Wednesday'},
            {theme: resultArr[n[21]].content.$t},
            {ref: resultArr[n[22]].content.$t},
            {overseers: resultArr[n[23]].content.$t},
            {link: resultArr[n[24]].content.$t},

            {day: 'Friday'},
            {theme: resultArr[n[25]].content.$t},
            {ref: resultArr[n[26]].content.$t},
            {overseers: resultArr[n[27]].content.$t},
            {link: resultArr[n[28]].content.$t},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: resultArr[n[29]].content.$t},
            {link: ''}
        ],
        wk3: [
            {week: resultArr[n[30]].content.$t},
            {topic: resultArr[n[31]].content.$t},

            {day: 'Monday'},
            {theme: resultArr[n[32]].content.$t},
            {ref: resultArr[n[33]].content.$t},
            {overseers: resultArr[n[34]].content.$t},
            {link: resultArr[n[35]].content.$t},

            {day: 'Wednesday'},
            {theme: resultArr[n[36]].content.$t},
            {ref: resultArr[n[37]].content.$t},
            {overseers: resultArr[n[38]].content.$t},
            {link: resultArr[n[39]].content.$t},

            {day: 'Friday'},
            {theme: resultArr[n[40]].content.$t},
            {ref: resultArr[n[41]].content.$t},
            {overseers: resultArr[n[42]].content.$t},
            {link: resultArr[n[43]].content.$t},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: resultArr[n[44]].content.$t},
            {link: ''}
        ],
        wk4:  [
            {week: resultArr[n[45]].content.$t},
            {topic: resultArr[n[46]].content.$t},

            {day: 'Monday'},
            {theme: resultArr[n[47]].content.$t},
            {ref: resultArr[n[48]].content.$t},
            {overseers: resultArr[n[49]].content.$t},
            {link: resultArr[n[50]].content.$t},

            {day: 'Wednesday'},
            {theme: resultArr[n[51]].content.$t},
            {ref: resultArr[n[52]].content.$t},
            {overseers: resultArr[n[53]].content.$t},
            {link: resultArr[n[54]].content.$t},

            {day: 'Friday'},
            {theme: resultArr[n[55]].content.$t},
            {ref: resultArr[n[56]].content.$t},
            {overseers: resultArr[n[57]].content.$t},
            {link: resultArr[n[58]].content.$t},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: resultArr[n[59]].content.$t},
            {link: ''}
        ],
        wk5:  [
            {week: resultArr[n[60]].content.$t},
            {topic: resultArr[n[61]].content.$t},

            {day: 'Monday'},
            {theme: resultArr[n[62]].content.$t},
            {ref: resultArr[n[63]].content.$t},
            {overseers: resultArr[n[64]].content.$t},
            {link: resultArr[n[65]].content.$t},

            {day: 'Wednesday'},
            {theme: resultArr[n[66]].content.$t},
            {ref: resultArr[n[67]].content.$t},
            {overseers: resultArr[n[68]].content.$t},
            {link: resultArr[n[69]].content.$t},

            {day: 'Friday'},
            {theme: resultArr[n[70]].content.$t},
            {ref: resultArr[n[71]].content.$t},
            {overseers: resultArr[n[72]].content.$t},
            {link: resultArr[n[73]].content.$t},

            {day: 'Saturday'},
            {theme: ''},
            {ref: ''},
            {overseers: resultArr[n[74]].content.$t},
            {link: ''}
        ]

    
}
// DEVELOPER MODE - Prevents mobile ver on lg screen
if (mq.matches){
    document.querySelector('#mobile').style.display = 'none'; 
}

localStorage.setItem('dataJanHeading', JSON.stringify(heading));
localStorage.setItem('dataJan', JSON.stringify(data));

/*ASSIGN LOCAL STORAGE VALUES*/
const outputArray = JSON.parse(localStorage.getItem('dataJan'))



// WEEKOF
dates.forEach((week, i)=>{
    weekOf.innerHTML += `<a href="#id-${i}"><span>${week}</span></a>`
});

// MAIN
dates.forEach((weekNumber, w)=>{

main.innerHTML += 
    `<div class="topbar">
    <!-- MAIN -->
    <div class='week'>Week - ${data[weekArr[w]][0].week}</div>
    <h4 class='theme'>${data[weekArr[w]][1].topic}</h4>
    <a href="#"><i class="fa fa-angle-double-up " aria-hidden="true"></i></a>

</div>`;

for (x = 0; x < 4; x++) {
    if (x != 3){
        timeStr = weekTime;
    } else 
    {
        timeStr = weekEnd;
    }
    main.innerHTML += `<div class="wrapper">
        <div class="monday">
            <p>${data[weekArr[w]][dayArr[x]].day}</p>
            <p>${timeStr}</p>
        </div>
        <div class="theme">
            <a href='${data[weekArr[w]][linkArr[x]].link}'><h3>${data[weekArr[w]][themeArr[x]].theme}</h3>
            <div class="ref">${data[weekArr[w]][refArr[x]].ref}</div>
            <a/>
            <footer>
                <p>${data[weekArr[w]][overseersArr[x]].overseers}</p>
            </footer>
        </div>
    </div>`
}

main.innerHTML += `
<div class="monday mb-60">
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><p>Sunday</p></a>
            <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" style='color: white'><span style='font-size: 1rem; display:block'>Group Overseers</span></a>
        </div>`
      
});
// DESKTOP
desktop.innerHTML+= `<div class="grids bg-blue mb-8">
    <span style='background: #fff;'></span>
    <span>Monday<br>11am / 6.30pm</span>
    <span>Tuesday</span>
    <span>Wednesday<br>11am / 6.30pm</span>
    <span>Thursday</span>
    <span>Friday<br>11am / 6.30pm</span>
    <span>Saturday<br>2pm</span>
    <span>Sunday</span>
</div>`
desktop.innerHTML += ` <div class="grids ">
    <span class='bg-green'>Group focus</span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'></span>
    <span class='bg-green'>Workshop</span>
    <span class='bg-green'>Review</span>
    <span class='bg-green'>Group<br>Overseers</span>
</div>`

dates.forEach((weekNumber, w)=>{

    desktop.innerHTML += `<div class="grids mt">
    <div class="bg-grey align-items">
        <span class='bold'>Week ${weekNumber}</span>
        <span style='color: var(--grey-light)'>${data[weekArr[w]][1].topic}</span>
    </div>
    <div class="bg-orange text-16 flex-align ">
        <a href="${data[weekArr[w]][6].link}"><p >${data[weekArr[w]][3].theme}</p></a>
        <a href=""><em>${data[weekArr[w]][4].ref}</em></a>
        <footer>${data[weekArr[w]][5].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange flex-align text-16">
        <a href="${data[weekArr[w]][11].link}"><p >${data[weekArr[w]][8].theme}</p></a>
       <a href="${data[weekArr[w]][11].link}"><em>${data[weekArr[w]][9].ref}</em></a>
        <footer>${data[weekArr[w]][10].overseers}</footer>
    </div>
    <div class="bg-grey-light"></div>
    <div class="bg-orange spacing flex-align flex-align text-16">
        <a href="${data[weekArr[w]][16].link}"><p >${data[weekArr[w]][13].theme}</p></a>
        <a href="${data[weekArr[w]][16].link}"><em>${data[weekArr[w]][14].ref}</em></a>
    <footer>${data[weekArr[w]][15].overseers}</footer>
    </div>
    <div class="bg-orange flex-align">
        <p >${data[weekArr[w]][18].theme}</p>
        <em>${data[weekArr[w]][19].ref}</em>
        <footer>${data[weekArr[w]][20].overseers}</footer>
    </div>
        <a href="https://forms.gle/5yoZA8ZGzx6EW8bA6" class='combined bg-orange'>
          
        </a>`
});
// DYNAMICALLY INSERT ID'S
let allClasses = document.getElementsByClassName('topbar');
let all = [...allClasses]
all.forEach((classy, i)=>{
    classy.id = `id-${i}`
});
document.querySelector('body').style.marginBottom = '200px';



// JS MEDIA QUERIES
window.addEventListener('resize', ()=>{

    if (mq.matches){
        document.querySelector('#mobile').style.display = 'none';
        document.querySelector('#desktop').style.display = 'block';
    } else {
        document.querySelector('#desktop').style.display = 'none';
        document.querySelector('#mobile').style.display = 'block';
    }
});


})

