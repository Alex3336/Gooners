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
        const question = button.textContent.trim().replace(/\s+/g, ' ');
        let filteredScientists = [];

        switch(question){
            case "Які вчені народилися в 19 ст.":
                filteredScientists = scientistsData.filter(s => s.born >= 1801 && s.born <= 1900);
                break;
            case "Відсортувати вчених за алфавітом":
                filteredScientists = [...scientistsData].sort((a, b) => a.name.localeCompare(b.name));
                break;  
            case "Відсортувати вчених за кількістю прожитих років":
                filteredScientists = [...scientistsData].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
                break;
            case "Знайти вченого, який народився найпізніше":
                const latest = Math.max(...scientistsData.map(s => s.born));
                filteredScientists = scientistsData.filter(s => s.born === latest);
                break;
            case "Знайти рік народження Albert Einstein":
                filteredScientists = scientistsData.filter(s => s.name === 'Albert' && s.surname === 'Einstein');
                break;
            case 'Знайти вчених, прізвища яких починаються на літеру "С"':
                filteredScientists = scientistsData.filter(s => s.surname.startsWith('C'));
                break;
        
            case 'Видалити всіх вчених, ім’я яких починається на "А"':
                filteredScientists = scientistsData.filter(s => !s.name.startsWith('A'));
                break;
            case "Знайти вченого, який прожив найдовше і вченого, який прожив найменше":
                const withLifespan = scientistsData.map(s => ({ ...s, lifespan: s.dead - s.born }));
                const max = Math.max(...withLifespan.map(s => s.lifespan));
                const min = Math.min(...withLifespan.map(s => s.lifespan));
                filteredScientists = withLifespan.filter(s => s.lifespan === max || s.lifespan === min);
                break;
        
            case "Знайти вчених, в яких співпадають перші літери імені і прізвища":
                filteredScientists = scientistsData.filter(s => s.name[0] === s.surname[0]);
                break;
            default:
                filteredScientists = scientistsData;
                break;
        }

        displayScientists(filteredScientists);
    });
});


function displayScientists(arr) {
    const list = document.querySelector('.scientists-list');
    list.innerHTML = '';

    arr.forEach(scientist => {
        const li = document.createElement('li');
        li.className = 'scientists-item';

        const p = document.createElement('p');
        p.className = 'scientist-name';
        p.id = scientist.id;
        p.innerHTML = `${scientist.name} ${scientist.surname}<br> ${scientist.born}-${scientist.dead}`;
        li.appendChild(p);
        list.appendChild(li);
    });
}
