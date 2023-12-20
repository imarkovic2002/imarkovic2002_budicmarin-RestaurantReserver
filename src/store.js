let data = {
    radnici: [
        {
            id: '1',
            ime: 'Marko',
            prezime: 'Perić',
            godiste: '1976',
            role: 'radnik',
        },
    ],
    gosti: [
        {
            id: '300',
            ime: 'Romeo',
            prezime: 'Romić',
            godiste: '2000',
            broj_telefona: '0913224312',
        },
    ],
    pica: [
        {
            id: '1',
            nazivPica: 'Coca-Cola'
        },
        {
            id: '2',
            nazivPica: 'Pasareta'
        },
    ],
    ocjena: [
        {
            id: '1',
            ocjena: '5',
        },
    ],
};

data.rezervacija = [
    {
        id: '1',
        datum: '19-12-2023',
        vrijeme: '20:00',
        gost: data.gosti[0],
        broj_stola: '5',
        pice: data.pica[0],
        ocjena: data.ocjena[0],
    },
];



export default data;