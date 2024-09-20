//your JS code here. If required.
let container = document.querySelector(".container")

let arr = [
    { link: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Explore the world", id: "panel-1" },
    { link: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Wild Forest", id: "panel-2" },
    { link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80", text: "City on Winter", id: "panel-3" },
    { link: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", text: "Mountain Cloud", id: "panel-4" },
    { link: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Sunny Beach", id: "panel-5" }
]


// let exPand = (e) => {
//     e.preventDefault()
//     console.log("done");
// }


arr.forEach(t => {
    // console.log(t);
    let card = document.createElement("img")
    card.className = `panel`
    card.id = `${t.id}`
    card.src = `${t.link}`
    card.addEventListener("click", exPand); 
    container.append(card)
});


let cards = document.querySelectorAll("img");
cards[0].className = "active";


function exPand(e) {
    let target = e.target;
    // console.log(target);
    
    cards.forEach(t => {
        // console.log(t.id);
        if (t.id == target.id) {
            t.className = "active"
        } else if(t.id !== target.id){
            t.className = "panel"
        }
    });
}