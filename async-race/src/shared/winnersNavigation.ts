function setDefaultWinnersPageNumber(): void {
    localStorage.setItem('winners-page-number', '1');
}

export function getWinnersPageNumber(): number {
if (!localStorage.getItem('winners-page-number')) setDefaultWinnersPageNumber();
const pageNumber = localStorage.getItem('winners-page-number');
if (!pageNumber) throw Error('Page number not founded');
return +pageNumber;
}

export function setWinnersPageNumber(n: number): void {
const currentPageNumber = getWinnersPageNumber();
const newPageNumber = currentPageNumber + n;
localStorage.setItem('winners-page-number', `${newPageNumber}`);
}

export function setNextWinnersButtonSettings(): string {
const pageNumber = getWinnersPageNumber();
const countOfPages = localStorage.getItem('winners-pages');
if (!countOfPages) throw Error('Count of pages not founded');
let buttonSettings = 'disabled';
if (+countOfPages > 1) {
    if (+countOfPages > pageNumber) {
    buttonSettings = 'active';
    }
}
return buttonSettings;
}

export function setPrevWinnersButtonSettings(): string {
const pageNumber = getWinnersPageNumber();
const countOfPages = localStorage.getItem('winners-pages');
if (!countOfPages) throw Error('Count of pages not founded');
let buttonSettings = 'disabled';
if (+countOfPages >= 1) {
    if (pageNumber !== 1) {
    buttonSettings = 'active';
    }
}
return buttonSettings;
}
  