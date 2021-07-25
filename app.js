var a = document.getElementById("main");
//console.log(a);
//a.setAttribute("onclick","edit(this)");
var b = document.getElementById("display");
function add()
{
    var newElement = document.createElement("P");
    var txt = b.value;
    txt = document.createTextNode(txt);
    newElement.appendChild(txt);
    var newbtn = document.createElement("BUTTON");
    var btntext = "Edit";
    btntext = document.createTextNode(btntext);

    newbtn.setAttribute("onclick","edit(this)");
    newbtn.appendChild(btntext);
    

    newbtn.appendChild(btntext);
    newElement.appendChild(newbtn);

    var delBtn = document.createElement("BUTTON");
    var delBtnTxt = "Del"
    delBtnTxt = document.createTextNode(delBtnTxt);

    delBtn.setAttribute("onclick","del(this)");
    delBtn.appendChild(delBtnTxt);

    newElement.appendChild(delBtn);

    a.appendChild(newElement);
    b.value="";

}

function edit(e)
{
    e.parentNode.firstChild.nodeValue=prompt("enter New value",e.firstChild.nodeValue);
}

function del(e)
{
   e.parentNode.remove();
}
function delAll()
{
    a.innerHTML = "";
}