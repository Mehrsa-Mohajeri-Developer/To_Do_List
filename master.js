function day() {
    let _day = new Date().getDay()
    switch (_day) {
        case 0: document.querySelector('.day').innerHTML = `Today is Sunday`; break;
        case 1: document.querySelector('.day').innerHTML = `Today is Monday`; break;
        case 2: document.querySelector('.day').innerHTML = `Today is Tuesday`; break;
        case 3: document.querySelector('.day').innerHTML = `Today is Wednesday`; break;
        case 4: document.querySelector('.day').innerHTML = `Today is Thursday`; break;
        case 5: document.querySelector('.day').innerHTML = `Today is Friday`; break;
        case 6: document.querySelector('.day').innerHTML = `Today is Saturday`; break;
    }
}
day()


document.getElementById("submit").addEventListener("click", () => {
    let inp = document.getElementById("inp")
    let inpval = inp.value
    if (inpval == "" ||
        inpval == null ||
        inpval == " " ||
        inpval == "\n") {
        alert('Please enter a task!')
    }
    else {
        let _li = document.createElement("li")
        // ***class (li) in input.css*** 
        _li.classList.add("li")
        _li.innerHTML = `<div><input onclick="done(this)" type="checkbox"/><strong class="focus:outline-none focus:ring-2 caret-pink-600 focus:ring-[#50514f]" contenteditable='true' spellcheck="false"> ${inp.value} </strong></div>
        <div><i onclick="del(this)" class="bi bi-trash-fill cursor-pointer"></i><i onclick="edit(this)" class="bi bi-pencil-fill cursor-pointer"></i></div>`
        document.getElementById("all").appendChild(_li)
        inp.value = null
        inp.focus()
    }
})


function del(s) {
    s.parentElement.parentElement.classList.add('del')
    setTimeout(() => {
        s.parentElement.parentElement.remove()
    }, 1000);
}


function edit(s) {
    let pr = s.parentElement.previousElementSibling.children[1]
    pr.focus();
    pr.innerHTML = null
}


let _done = document.getElementById('done')
function done(s) {
    while (_done.firstChild) {
        _done.removeChild(_done.firstChild);
    }
    let _all_li = document.querySelectorAll('#all>li')
    _all_li.forEach((val) => {
        let firstChildren = val.children
        let childrenChildren = firstChildren[0].children
        if (childrenChildren[0].checked == true) {
            let v = childrenChildren[1].innerHTML
            let li_done = document.createElement("li")
            li_done.classList.add("li")
            li_done.innerHTML = `
                <div>- <strong>${v}</strong></div>
                `
            _done.appendChild(li_done)
            pending()
        }
    })
}

let _pending = document.getElementById('pending')
function pending() {
    while (_pending.firstChild) {
        _pending.removeChild(_pending.firstChild);
    }

    let _all_li = document.querySelectorAll('#all>li')
    _all_li.forEach((val) => {
        console.log(val)
        let firstChildren = val.children
        let childrenChildren = firstChildren[0].children
        console.log(childrenChildren[0].checked)
        if (childrenChildren[0].checked != true) {
            let v = childrenChildren[1].innerHTML
            console.log(v)
            let li_done = document.createElement("li")
            li_done.classList.add("li")
            li_done.innerHTML = `
            <div>- <strong>${v}</strong></div>
                `
            _pending.appendChild(li_done)
        }
    })
}


let _all = document.getElementById('all')

document.getElementsByClassName("btn1")[0].addEventListener('click', (e) => {
    _all.style.opacity = 1
    _done.style.opacity = 0
    _pending.style.opacity = 0
    _pending.style.zIndex = 0
    _done.style.zIndex = 0
    _all.style.zIndex = '30'
})


document.getElementsByClassName("btn2")[0].addEventListener('click', (e) => {
    pending()
    _all.style.opacity = 0
    _done.style.opacity = 0
    _pending.style.opacity = 1
    _all.style.zIndex = 0
    _done.style.zIndex = 0
    _pending.style.zIndex = '30'
})

document.getElementsByClassName("btn3")[0].addEventListener('click', (e) => {
    done()
    _all.style.opacity = 0
    _pending.style.opacity = 0
    _done.style.opacity = 1
    _all.style.zIndex = 0
    _done.style.zIndex = '30'
    _pending.style.zIndex = 0

})