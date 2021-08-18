var bb = document.getElementById("bb");
bb.addEventListener("click", function(){
    alert("叫你按就按啊？");
})

var b = document.getElementById("b");
b.addEventListener("click", function(){
    this.innerText = "按屁啊！";
    this.style.color = "red";
})

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "p.jpg";
})
img.addEventListener("mouseout", function(){
    this.src = "Untitled.jpg";
})



// event listener (事件監聽器)
// 可以偵測在網頁上發生的任何事件
// 加上event listener的第二種方式是全部寫在js檔裡

// https://www.w3schools.com/jsref/dom_obj_event.asp 有更多事件，可以玩玩看
// https://www.w3schools.com/js/js_htmldom_document.asp 有其他get element的方式，也可以看看