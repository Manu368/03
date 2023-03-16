let imageFirst = document.getElementById("image01");


let imag = document.createElement("img");
imag.classList.add("img01");
imag.src = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/03.image_pcxsxo.webp";
imageFirst.appendChild(imag);



let productlist = [{
       a:  "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676799627/03.image_pcxsxo.webp",
       b: 1
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678966572/01st_xg2iqh.webp",
        b: 2
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678966572/02nd_uv9aqc.webp", 
        b: 3
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678966572/03rd_xsxypd.webp", 
        b: 4
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678966572/04th_lys20k.webp", 
        b: 5
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678966572/05th_lqnnnm.webp", 
        b: 6
    },

    
   
   
];



let textElement = document.getElementById("text01")



let headingElement = document.createElement("h1");
headingElement.classList.add("heading01");
headingElement.textContent = "Men Black Action Parkview Lifestyle Shoes";
textElement.appendChild(headingElement);


let headingElemnt01 = document.createElement("h4");
headingElemnt01.classList.add("heading02");
headingElemnt01.textContent = "Hush Puppies";
textElement.appendChild(headingElemnt01);


let headingElement02 = document.createElement("h3");
headingElement02.classList.add("heading03");
headingElement02.textContent = "Price: Rs";
textElement.appendChild(headingElement02);


let spanElement = document.createElement("span");
spanElement.classList.add("span01");
spanElement.textContent = "6999";
headingElement02.appendChild(spanElement);


let headingElement04 = document.createElement("h3");
headingElement04.classList.add("heading03");
headingElement04.textContent = "Description";
textElement.appendChild(headingElement04);


let paraElement = document.createElement("p");
paraElement.classList.add("para01");
paraElement.textContent = "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome";
textElement.appendChild(paraElement);


let headingElement05 = document.createElement("h3");
headingElement05.classList.add("heading03");
headingElement05.textContent = "Product Preview";
textElement.appendChild(headingElement05);


let Element001 = document.getElementById("java01");




function sachin(kohli){
let smallimg = document.createElement("img");
smallimg.classList.add("small01");
smallimg.src = kohli.a;
smallimg.id = kohli.b;
textElement.appendChild(smallimg)


smallimg.onclick = function(){
    imag.src = smallimg.src;
    smallimg.style.border = "3px solid #009688"
}
smallimg.onmouseout = function(){
    imag.src = smallimg.src;
    smallimg.style.border = "";
}

}



for(let kohli of productlist){
    sachin(kohli)
}



let btnElement = document.createElement("button");
btnElement.classList.add("button01");
btnElement.textContent = "Add to Cart";
textElement.appendChild(btnElement);