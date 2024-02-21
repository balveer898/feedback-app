let form=document.querySelector("form");
let select=document.querySelector("select");
let textarea=document.querySelector("textarea");
let ul=document.querySelector("ul");
const saveFeedback=(e)=>{
    e.preventDefault();
    let li=document.createElement("li");
    li.className="list-group-item"
    // li.style="border 1px solid black";
    let h1=document.createElement("h1");
    let p=document.createElement("p");
    let button=document.createElement("button");
    button.className="delbtn";
    

    h1.innerText="Rating:" +" "+select.value;
    p.innerText="Review:"+"  "+textarea.value;
    button.innerText="CLEAR";
    li.appendChild(h1);
    h1.style.fontSize="14px"
    li.appendChild(p);
    li.appendChild(button);
    

    ul.appendChild(li);
    form.reset();
};
form.addEventListener("submit",saveFeedback);

const deleteFeedback=(e)=>{
    if(e.target.className.includes("delbtn")){
        let li=e.target.parentElement;
        ul.removeChild(li);
    }

};
ul.addEventListener("click",deleteFeedback);