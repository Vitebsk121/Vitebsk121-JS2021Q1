function serverUrlGenerator(serverSection: string): string {
  return `http://127.0.0.1:3000/${serverSection}`;
}

const server = {
  garage: serverUrlGenerator('garage'),
  engine: serverUrlGenerator('engine'),
  winners: serverUrlGenerator('winners'),
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

export async function getWinner(id: string): Promise<{ status: number, car: { [key: string]: string } }> {
  const serverResponse = await fetch(`${server.winners}/${id}`);
  const data: { [key: string]: string } = await serverResponse.json();
  const result = {
    status: serverResponse.status,
    car: data,
  };
  return result;
}

export async function createNewWinner(car: { [key: string]: string }): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(server.winners, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: +car.id,
      wins: +car.wins,
      time: +car.time,
    }),
  });
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}

export async function updateWinner(car: { [key: string]: string }): Promise<{ [key: string]: string }[]> {
  const serverResponse = await fetch(`${server.winners}/${car.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wins: +car.wins,
      time: +car.time,
    }),
  });
  const data: { [key: string]: string }[] = await serverResponse.json();
  return data;
}

export async function getAllWinners(): Promise<{ [key: string]: string }[]> {
  const serverResponse = await fetch(server.winners);
  const data: { [key: string]: string }[] = await serverResponse.json();
  return data;
}
