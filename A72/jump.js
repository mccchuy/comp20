function jump(event) {

    event.preventDefault();
    with (document.jumpForm) {
      
        backNForth();

    }
}

function backNForth() {
    if (leftTxt.value != "") {
        currVal = leftTxt.value;
        middle.setAttribute("value", "< jump");
        rightTxt.setAttribute("value", currVal);
        leftTxt.removeAttribute("value");
    } else {
        currVal = rightTxt.value;
        middle.setAttribute("value", "jump >");
        leftTxt.setAttribute("value", currVal);
        rightTxt.removeAttribute("value");
    }
}

