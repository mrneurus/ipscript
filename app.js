async function getIp() {
  const url = `https://api.ipify.org?format=json`;
  const servicioPais = `http://ipwhois.app/json/`;
  let respose = await fetch(url);
  let data = await respose.json();
  let userIP = data.ip;

  const respiestaPais = await fetch(`${servicioPais}${userIP}`);
  let pais = await respiestaPais.json();

  const contenedor = document.getElementById("contenedor");
  let divHtml = document.createElement("div");

  let tititulo = document.createElement("h2");
  let subtitulo = document.createElement("h3");
  tititulo.textContent = `Conexión desde : ${pais.country}`;
  subtitulo.textContent = `Su IP es: ${pais.ip}`;
  let flag = document.createElement("img");
  flag.setAttribute("src", pais.country_flag);

  divHtml.appendChild(tititulo);
  divHtml.appendChild(subtitulo);
  divHtml.appendChild(flag);
  contenedor.appendChild(divHtml);
}

getIp();
