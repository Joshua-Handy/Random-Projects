window.addEventListener("load", function()
{
    let numberOfClicks = 0;

    // Get tag refernces
    let clickCounterTag = document.getElementById("clickcounter");
    let clickButtonTag = document.getElementById("clickbutton");

    // Define a function fro updating the click counter
    let clickButtonUpdate = function ()
    {
        numberOfClicks++;
        clickCounterTag.innerText = numberOfClicks;
    };

    // Call the function every time the button has been clicked. 
    clickButtonTag.addEventListener("click", clickButtonUpdate);
});