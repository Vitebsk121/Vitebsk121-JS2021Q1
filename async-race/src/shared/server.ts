function serverUrlGenerator(serverSection: string): string {
  return `http://127.0.0.1:3000/${serverSection}`;
}

const server = {
  garage: serverUrlGenerator('garage'),
  engine: serverUrlGenerator('engine'),
};

export async function getAllCars(): Promise<{ [key: string]: string }[]> {
  const serverResponse = await fetch(server.garage);
  const data: { [key: string]: string }[] = await serverResponse.json();
  return data;
}

export async function updateCar(car: { [key: string]: string }): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.garage}/${+car.id}`, {
    method: 'PUT',
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

export async function deleteCar(id: string): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.garage}/${id}`, {
    method: 'DELETE',
  });
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}

export async function startEngineOfCar(id: string): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.engine}?id=${id}&status=started`);
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}

export async function stopEngineOfCar(id: string): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.engine}?id=${id}&status=stopped`);
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}

export async function driveEngineOfCar(id: string): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.engine}?id=${id}&status=drive`);
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}
