const body = document.getElementsByTagName("body")[0];
const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", () => {
  let container = document.querySelector(".container");
  if (container) {
    container.remove();
  } else {
    container = document.createElement("div");
    container.className = "container";
    body.appendChild(container);

    const classes = ["blockfirst", "blocksecond", "blockthird", "blockfourth"];

    classes.forEach((className) => {
      const block = document.createElement("div");
      block.className = `block ${className}`;
      container.appendChild(block);
    });
  }
});
