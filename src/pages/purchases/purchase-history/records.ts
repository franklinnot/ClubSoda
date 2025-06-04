export const purchases = [
    {
        id: "124",
        total: "PEN S/. 250.50",
        estado: "En progreso" as const,
        fecha: "2025-06-01",
        productos: [
            {
                nombre: "Galleta de animalitos",
                cantidad: 2,
                precio: 3,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GEsHhix34h2N0qnbyNLGLY9hB2UAkBwisw&s",
            },
            {
                nombre: "Galleta ChocoFiesta",
                cantidad: 2,
                precio: 3,
                imagen: "https://plazavea.vteximg.com.br/arquivos/ids/26761764-450-450/20356284.jpg?v=638229325373100000",
            },
            {
                nombre: "Jugo de naranja",
                cantidad: 1,
                precio: 5,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXwTQk9_m0Bsc2IqHFlcZpwpVbWLitFtrNw&s",
            },
        ],
        cliente: {
            telefono: "941225240",
            correo: "soyelzorro@email.com",
            direccion: "Bunker 163",
            remitente: "Marco Polo",
        },
        //onClick: () => alert("Compra 124 seleccionada"),
        //isActive: true,
    },

    {
        id: "125",
        total: "PEN S/. 100.50",
        estado: "En progreso" as const,
        fecha: "2025-06-01",
        productos: [
            {
                nombre: "Galleta de animalitos",
                cantidad: 2,
                precio: 3,
                imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GEsHhix34h2N0qnbyNLGLY9hB2UAkBwisw&s",
            },
            {
                nombre: "Galleta ChocoFiesta",
                cantidad: 1,
                precio: 3,
                imagen: "https://plazavea.vteximg.com.br/arquivos/ids/26761764-450-450/20356284.jpg?v=638229325373100000",
            },
        ],
        cliente: {
            telefono: "941225240",
            correo: "soyelzorro@email.com",
            direccion: "Bunker 163",
            remitente: "Marco Polo",
        },
        //onClick: () => alert("Compra 124 seleccionada"),
        //isActive: true,
    },
];

