const serverURL = 'http://127.0.0.1:3000/';

const serverSections = {
    garage: 'garage',
}

async function getAllCars() {
    const data = await fetch(`${serverURL}${serverSections.garage}`);

    console.log(data);
}