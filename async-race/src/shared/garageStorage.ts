// import { getAllCars } from './server';
//
// export function getCountOfPages(): void {
//   getAllCars().then((data) => {
//     const countOfPages = Math.ceil(data.length / 7);
//   });
// }
//
export function setPageNumber(): void {
  if (!localStorage.getItem('page-number')) {
    localStorage.setItem('page-number', '1');
  }
}
