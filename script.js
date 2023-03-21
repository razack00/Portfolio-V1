console.log("perfect")

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light')
}else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log("clicked", mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'defualt') {
        document.getElementById('theme-style').href = 'defualt.css'
    }
    if(mode == 'white') {
        document.getElementById('theme-style').href = 'white.css'
    }

    localStorage.setItem('theme', mode)
}

