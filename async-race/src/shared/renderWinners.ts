import { setWinnersList } from './localDB';
import { renderMain } from './rendering';

export function refreshWinners(): void {
  setWinnersList().then(() => {
    renderMain('winners');
  });
}
