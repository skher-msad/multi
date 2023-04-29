//get element of document page

let divsteps = Array.from( document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside > div"))


//get buttons translate for pages
,buttonstranslate = Array.from(document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-footer > button"))

//get the sectioin of right page
,multiaside = document.querySelector(".main-index .index-multi-step > .multi-step-aside")

//get task of thanks massage if every things to true
,massagethank = document.querySelector(".main-index .index-multi-step > .multi-thank")

// the page of first
,step_1_input = Array.from(document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-1 .multi-section-articale > div > input"))

,divstepscont = divsteps.length// number of pages

//page of select plan(second page)
let divplan = document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-2 .multi-section-2-articale > div")

,divplanstep2 = document.querySelector(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-2 .footer-section-2 > div")

,divplanspan = document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-2 .multi-section-2-articale > div > div span:first-of-type span:first-of-type > span")

,freemonth = document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-2 .multi-section-2-articale > div > div > span:first-of-type > span:last-of-type")

//page of pick(therid page)
let pickinput = Array.from(document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-3 .multi-section-3-articale > div > span:nth-of-type(1) > input"))

,pickcheck = []

//last page of finshing
,finshdiv_2 = document.querySelector(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-4 .multi-section-4-articale > div:nth-of-type(2)")

,finshdiv_2arr = Array.from(finshdiv_2.children)

,finshup = document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-4 .multi-section-4-articale > div")

,stepnumber = document.querySelectorAll(".main-index .index-multi-step .multi-step-section > div > span:first-of-type")


,mo_yr = ""//monthly or yearly

,selectplan = ""//selected of plan page

,contsteps = 0// number of current page

,telaspanfinish =""// spending of yearly or monthly

,titlvalue_of_2 = ""

,totalvalue = []//menmum of spending

,arrdivspan2 = [...divplanstep2.children]


divplan.forEach((p) =>{
    p.addEventListener("click", (e)=>{
        //check if current div has active
        divplan.forEach((s) => s.classList.remove("active"))
        e.target.classList.add("active")
    })
})
console.log(arrdivspan2)

arrdivspan2.forEach((e) =>{
    e.addEventListener("click", (m)=>{
        //arrdivspan2.forEach((b) => b.classList.remove("active"))
        arrdivspan2.forEach((b) => b.classList.toggle("active"))
        console.log(e.title)
        mo_yr = e.title
        divplanspan.forEach((t) => t.innerHTML = mo_yr)
        freemonth.forEach((f) => f.classList.toggle("active"))
    })
   
   
    
})
// divplanstep2.onclick = () =>{
//     divplanstep2.classList.toggle("active")
//     if(divplanstep2.classList.contains("active")){
//         mo_yr = divplanstep2.nextElementSibling.title
//     }else{mo_yr = divplanstep2.previousElementSibling.title}
//     divplanspan.forEach((t) => t.innerHTML = mo_yr)
// }
// divplanstep2.forEach((s) =>{
//     s.addEventListener("click", (e)=>{
//         // check if input.radio.checked
//         mo_yr = e.target.title
//         // add currenttarget.id to main div
//         divplanspan.forEach((t) => t.innerHTML = mo_yr)
//     })
// })

// remove the back button if page is first
if(contsteps == 0){
    buttonstranslate[1].style.cssText = "display:none;"
}


buttonstranslate.forEach((b) =>{// steps of page
    b.addEventListener("click", (s) =>{
        let testemail = /\w+\d*(\@)(gmail).com/ig// true email

        step_1_input.forEach((inp)=>{//first page
            //check if input error
            if(inp.value == ""){
                inp.previousElementSibling.lastElementChild.classList.add("error")
                inp.classList.add("error")
            }else{ inp.previousElementSibling.lastElementChild.classList.remove("error")
                    inp.classList.remove("error")}

             //check if email is true email       
            if(inp.type === "email"){
                let inputvalue = testemail.test(inp.value)
            if(inputvalue === false){inp.previousElementSibling.lastElementChild.classList.add("error")
                inp.classList.add("error")}}})

                //check if input have class(error)
            if(step_1_input[0].classList.contains("error") || step_1_input[1].classList.contains("error")
            || step_1_input[2].classList.contains("error")){
                return true
            }else{b.title == 1? contsteps++ : contsteps--}

            //check if the page is last step
        if(contsteps == divstepscont){
            multiaside.classList.add("thank")
            massagethank.classList.add("thank")}
            // stop click of buttons if contsteps >= divstepscont || contsteps <= divstepscont
        contsteps <= 0 ?  contsteps = 0 : contsteps >= divstepscont? contsteps = divstepscont - 1:""

        //remove button of go back if the page is first
    if(contsteps == 0){
        buttonstranslate[1].style.cssText = "display:none;"
    }
        // add the button of go back if the page is not first
    if(contsteps == 1){
        buttonstranslate[1].style.cssText = "display:block;"
    }

    // remove all divsteps
    divsteps.forEach((d) =>d.style.cssText = "display:none;")
    // appare the page that index == contssteps
    divsteps[contsteps].style.cssText = "display:block;"

    //add active for steps of section-steps
        stepnumber.forEach((s) =>{ s.classList.remove("active")
        s.title == contsteps + 1? s.classList.add("active"):""})

        // change monthely or yearly if divplanstep2.checked
    arrdivspan2.forEach((s) =>s.classList.contains("active") ? "": mo_yr = s.title)
console.log(mo_yr)
    pickcheck = []//impety array and add new value

    telaspanfinish = []//impety array and add new value

    pickinput.forEach((inp) =>{// check if the input.check is checked
        if(inp.checked){
            pickcheck = pickcheck.concat(inp.id)
            telaspanfinish = telaspanfinish.concat(inp.parentElement.parentElement.lastElementChild.title)}
        inp.parentElement.parentElement.lastElementChild.firstElementChild.innerHTML = mo_yr
    })

    finshdiv_2arr = []// impety array and add new value

    //remove current element and add new elements 
    document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-4 .multi-section-4-articale > div:nth-of-type(2) > span").forEach((r) =>r.remove())


    totalvalue = []// impety array and add new value

    //check if divplan active
    divplan.forEach((e) =>{
        if(e.classList.contains("active")){
            titlvalue_of_2 = e.firstElementChild.children[1].children[1].title
            totalvalue = totalvalue.concat(e.firstElementChild.children[1].children[1].title.match(/\d+/g))}
    })
    
    selectplan =[]
    //checked if the divplan is activ
    divplan.forEach((p) =>p.classList.contains("active")?selectplan = selectplan.concat(p.title):"")

    // creat elements of last page
    for(let v = 0 ; v < pickcheck.length; v++){
        let finshspan = document.createElement("span")//main span
        finshspan.title = telaspanfinish[v]

        let prafinshspan = document.createElement("p")

        let spfinshspan = document.createElement("span")

        prafinshspan.textContent = pickcheck[v]

        spfinshspan.innerHTML = `${telaspanfinish[v]}
        <span>${mo_yr}</span>`

        finshspan.appendChild(prafinshspan)//add pragraph to main span

        finshspan.appendChild(spfinshspan)//add last span to main span
    
        finshdiv_2.appendChild(finshspan)//add main span to main div
    }

    // change span of select span in a new value
    mo_yr === "mo"?finshup[0].firstElementChild.firstElementChild.firstElementChild.innerHTML = `${selectplan} (Monthly)`
    :finshup[0].firstElementChild.firstElementChild.firstElementChild.innerHTML = `${selectplan}(Yearly)`
    // change the finshuo spending 
    finshup[0].firstElementChild.lastElementChild.innerHTML = `${titlvalue_of_2}${mo_yr}`

    // value of spending
    document.querySelectorAll(".main-index .index-multi-step > .multi-step-aside .multi-aside-section-4 .multi-section-4-articale > div:nth-of-type(2) > span").forEach((n)=> totalvalue = totalvalue.concat(n.title.match(/\d+/g)))

    // total of spendings
    totalvalue = totalvalue.reduce((d,n) =>parseInt(d) + parseInt(n))

    // add new falue to div of total
    mo_yr === "mo"?finshup[2].firstElementChild.firstElementChild.innerHTML = "Total (Der monthly)"
    :finshup[2].firstElementChild.firstElementChild.innerHTML = "Total (Der yearly)"

    //last span of total
    finshup[2].firstElementChild.lastElementChild.innerHTML = `${totalvalue} <span>${mo_yr}</span>`
    return false
    })
})