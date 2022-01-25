let headerdiv=document.createElement("div")
let logodiv=document.createElement("div")
let hdiv=document.createElement("div")
logodiv.classList.add("logo")
hdiv.classList.add("title")
headerdiv.classList.add("top-content")
headerdiv.appendChild(logodiv)
headerdiv.appendChild(hdiv)
let strucure=document.getElementsByTagName("body")
document.body.append(headerdiv)

//header div creation

let sidediv=document.createElement("div")
sidediv.classList.add("repos")
let bodydiv=document.createElement("div")
bodydiv.classList.add("body")
let mainbody=document.createElement("div")
mainbody.classList.add("mainbody")
document.body.append(mainbody)
mainbody.appendChild(sidediv)
mainbody.appendChild(bodydiv)
sidediv.innerHTML=`<h5 style="padding:20px;">REPOSITORY</H5>`



//body div elemnets
let searchdiv=document.createElement("div")
searchdiv.classList.add("search-section")
let guitbody=document.createElement("div")
guitbody.classList.add("gitbody")
bodydiv.appendChild(searchdiv)
bodydiv.appendChild(guitbody)

let searchbar=document.createElement("input")
searchbar.setAttribute("type", "text")
searchbar.setAttribute("placeholder", "Search")
searchbar.classList.add("searchme")
searchdiv.appendChild(searchbar)
let searchbtn=document.createElement("button")
searchbtn.innerHTML=`SEARCH`
searchbtn.classList.add("btn")
searchdiv.appendChild(searchbtn)



logodiv.innerHTML=`<svg  xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>`

hdiv.innerHTML=`GITHUB`



searchbtn.addEventListener("click", findprofile)

// this not working... to fixed


// async function findprofile() {
//     let searchname=document.getElementsByClassName("searchme").value
//     console.log(searchname)


//     let url=`https://api.github.com/users/${searchname}`
//     console.log(url)
//    let users;
//    try {
//     const data=await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-type":"applictaion/json"
//         }
//     })
//     users=await data.json()
//     console.log(users)
//      let imgdiv=document.createElement("div")
//      imgdiv.innerHTML=`<img src="${users.avatar_url}" alt="">
//      <h3>${users.login}</h3>
//      <p>folks count:${users.forks_count}</p>
//      `
//      let reopsdiv=document.createElement("div")
//      reopsdiv.innerHTML=`<p>${users.repos_url}</p>` 
//      sidediv.appendChild(reopsdiv)
//      reopsdiv.classList.add("ripdiv")
     
//      guitbody.append(imgdiv )
//    }catch(error){

//    }
// }
// findprofile()


async function findprofile() {
     let url="https://api.github.com/users/octacat"
       let users;
       try {
        const data=await fetch(url, {
            method: "GET",
            headers: {
                "Content-type":"applictaion/json"
            }
        })
        users=await data.json()
        console.log(users)
         let imgdiv=document.createElement("div")
         imgdiv.innerHTML=`<img src="${users.avatar_url}" alt="">
         <h3>${users.login}</h3>
         <p>folks count:${users.forks_count}</p>
         `
         let reopsdiv=document.createElement("div")
         reopsdiv.innerHTML=`<p>${users.repos_url}</p>` 
         sidediv.appendChild(reopsdiv)
         reopsdiv.classList.add("ripdiv")
         
         guitbody.append(imgdiv )
       }catch(error){
            console.log(error)
       }
    }
    findprofile()