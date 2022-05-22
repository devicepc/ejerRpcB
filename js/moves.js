//const pageWidth  = document.documentElement.scrollWidth;
 
 function moveRam(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 4700);
    }
};

function movePlaca(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0,3500);
    }
};



export {moveRam, movePlaca};
