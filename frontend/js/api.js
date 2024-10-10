async function api(endPoint) {
  try {
    const resultado = await fetch(`http://localhost:3000/${endPoint}`);
    const dados = resultado.json();
    return dados;
  } catch (error) {
    console.error(error);
    alert("Algo deu errado");
  }
}

export default api;
