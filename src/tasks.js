async function getTasks() {
  const data = await fetch("http://localhost:3333/tasks");
  return await data.json();
}
export default getTasks();

async export function setItem(item) {
  return fetch("http://localhost:3333/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  }).then((data) => data.json());
}
