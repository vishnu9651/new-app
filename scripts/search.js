// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar} from "../components/navbar.js"

let searchNews=async(query)=>{
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let data=await res.json()
    console.log(data)
    return data
    }catch(err){
        console.log(err)
    }
}
export {searchNews}