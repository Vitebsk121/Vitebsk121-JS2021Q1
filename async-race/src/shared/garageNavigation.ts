export function setDefaultPageNumber(): void {
  localStorage.setItem('page-number', '1');
}

export function getPageNumber(): number {
  if (!localStorage.getItem('page-number')) setDefaultPageNumber();
  const pageNumber = localStorage.getItem('page-number');
  if (!pageNumber) throw Error('Page number not founded');
  return +pageNumber;
}

export function setPageNumber(n: number): void {
  const currentPageNumber = getPageNumber();
  const newPageNumber = currentPageNumber + n;
  localStorage.setItem('page-number', `${newPageNumber}`);
}

export function setNextGarageButtonSettings(): string {
  const pageNumber = getPageNumber();
  const countOfPages = localStorage.getItem('pages');
  if (!countOfPages) throw Error('Count of pages not founded');
  let buttonSettings = 'disabled';
  if (+countOfPages > 1) {
    if (+countOfPages > pageNumber) {
      buttonSettings = 'active';
    }
  }
  return buttonSettings;
}

export function setPrevGarageButtonSettings(): string {
  const pageNumber = getPageNumber();
  const countOfPages = localStorage.getItem('pages');
  if (!countOfPages) throw Error('Count of pages not founded');
  let buttonSettings = 'disabled';
  if (+countOfPages > 1) {
    if (pageNumber !== 1) {
      buttonSettings = 'active';
    }
  }
  return buttonSettings;
}
