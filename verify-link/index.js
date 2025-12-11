const input = document.getElementById("campoLink");
const button = document.getElementById("verificar");
const result = document.getElementById("resultado");
const API_URL = "http://localhost:3000/verify";

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const link = input.value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ link }),
  });
  const json = await response.json();
  result.innerHTML = json.message;
});
