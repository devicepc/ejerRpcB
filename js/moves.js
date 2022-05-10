 function moveRam(){
    const pageWidth  = document.documentElement.scrollWidth;
    if(pageWidth <= 480){
        window.scrollTo(0, 5000);
    }
};

function movePlaca(){
    const pageWidth  = document.documentElement.scrollWidth;
    
    if(pageWidth <= 480){
        window.scrollTo(0,3500);
    }
};



export {moveRam, movePlaca};
