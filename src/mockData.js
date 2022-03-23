import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' Hacer Pizza',
        tasks: [
            {
                id: uuidv4(),
                title: 'Masa',
                coste: 10000
            },
            {
                id: uuidv4(),
                title: 'anchoas',
                coste: 3000
            },
            {
                id: uuidv4(),
                title: 'corteza de queso',
                coste: 4500
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'ingredientes',
        tasks: [

            {
                id: uuidv4(),
                title: 'Pepinillos',
                coste: 3000
            },

            {
                id: uuidv4(),
                title: 'jalapeños',
                coste: 3000
            },

            {
                id: uuidv4(),
                title: 'champiñones',
                coste: 3000
            },
            {
                id: uuidv4(),
                title: 'peperoni',
                coste: 3000
            },

            {
                id: uuidv4(),
                title: 'pollo',
                coste: 5000
            },
        ]
    },
   
]

export default mockData