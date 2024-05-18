//initialize variables for document elements: grid area and buttons

const gridArea = document.getElementById("sketch-container");
const clearBtn = document.getElementById("reset-btn");
const gridGenerateBtn = document.getElementById("grid-generate");
const rgbbutton = document.getElementById("rgb-grid");
const shadebutton = document.getElementById("shading");


// function to clear the grid
const gridClearer = () => {
    [...document.querySelectorAll("#sketch-box")].forEach(el=>{
        el.style.background = "white";
        el.style.opacity = `1`;
    });
}

// function to clear the grid and set lesser opacity for usage by the shading effect fn
const gridClearerWithLessOpacity = () => {
    [...document.querySelectorAll("#sketch-box")].forEach(el=>{
        el.style.background = "white";
        el.style.opacity = `0.1`;
    });
}

// helper function prompt for taking grid size input from user 
const generatorPrompt = () => {
    sideLength = prompt("Please specify the length of the grid you want");
    if(sideLength <= 100){
        gridGenerator(sideLength)
    }else {
        return;
    } 
}

// function to generate n x n grid; n is input from user
const gridGenerator = (number) => {
    gridArea.innerHTML = "";
    for(let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            gd = document.createElement("div");
            gd.setAttribute("id","sketch-box")
            gd.style.flexBasis = `${100/number}%`
            console.log(gd.style.flexBasis);
            gridArea.appendChild(gd);
        }
    }
    gridClearer();
}

// window load function to generate default 16 x 16 grid
window.addEventListener("load",() => {
    for(let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            gd = document.createElement("div");
            gd.setAttribute("id","sketch-box")
            gridArea.appendChild(gd);

        }
    }
});

// default mouseover (hover) event listener to draw on the grid - refer to MDN docs
gridArea.addEventListener(
    "mouseover",
    (event) => {
        if(event.target.id === "sketch-box"){
            event.target.style.background = "black";
        }
    },
    false,
  );

// function to create the shading effect on the grid - triggered by shadeButton  
const createShadingEffect = () => {
    gridClearerWithLessOpacity();
    gridArea.addEventListener(
        "mouseover",
        (event) => {
            if(event.target.id === "sketch-box"){
                event.target.style.background = "black";
                event.target.style.opacity = +event.target.style.opacity + 0.1;
            }
        },
        false,
      );
}

// function to create the RGB effect on the grid - generates random colors within the 16M gamut - triggered by shadeButton  
const createRGBEffect = () => {
    gridClearer();
    gridArea.addEventListener(
        "mouseover",
        (event) => {
            let r_value = Math.floor(Math.random()*256);
            let g_value = Math.floor(Math.random()*256);
            let b_value = Math.floor(Math.random()*256);
            if(event.target.id === "sketch-box"){
                event.target.style.background = `rgb(${r_value},${g_value},${b_value})`;
            }
        },
        false,
      );
}

// event listeners for all buttons
clearBtn.addEventListener("click",gridClearer);
gridGenerateBtn.addEventListener("click",generatorPrompt);
rgbbutton.addEventListener("click",createRGBEffect);
shadebutton.addEventListener("click",createShadingEffect);
