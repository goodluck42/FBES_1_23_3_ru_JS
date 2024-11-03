document.addEventListener("DOMContentLoaded", () => {
    let divElements = document.getElementsByTagName("div");
    let visibleElements = document.getElementsByClassName("visible");
    let firstVisibleElement = document.querySelector("#cont1 .visible:first-of-type");
    let all = document.querySelectorAll("*");
    let cont1Element = document.getElementById("cont1");
    let cont2Element = document.getElementById("cont2");
    let cont3Element = document.getElementById("cont3");


    // cont1Element.addEventListener("click", (e) => {
    //     console.log("cont1Element");
    // });
    // cont2Element.addEventListener("click", (e) => {
    //     console.log("cont2Element");
    // });
    // cont3Element.addEventListener("click", (e) => {
    //     console.log("cont3Element");
    //     e.stopPropagation();
    // });

    document.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV")
        {
            e.target.classList.add("clicked");
            e.target.setAttribute("clicked", true);

            e.target.style["color"] = "red";
            //e.target.style.color = "red";

            e.target.style["font-size"] = "2rem";
            //e.target.style.fontSize = "2rem";

            // e.target.insertAdjacentHTML("", `${firstVisibleElement}`);

            console.log("this is a div");
        }
        else
        {
            console.log("this is not a div");
        }
    });



});

