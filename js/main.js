document.querySelector(".input__field").addEventListener("input", convertInput);
document.querySelector(".output__field").addEventListener("click", selectAll);

function selectAll(event) {
  event.target.select();
}

function convertInput(event) {
  let output = "<dl>\n";
  let json = Papa.parse(event.target.value);
  const m = new Map(json.data);
  for (let [k, v] of m) {
    output += `  <dt>${k}</dt>\n  <dd>${v}</dd>\n`;
  }
  output += "</dl>";
  document.querySelector(".output__field").value = output;
}
