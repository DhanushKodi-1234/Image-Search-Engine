const accesskey="I_GWiP5PKCqTPuaLmS2q9oibYr-CZZLf8s5igTfSkIs";

const f=document.getElementById("form");
const box=document.getElementById("box");
const res=document.getElementById("result");
const more=document.getElementById("scroll");

let keyword="";
let page=1;
async function searchImg(){
    keyword=box.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword} &client_id=${accesskey}&per_page=12`;

    const response=await fetch(url);
    const data= await response.json();

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image);
        res.appendChild(imagelink);
    })

    more.style.display="block"
   // console.log(data);
}
f.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})

more.addEventListener("click",()=>{
    page++;
    searchImg();
})