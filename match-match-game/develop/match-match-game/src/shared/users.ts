import { setFile } from '../indexedDB';

export let user = {
  firstName: '',
  lastName: '',
  email: '',
  score: 0,
  avatar: '',
};

export let validUserList: object[] = [];

export function preSaveUser() {
  const firstName = <HTMLInputElement>document.getElementById('user-first-name');
  const lastName = <HTMLInputElement>document.getElementById('user-last-name');
  const email = <HTMLInputElement>document.getElementById('user-email');
  const defaultScore = 0;
  const imageContainer = document.querySelector('.load-btn__wrapper');
  const urlAvatar = (<HTMLElement>imageContainer).style.backgroundImage;
  user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    score: defaultScore,
    avatar: urlAvatar,
  };
  setFile(user);
}

export function updateScore(score: number) {
  user.score = score;
  setFile(user);
}

export function addUserToDB() {
  setFile(user);
}

function sortPlayers(a: Object, b: Object) {
  const score1 = Object(a).score;
  const score2 = Object(b).score;
  let sravnenie = 0;
  if (score1 < score2) {
    sravnenie = 1;
  }
  if (score1 > score2) {
    sravnenie = -1;
  }
  return sravnenie;
}

export function getPlayersList(users: object[]) {
  validUserList = [];
  const ValidPlayersList: object[] = [];
  users.forEach((item) => {
    if (Object(item).score > 0) {
      ValidPlayersList.push(item);
    }
  });
  console.log(ValidPlayersList);
  ValidPlayersList.sort(sortPlayers);
  validUserList = ValidPlayersList;
  console.log(ValidPlayersList);
}
