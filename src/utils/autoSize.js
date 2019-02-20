
window.onload=function(){
    var html = document.getElementsByTagName('html')[0];
    var window_width = document.body.clientWidth;;
    const rootPx = Math.ceil((window_width/270)*10);
    html.style.fontSize = rootPx+"px";
    sessionStorage.rootPx = rootPx;
}

window.onresize=function(){
    var html = document.getElementsByTagName('html')[0];
    var window_width = document.body.clientWidth;;
    const rootPx = Math.ceil((window_width/270)*10);
    html.style.fontSize = rootPx+"px";
    sessionStorage.rootPx = rootPx;
}