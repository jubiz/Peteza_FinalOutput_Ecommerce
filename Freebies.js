var Productimg = document.getElementById("Productimg"); 
var Scrollimg  = document.getElementsByClassName("Scrollimg");

    Scrollimg[0].onclick = function()
    {
        Productimg.src = Scrollimg[0].src;
    }
    Scrollimg[1].onclick = function()
    {
        Productimg.src = Scrollimg[1].src;
    }
    Scrollimg[2].onclick = function()
    {
        Productimg.src = Scrollimg[2].src;
    }



