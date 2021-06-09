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

export async function getCarById(id: string): Promise<{ [key: string]: string }> {
  const serverResponse = await fetch(`${server.garage}/${id}`);
  const data: { [key: string]: string } = await serverResponse.json();
  return data;
}
