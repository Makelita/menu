let takeTitle = document.querySelector("#titleRight")
let cleardish = document.querySelector("#dish")
let clearprice= document.querySelector("#price")
let cleardescrip = document.querySelector("#description")
let clearremove= document.querySelector("#removeInput")
let dishdeleted = document.querySelectorAll("dishRight")
let removedlist= document.querySelector("#removedlist")
let toPrint = document.querySelector(".print")



class Storage {
    constructor(){ 
        this.counter = 1
    }


    title(e){
        takeTitle.innerText = e.target.value
        e.target.value = ""
    }

    creatediv(caprured,counter){

        
        let dishdiv = document.createElement("div")
        dishdiv.setAttribute("class", "dishRight")
        dishdiv.setAttribute("id", `div${this.counter}`)
        this.counter++
        let currentDiv = document.querySelector(".rightSide")
        currentDiv.appendChild(dishdiv)
        this.createText(caprured,dishdiv )
    }



    createText(caprured, dishdiv){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
    
        let dishText = document.createTextNode(caprured["dish"])
        div1.setAttribute("id", "rightDishText")
    

        let descripText = document.createTextNode(caprured["description"])
        let priceText = document.createTextNode(caprured["price"])
       
        div1.appendChild(dishText)
        div2.appendChild(descripText)
        div3.appendChild(priceText)

        let div4 = document.createElement("div")
        div4.appendChild(div1)
        div4.appendChild(div2)
        
        dishdiv.appendChild(div4)
        dishdiv.appendChild(div3)

    }

    delete(removeBtn){
        removeBtn = removeBtn.split(",")
        console.log(removeBtn)
        for(let item of removeBtn){
            let removing = document.querySelector(`#div${item}`)
            console.log(removing)
            removing.remove()
        } 
        
    }



    printing(rightSide){
        print()

    }





}



let capture = {}
let removeBtn = ""

let createmenu = new Storage

document.addEventListener("change", function(e){
    
   if (e.target.id === "title"){
    //  capture["title"] = e.target.value
    //  console.log(capture)
     createmenu.title(e) 
    }


    if (e.target.id === "dish"){
        capture["dish"] = e.target.value
        console.log(capture)
        // createmenu.dish(e)
    }


    if (e.target.id === "price"){
        capture["price"] = e.target.value
        console.log(capture)
        // createmenu.price(e)
    }


    if (e.target.id === "description"){
        capture["description"] = e.target.value
        console.log(capture)

        // createmenu.discrib(e)
    }


    if (e.target.id === "removeInput"){
        removeBtn += e.target.value

    }


})



document.addEventListener("click", function(e){
    if( e.target.id === "addBtn"){
        if ((Object.keys(capture).length) === 3 ){
            createmenu.creatediv(capture)
            
        }

        cleardish.value = ""
        clearprice.value = ""
        cleardescrip.value = ""
        
    
    }


    if(e.target.id === "removeBtn"){
        
        createmenu.delete(removeBtn)
        for(let item of removeBtn){
            removedlist.append(` ${item}`)
        }
        removeBtn = ""
        clearremove.value = ""
        
        
    }

    
    
})



 