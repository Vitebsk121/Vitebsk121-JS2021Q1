function serverUrlGenerator(serverSection: string): string {
  return `http://127.0.0.1:3000/${serverSection}`;
}

const server = {
  garage: serverUrlGenerator('garage'),
};

export async function getAllCars(): Promise<{ [key: string]: string }[]> {
  const serverResponse = await fetch(server.garage);
  const data: { [key: string]: string }[] = await serverResponse.json();
  return data;
}

export async function updateCar(car: { [key: string]: string }): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.garage}/${+car.id}`, {
    method: 'Put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: car.name,
      color: car.color,
    }),
  });
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}

export async function createCar(car: { [key: string]: string }): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });

  const data: { [key: string]: string } = await serverResponse.json();

  return data;
}
