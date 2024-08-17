"use strict";

const MediaPlayer = () => {
    return React.createElement("div", {className: 'header bg-white' }, React.createElement(MediaPlayer));
}

const MediaPlayerHeader = () => {

    return React.createElement("header", {className: 'header bg-white' })
}


window.addEventListener("DOMContentLoaded", function() {
    const domContainer = document.getElementById("bigDev");
    if(domContainer !== null && domContainer !== undefined){
        const root = ReactDOM.createRoot(domContainer);
        //root.render(React.createElement(MediaPlayer));
    }
    
}, false);

