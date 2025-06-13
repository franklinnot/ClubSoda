export const distritos = [
  // Lima
  { id: "jesus_maria", name: "Jesús María" },
  { id: "san_isidro", name: "Lima, San Isidro" },
  { id: "miraflores", name: "Miraflores" },
  { id: "surco", name: "Santiago de Surco" },
  { id: "comas", name: "Comas" },
  { id: "lince", name: "Lince" },
  { id: "pueblo_libre", name: "Pueblo Libre" },

  // Trujillo
  { id: "trujillo", name: "Trujillo, La Libertad" },
  { id: "florida", name: "La Florida" },
  { id: "esperanza", name: "La Esperanza, Trujillo" },
  { id: "moche", name: "Moche" },
  { id: "huanchaco", name: "Huanchaco" },
];

export const deliveryFees: Record<string, number> = {
  // Lima
  jesus_maria: 5.0,
  san_isidro: 7.0,
  miraflores: 6.5,
  surco: 4.5,
  comas: 3.0,
  lince: 5.5,
  pueblo_libre: 4.0,

  // Trujillo
  trujillo: 4.0,
  florida: 3.5,
  esperanza: 3.0,
  moche: 5.0,
  huanchaco: 6.0,
};
