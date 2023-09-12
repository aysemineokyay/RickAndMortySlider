const characterList=document.querySelector(".splide__list");
async function getData()
{
    await fetch("https://rickandmortyapi.com/api/character")
    .then((res)=>res.json())
    .then((json)=>{
    
        const ch_Html=(json.results).map((ch)=>ch.image); 
        const status=(json.results).map((ch)=>ch.status); 
        const p_Html=(json.results).map((ch)=>`<span>${ch.name}</span><span class="status"><span class="colorSelect"></span> ${ch.status} - ${ch.species} </span>`); 
        for(let i=0;i<json.results.length;i++){
            let li=document.createElement("li");
            let img=document.createElement("img");
            let p=document.createElement("p");
            li.className="splide__slide";
            img.src=`${ch_Html[i]}`;
            p.innerHTML=p_Html[i];   
            let span=p.querySelector(".colorSelect"); 
            if(status[i]==="Alive"){
               span.classList.add("square_green");}
               else if(status[i]==="Dead"){
                   span.classList.add("square_red");}
                   else{
                   span.classList.add("square_white")};
            li.append(img,p);
            characterList.append(li); 
            }})       
        new Splide('.splide', {
            type   : 'loop',
            perPage: 3,
        } ).mount();
    }
        
document.addEventListener( 'DOMContentLoaded', getData);
