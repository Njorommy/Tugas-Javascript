const items = [
    { name: "Item 1", description: "This is item 1" },
    { name: "Item 2", description: "This is item 2" },
    { name: "Item 3", description: "This is item 3" },
    { name: "Item 4", description: "This is item 4" },
    { name: "Item 5", description: "This is item 5" }
];
const container = document.querySelector("#container");

for (const item of items) {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");

    const nameElement = document.createElement("h2");
    nameElement.textContent = item.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.description;

    itemElement.appendChild(nameElement);
    itemElement.appendChild(descriptionElement);

    container.appendChild(itemElement);
}