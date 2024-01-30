function addNewskillField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);

    newNode.setAttribute('placeholder',"Enter here");

    let skillOb = document.getElementById("skill");
    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb);

}

function addNewWEField()
{
    // console.log("Adding new field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);

    newNode.setAttribute('placeholder',"Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute('rows',3);

    newNode.setAttribute('placeholder',"Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

// generating cv

function generateCV()
{
//    console.log("generating CV");


let nameField=document.getElementById("nameField").value;


let nameTemplate1=document.getElementById("nameTemplate1");

nameTemplate1.innerHTML = nameField;

//direct

document.getElementById("nameTemplate2").innerHTML = nameField;

//contact

document.getElementById("contactTemplate").innerHTML= document.getElementById("contactField").value;

// address

document.getElementById("addressTemplate").innerHTML= document.getElementById("addressField").value;

document.getElementById("fbTemplate").innerHTML= document.getElementById("fbField").value;

document.getElementById("instaTemplate").innerHTML= document.getElementById("instaField").value;

document.getElementById("linkedTemplate").innerHTML= document.getElementById("linkedField").value;

document.getElementById("objectiveTemplate").innerHTML= document.getElementById("objectiveField").value;

//skills

let skills= document.getElementsByClassName("skillField");

let str2="";

for (let e of skills)
{
  str2 = str2 + `<li> ${e.value} </li>`;
}

document.getElementById("skillTemplate").innerHTML= str2;



// work expierence

let wes= document.getElementsByClassName("weField");

let str="";

for (let e of wes)
{
  str = str + `<li> ${e.value} </li>`;
}

document.getElementById("weTemplate").innerHTML= str;

//aq

let aqs= document.getElementsByClassName("aqField");

let str1='';

for(let e of aqs)
{
  str1+= `<li>${e.value}</li>`;

}

document.getElementById('aqTemplate').innerHTML = str1;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';


}

//print cv

function printCV()
{
  window.print();
}

