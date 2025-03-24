let text = document.getElementById("yappin");
let temp = document.getElementById("a");


let result = document.getElementById("result");
let increase = document.querySelector(".clickyes");
let surat = document.getElementById("note");

let stockword = [{text:"Halo!"},{text:"LOPYU"}];

text.textContent="Do You Love Me ???";

let gif = document.getElementById("gif1");
let gifsad = document.getElementById("gif2");
let gifsad2 = document.getElementById("gif3");
let gifsad3 = document.getElementById("gif4");
let gifhapy = document.getElementById("hepi");

let index=0;

let size=16;

let wronganswer = [{text:"Salah Jawab,pilih yang benar :)"},{text:"SALAH WOYYYYYYYY"},{text:"ERROR,COBA JAWAB LAGIII"},{text:"ayolah,yang bener jawabnyaaa"},{text:"Tolong lah,jawab yang benerr"},{text:"BUKAN ITU JAWABANNYAA"},{text:"Kali ini pasti bener!!!"}];

function no(){
    console.log("test");
    size+=100;
    increase.style.fontSize = size + "px";
    text.textContent=wronganswer[index].text;
    gif.classList.remove("gif");
    gif.classList.add("hidden")
    gifsad.classList.remove("hidden");
    gifsad.classList.add("gif");
    if(index==3){
        gifsad.classList.remove("gif");
        gifsad.classList.add("hidden")
        gifsad2.classList.remove("hidden");
        gifsad2.classList.add("gif");
    }else if(index==4){
        gifsad.classList.remove("gif");
        gifsad.classList.add("hidden")
            gifsad2.classList.remove("gif");
            gifsad2.classList.add("hidden")
            gifsad3.classList.remove("hidden");
            gifsad3.classList.add("gif");
    }
    index++;
}

function yes(){
    gifhapy.classList.remove("hidden");
    gifhapy.classList.add("gif");
    text.textContent=stockword[1].text;
    temp.classList.remove("a");
    temp.classList.add("hidden");
    result.textContent = "Nah, aku tau pasti kamu bakal pilih yes ;)";
    result.classList.remove("hidden");
    result.classList.add("textres");
    surat.classList.remove("hidden");
    surat.classList.add("textres")
}

let pp = document.getElementById("kertas");
let isi = document.getElementById("isisurat");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

function letter(){
    gifhapy.classList.remove("gif");
    gifhapy.classList.add("hidden");
    pp.classList.remove("hidden");
    pp.classList.add("kertas");
    result.classList.remove("textres");
    result.classList.add("hidden");
    btn1.classList.add("hidden")
    btn2.classList.remove("hidden");
}

let trans = document.getElementById("trans");
let btn3 = document.getElementById("btn3");

function kisah(){
    pp.classList.remove("kertas");
    pp.classList.add("hidden");
    result.classList.add("hidden");
    btn1.classList.add("hidden")
    btn2.classList.add("hidden");
    trans.classList.add("textres")
    trans.textContent = "Kisah Cinta Kita Mengingatkan ku Akan satu lagu, yang sudah pasti kamu tau"
    btn3.classList.remove("hidden");
}


