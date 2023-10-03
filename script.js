let contextMenu = document.getElementById('contextMenu');

// function contextHandler(event) {
//     contextMenu.style.display = 'block';
// }

// document.addEventListener('keydown' , function () {
//     contextMenu.style.display = 'none';
// })
// document.addEventListener('click' , function () {
//     contextMenu.style.display = 'none';
// })

function contextHandler(event) {
    event.preventDefault();
    if (contextMenu.style.display = 'none') {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
        contextMenu.style.display = 'block';
    } else {
        contextMenu.style.left = event.pageX + 'px'
        contextMenu.style.top = event.pageY + 'px'
    }
}

function hideContextMenu() {
    contextMenu.style.display = 'none';
}

function keyDownHandler(event) {
    if (event.code === 'Space') {
        contextMenu.style.display = 'none';
    }
}

document.body.addEventListener('contextmenu' , contextHandler)
document.body.addEventListener('click' , hideContextMenu)
document.body.addEventListener('keydown' , keyDownHandler)
