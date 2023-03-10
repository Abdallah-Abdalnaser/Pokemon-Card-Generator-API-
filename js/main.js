let hp = document.querySelector(".contaner .card .Hp span");
let img = document.querySelector(".contaner .card .image img");
let Name = document.querySelector(".contaner .card .name");
let Attack = document.querySelectorAll(".contaner .card ul li span:first-of-type")[0];
let Defence = document.querySelectorAll(".contaner .card ul li span:first-of-type")[1];
let speed = document.querySelectorAll(".contaner .card ul li span:first-of-type")[2];
let url = "https://pokeapi.co/api/v2/pokemon/";
let btn = document.querySelector(".contaner > span");

const typeColor = {
  bug:"#26de1",
  dragon:"#ffeaa7",
  electric:"#fed330",
  fairy:"#ff0069",
  fighting:"#30336b",
  fire:"#f0932b",
  flying:"#81ecec",
  grass:"#00b894",
  ground:"#EFB549",
  ghost:"#a55eea",
  ice:"#74b9ff",
  normal:"#95afc0",
  poison:"#6c5ce7",
  psychic:"#a29bfe",
  rock:"#2d3436",
  water:"#0190FF",
}

img.addEventListener("load",(e)=>{
  document.querySelector(".contaner .load").style.display="none";
})


function generate () {
  document.querySelector(".contaner .load").style.display="flex";
  let id = Math.floor(Math.random()*150);
  let ApiUrl = url + id;
  fetch(ApiUrl).then((res)=>{
    return res.json();
  }).then((data)=>{
    getData(data);
  })
}

function createType (type) {
  document.querySelector(".contaner .card .type").innerHTML="";
  type.forEach(element => {
    let span = document.createElement("span");
    span.textContent=element.type.name;
    document.querySelector(".contaner .card .type").append(span);
  });
}

function colorThem (color) {
  document.querySelector(".contaner .card .ball").style.background=color;
  document.querySelectorAll(".contaner .card .type span").forEach(e=>{
    e.style.backgroundColor= color;
  })
  document.querySelector(".contaner .load").style.backgroundColor=color;
}

function getData(data) {
  img.addEventListener("load",(e)=>{
    document.querySelector(".contaner .load").style.display="none";
  })
  let Hp = data.stats[0].base_stat;
  hp.textContent=Hp;
  let imgSrc = data.sprites.other.dream_world.front_default;
  img.setAttribute("src",imgSrc);
  let N = data.name;
  Name.textContent=N;
  let A = data.stats[1].base_stat;
  Attack.textContent=A;
  let D = data.stats[2].base_stat;
  Defence.textContent=D;
  let S = data.stats[5].base_stat;
  speed.textContent=S;
  createType(data.types);
  colorThem(typeColor[data.types[0].type.name]);
}
btn.addEventListener("click",generate);
window.addEventListener("load",generate);