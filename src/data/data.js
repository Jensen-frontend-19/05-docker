const defaultData = [
    { id: 1, animal: 'häst', from: 'Norge' },
    { id: 2, animal: 'ekorre', from: 'Schweiz' },
    { id: 3, animal: 'giraff', from: 'Kenya' },
    { id: 5, animal: 'yeti', from: 'Alperna' }
];

// Försök 2, localStorage
function getAnimals() {
    const LS_KEY = 'viewlist-animals';
    let fromLs = localStorage.getItem(LS_KEY);

    if( !fromLs ) {
        localStorage.setItem(LS_KEY, JSON.stringify(defaultData));
        fromLs = localStorage.getItem(LS_KEY);
    }

    return JSON.parse(fromLs);
}

/*
// Försök 1, enklast möjliga
function getAnimals() {
    return [
        { id: 1, animal: 'häst', from: 'Norge' },
        { id: 2, animal: 'ekorre', from: 'Schweiz' },
        { id: 3, animal: 'giraff', from: 'Kenya' },
        { id: 5, animal: 'yeti', from: 'Alperna' }
    ]
}*/

export { getAnimals }
