const scientistItem = document.querySelectorAll('.scientists-item');
const questionButtons = document.querySelectorAll('.scientists-questions-button');
const scientistsData = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        let filteredScientists = [];
        switch (question) {
            case 'Які вчені народилися в 19 ст.':
                filteredScientists = scientistsData.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
                break;
            case 'Відсортувати вчених за алфавітом':
                filteredScientists = [...scientistsData].sort((a, b) => a.surname.localeCompare(b.surname));
                break;
            case 'Відсортувати вчених за кількістю прожитих років':
                filteredScientists = [...scientistsData].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                break;
            case 'Знайти вченого, який народився найпізніше':
                const latestBornYear = Math.max(...scientistsData.map(scientist => scientist.born));
                filteredScientists = scientistsData.filter(scientist => scientist.born === latestBornYear);
                break;
            case 'Знайти рік народження Albert Einshtein':
                filteredScientists = scientistsData.filter(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein');
                break;
            case 'Знайти вчених, прізвища яких починаються на на літеру “С”':
                filteredScientists = scientistsData.filter(scientist => scientist.surname.startsWith('C'));
                break;
            case 'Видалити всіх вчених, ім’я яких починається на “А”':
                filteredScientists = scientistsData.filter(scientist => !scientist.name.startsWith('A'));
                break;
            case 'Знайти вченого, який прожив найдовше і вченого, який прожив найменше':
                const scientistsWithLifespans = scientistsData.map(scientist => ({
                    ...scientist,
                    lifespan: scientist.dead - scientist.born
                }));

                const longestLifespan = Math.max(...scientistsWithLifespans.map(scientist => scientist.lifespan));
                const shortestLifespan = Math.min(...scientistsWithLifespans.map(scientist => scientist.lifespan));

                filteredScientists = scientistsWithLifespans.filter(scientist => scientist.lifespan === longestLifespan || scientist.lifespan === shortestLifespan);
                break;
            default:
                filteredScientists = scientistsData; 
        }
        displayScientists(filteredScientists);
        console.log(filteredScientists);
    });
});

function displayScientists(arr) {
    scientistItem.forEach(item => item.style.display = 'none');
    arr.forEach(scientist => {
        const item = document.querySelector(`.scientists-item p[id="${scientist.id}"]`);
        if (item) {
            item.parentElement.style.display = 'flex';
        }
    });
}