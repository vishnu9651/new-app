// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
//let API="https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}";
let API="https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}"
import { navbar} from "../components/navbar.js"
let n=document.getElementById("navbar")
n.innerHTML=navbar();
//import {searchNews} from "./search.js"
let search=(e)=>{
    if(e.key==="Enter"){
let value=document.getElementById("query").value 
searchNews(value).then((data)=>{
    console.log(data)
    let container=document.getElementById("container")
    container.innerHTML=null;
    append(data.results,container)
})



}
    }
    document.getElementById("query").addEventListener("keydown",search)


let country=document.getElementById("country").children
function cSearch(){
console.log(this.id)
for(let el of country){
    el.addEventListener("click",cSearch)
}
searchNews(value).then((data)=>{
    console.log(data)
    let container=document.getElementById("container")
    container.innerHTML=null;
    append(data.results,container)
})



}


let getdata = async ()=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${id}`)
        let data=await res.json()
        data=data.articles
        console.log(data)
        append(data)
        }catch(err){
            console.log(err)
        }
    
}
getdata()

let append=(data)=>{
    let sidebar=document.getElementById("sidebar").addEventListener("onclick",cSearch())
    data.forEach((articles)=>{
   
   
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=articles.urlToImage
    let p=document.createElement("p")
    p.innerText=articles.content
   
    div.append(img,p)
    navbar.append(div)
    })
}
cSearch