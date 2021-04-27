<div class="theme">`;
        console.log(data[weekArr[w]][themeArr[x]].theme.length)
        if (data[weekArr[w]][refArr[x]].ref.length != 0) {
                main.innerHTML +=`<h3>${data[weekArr[w]][themeArr[x]].theme}</h3>
                <div class="ref">${data[weekArr[w]][refArr[x]].ref}</div>`
            }
            main.innerHTML += `<footer>
            <p>S Baccas / H Neal</p>
        </footer>
    </div>
</div>`   
            
}
main.innerHTML += 
    `
<div class="monday mb-60">
            <p>Sunday</p>
            <span style='font-size: 1rem; '>Group Overseers</span>
        </div>`