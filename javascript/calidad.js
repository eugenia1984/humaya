const razonesDeCalidad = [
  {
    imgSrc: "./assets/imagenes/calidad/organic.png",
    imgAlt: "organico",
    imgClass: "organic",
    text: "100% orgánico",
  },
  {
    imgSrc: "./assets/imagenes/calidad/glutten-free.png",
    imgAlt: "sin gluten",
    imgClass: "gluten-free",
    text: "sin tacc",
  },
  {
    imgSrc: "./assets/imagenes/calidad/sin-conservante.png",
    imgAlt: "sin cnservantes",
    imgClass: "sin-conservantes",
    text: "sin conservantes",
  },
];

const obtenerRazones = (razones) => {
  let texto = "";

  razones.map((e) => {
    return (texto += `
      <div class="col-sm-12 col-md-4">
        <img src=${e.imgSrc} alt=${e.imgAlt}  class=${e.imgClass}>
        <p class="text-uppercase">${e.text}</p>
      </div>
    `);
  });

  document.getElementById("razones").innerHTML = texto;
};

obtenerRazones(razonesDeCalidad);
