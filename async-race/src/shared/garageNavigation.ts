import { getAllCars } from "./server";

export function getCountOfPages(): void {
  getAllCars().then((data) => {
    const countOfPages = Math.ceil(data.length / 7);
    setCountOfPages(countOfPages);
  });
}

export function setCountOfPages(count: number) {
  localStorage.setItem('pages', `${count}`)
}

export function getPageNumber() {
  const pageNumber = localStorage.getItem('page-number');
  return pageNumber;
}

export function setPageNumber(): void {
  if (!getPageNumber()) {
    localStorage.setItem('page-number', '1');
  }
}
