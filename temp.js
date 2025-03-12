function parallax(position) {
    var windowHeight = window.innerHeight;
    var elements = document.getElementsByClassName('parallax');
    for (let i=0;i<elements.length;i++) {
        var rect = elements[i].getBoundingClientRect();
        var compensation = 0;
        var offset = 1;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            compensation = 0;
            if ((rect.top + position) < windowHeight) {
                compensation += windowHeight - rect.top - position;
            }
            //offset = (rect.bottom/((rect.bottom + compensation) - (rect.top + compensation) + windowHeight))*100;
            offset = 1;
            //console.log(offset);
            elements[i].setAttribute('style',"object-position: 0 " + offset + "%;");
        }

        
        
    }
}

function scrollToCenterImage(imageID) {
    let rect = document.getElementById(imageID).getBoundingClientRect();
    let windowHeight = window.innerHeight;
    window.scrollTo(0,(rect.top + rect.bottom + 2*window.scrollY - windowHeight)/2);
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);
    parallax(window.scrollY);
})