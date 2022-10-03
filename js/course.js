document.getElementById("layer2").style.display = 'none';
document.getElementById("layer3").style.display = 'none';
document.getElementById("layer4").style.display = 'none';
page_num = 1;
document.getElementsByClassName("btn_1")[0].style.display = 'none';
function page_plus(){
    if(page_num == 4)
        return;
    else if(page_num == 3)
        document.getElementsByClassName("btn_2")[0].style.display = 'none';
    document.getElementsByClassName("btn_1")[0].style.display = 'inline-block';
    str = "layer"+page_num;
    document.getElementById(str).style.display = 'none';
    page_num+=1;
    str = "layer"+page_num;
    document.getElementById(str).style.display = 'inline-block';
}

function page_mius(){
    if(page_num == 1){
        return;
    }
    else if(page_num == 2)
        document.getElementsByClassName("btn_1")[0].style.display = 'none';
    document.getElementsByClassName("btn_2")[0].style.display = 'inline-block';
    str = "layer"+page_num;
    document.getElementById(str).style.display = 'none';
    page_num-=1;
    str = "layer"+page_num;
    document.getElementById(str).style.display = 'inline-block';
}