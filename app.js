const hrs=document.querySelector("#hrs");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");




setInterval(()=>{
    const today=new Date();
    hrs.innerHTML=(today.getHours() < 10 ? "0" : "") + today.getHours();
    min.innerHTML=(today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    sec.innerHTML=(today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
},1000)

