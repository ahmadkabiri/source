
const loadExtenalFile = cdn => {
    return new Promise((resolve, reject) => {
        const linkTag =  document.createElement("link") ;

        linkTag.rel = "stylesheet"
        linkTag.href = cdn 

        linkTag.onload = () =>resolve("File Loaded SuccessFully")
        linkTag.onerror = () =>reject(new Error("File Not Loaded"))

        document.head.append(linkTag)

    })
}


loadExtenalFile('css/style.css')
.then((response)=>{
    console.log(response)
    document.body.insertAdjacentHTML('afterbegin',`<h1>${response}</h1>`)
})
.catch(err => {
    console.log(err);
})













