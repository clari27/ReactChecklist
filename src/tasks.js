

async function getTasks() {
    const data = await fetch('http://localhost:3333/tasks');
  return await data.json();
  }
  export default getTasks();