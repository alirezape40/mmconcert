var total_price = 0;
let parentticket = document.getElementById("ticket1"),
    namber1 = document.querySelectorAll("#nambera1"),
    namber2 = document.querySelectorAll("#nambera2"),
    namber3 = document.querySelectorAll("#nambera3"),
    namber4 = document.querySelectorAll("#nambera4"),
    namber5 = document.querySelectorAll("#nambera5"),
    namber6 = document.querySelectorAll("#nambera6"),
    namber7 = document.querySelectorAll("#nambera7"),
    namber8 = document.querySelectorAll("#namberb1"),
    namber9 = document.querySelectorAll("#namberb2"),
    namber10 = document.querySelectorAll("#namberb3"),
    namber11 = document.querySelectorAll("#namberb4"),
    namber12 = document.querySelectorAll("#namberb5"),
    namber13 = document.querySelectorAll("#namberc1"),
    namber14 = document.querySelectorAll("#namberc2"),
    namber15 = document.querySelectorAll("#namberc3");
for (let i = 0; i < namber1.length; i++) {
    namber1[i].addEventListener("click", function() { ticketconcert1(i + 1, 1, 120000, "A"); });

}
for (let i = 0; i < namber2.length; i++) {
    namber2[i].addEventListener("click", function() { ticketconcert1(i + 1, 2, 120000, "A"); });

}
for (let i = 0; i < namber3.length; i++) {
    namber3[i].addEventListener("click", function() { ticketconcert1(i + 1, 3, 110000, "A"); });

}
for (let i = 0; i < namber4.length; i++) {
    namber4[i].addEventListener("click", function() { ticketconcert1(i + 1, 4, 100000, "A"); });

}
for (let i = 0; i < namber5.length; i++) {
    namber5[i].addEventListener("click", function() { ticketconcert1(i + 1, 5, 100000, "A"); });

}
for (let i = 0; i < namber6.length; i++) {
    namber6[i].addEventListener("click", function() { ticketconcert1(i + 1, 6, 90000, "A"); });

}
for (let i = 0; i < namber7.length; i++) {
    namber7[i].addEventListener("click", function() { ticketconcert1(i + 1, 7, 90000, "A"); });

}
for (let i = 0; i < namber8.length; i++) {
    namber8[i].addEventListener("click", function() { ticketconcert1(i + 1, 1, 75000, "B"); });

}
for (let i = 0; i < namber9.length; i++) {
    namber9[i].addEventListener("click", function() { ticketconcert1(i + 1, 2, 75000, "B"); });

}
for (let i = 0; i < namber10.length; i++) {
    namber10[i].addEventListener("click", function() { ticketconcert1(i + 1, 3, 75000, "B"); });

}
for (let i = 0; i < namber11.length; i++) {
    namber11[i].addEventListener("click", function() { ticketconcert1(i + 1, 4, 75000, "B"); });

}
for (let i = 0; i < namber12.length; i++) {
    namber12[i].addEventListener("click", function() { ticketconcert1(i + 1, 5, 75000, "B"); });

}
for (let i = 0; i < namber13.length; i++) {
    namber13[i].addEventListener("click", function() { ticketconcert1(i + 1, 1, 60000, "C"); });

}
for (let i = 0; i < namber14.length; i++) {
    namber14[i].addEventListener("click", function() { ticketconcert1(i + 1, 2, 45000, "C"); });

}
for (let i = 0; i < namber15.length; i++) {
    namber15[i].addEventListener("click", function() { ticketconcert1(i + 1, 3, 30000, "C"); });

}

function ticketconcert1(num, row, pi, pl) {
    var div = document.createElement("div");
    div.classList.add("div-buy-ticket");
    let ul1 = document.createElement("ul");
    ul1.classList.add("ul1");
    let ul2 = document.createElement("ul");
    ul2.classList.add("ul2");
    let ul3 = document.createElement("ul");
    ul3.classList.add("ul3");
    let li1 = document.createElement("li");
    let li01 = document.createElement("li");
    ul1.appendChild(li01);
    let li2 = document.createElement("li");
    let li02 = document.createElement("li");
    ul2.appendChild(li2);
    ul2.appendChild(li02);
    let li3 = document.createElement("li");
    let li03 = document.createElement("li");
    ul3.appendChild(li3);
    ul3.appendChild(li03);
    li1.classList.add("li1");
    li1.appendChild(document.createTextNode("  شماره صندلی:"));
    li01.classList.add("li01");
    li01.appendChild(document.createTextNode("قسمت"));
    li2.classList.add("li2");
    li2.appendChild(document.createTextNode("ردیف :"));
    li02.classList.add("li02");
    li02.appendChild(document.createTextNode("قیمت : تومان "));
    li3.classList.add("li3");
    li3.appendChild(document.createTextNode("شماره :"));
    li03.classList.add("li03");
    li03.appendChild(document.createTextNode("ساعت :"));
    let span1 = document.createElement("span");
    span1.classList.add("span1");
    span1.appendChild(document.createTextNode(num.toString()));
    let span01 = document.createElement("span");
    span01.classList.add("span01");
    span01.appendChild(document.createTextNode(pl.toString()));
    li1.appendChild(span1);
    li01.appendChild(span01);
    let span2 = document.createElement("span");
    span2.classList.add("span2");
    span2.appendChild(document.createTextNode(row.toString()));
    let span02 = document.createElement("span");
    span02.classList.add("span02");
    span02.appendChild(document.createTextNode(pi.toString()));
    li2.appendChild(span2);
    li02.appendChild(span02);
    let span3 = document.createElement("span");
    span3.classList.add("span3");
    span3.appendChild(document.createTextNode(num.toString()));
    let span03 = document.createElement("span");
    span03.classList.add("span03");
    span03.appendChild(document.createTextNode("23:30"));
    li3.appendChild(span3);
    li03.appendChild(span03);
    var btn1 = document.createElement("button");
    btn1.classList.add("btn-ticket");
    btn1.appendChild(document.createTextNode("لغو"));
    parentticket.appendChild(div);
    ul1.appendChild(li1);
    div.appendChild(ul1);
    div.appendChild(ul2);
    div.appendChild(ul3);
    div.appendChild(btn1);
    btn1.addEventListener("click", function() {
        let popticket = confirm("آیا از حذف بلیط از لیست مطمئن هستید ؟");
        if (popticket == true) {
            deleteListItem(pi, false);
        } else {
            alert("در لیست باقی ماند")
        }
    });

    price1(pi, true);

    function deleteListItem(pi, type_pi) {
        div.classList.add("delete");
        price1(pi, type_pi);
    }
}

function price1(pi, type_pi) {
    let pricech;
    let dd = [pi];
    pricech = dd;
    console.log(pricech);
    let price = document.getElementById("text2");
    if (type_pi == true)
        total_price += parseInt(pricech);
    else total_price -= parseInt(pricech);

    price.innerHTML = total_price.toString();
}