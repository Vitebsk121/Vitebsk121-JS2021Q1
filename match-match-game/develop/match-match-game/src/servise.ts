import { SHOW_TIME } from './components/cards-field/cards-field';
import { Main } from './components/main/main';
import {
  getGameSettings, pauseGame, setDifficulty, setTypeOfCards, stopGame, unPauseGame, wonGame,
} from './gameService';
import { connectDB } from './indexedDB';
import { preSaveUser, user } from './shared/users';

let delay = false;
let defaultAvatarImage: string;
export let winGame: NodeJS.Timeout;

export function loadAvatar() {
  const fileInputElement = document.querySelector('input[type="file"]');
  const imageContainer = document.querySelector('.load-btn__wrapper');
  if (!fileInputElement) throw Error('fileInputElement not founded');
  if (!imageContainer) throw Error('imageContainer not founded');
  const fileInput = (<HTMLInputElement>fileInputElement);

  fileInputElement.addEventListener('change', () => {
    const file = fileInput.files;
    if (!file || file == null) throw Error('file not founded');
    const reader = new FileReader();
    if (!file[0]) {
      return;
    }
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      const Avatar = reader.result;
      (<HTMLElement>imageContainer).style.backgroundImage = `url(${Avatar})`;
    };
    fileInput.value = '';
  });
}

export function readyToGameStyle() {
  const registrationButton = document.querySelector('.registration-button');
  registrationButton?.classList.add('hidden');

  const startGameButton = document.querySelector('.start-game');
  startGameButton?.classList.remove('hidden');

  const headerAvatar = document.querySelector('.avatar');
  headerAvatar?.classList.remove('hidden');
}

export function changeHeaderAvatar() {
  const headerAvatar = document.querySelector('.avatar');
  (<HTMLElement>headerAvatar).style.backgroundImage = user.avatar;
}

export function clearStyle() {
  const inputsWrapper = document.querySelectorAll('.input__wrapper');
  inputsWrapper.forEach((item) => item.classList.remove('input__wrapper-valid'));
  const wrapper = document.querySelector('.wrapper');
  const regForm = document.querySelector('.registration');
  if (!regForm) throw Error('Reg form not founded');
  if (!wrapper) throw Error('Wrapper not founded');
  wrapper.classList.remove('wrapper-hidden');
  regForm.classList.add('hidden');
}

function ValidStyle() {
  const submitButton = document.querySelector('.add-user__btn');
  if (!submitButton) throw Error('submitButton not founded');
  const form = document.forms.item(0);
  if (!form) throw Error('form not founded');
  const inputsWrapper = document.querySelectorAll('.input__wrapper');
  const firstNameInput = (<HTMLInputElement>document.querySelector('.first-name'));
  const lastNameInput = (<HTMLInputElement>document.querySelector('.last-name'));
  const emailInput = (<HTMLInputElement>document.querySelector('.email'));
  if (!firstNameInput) throw Error('firstNameInput not founded');
  if (!inputsWrapper) throw Error('inputsWrapper not founded');
  firstNameInput.addEventListener('input', () => {
    const reg: RegExp = /^[a-zA-Zа-яА-Я0-9\s]{0,30}[a-zA-Zа-яА-Я]+[\s0-9]*$/;
    if (reg.test(firstNameInput.value)) {
      if (Number(firstNameInput.value)) {
        inputsWrapper[0].classList.remove('input__wrapper-valid');
        return;
      }
      inputsWrapper[0].classList.add('input__wrapper-valid');
      if (inputsWrapper[0].classList.contains('input__wrapper-valid')
          && inputsWrapper[1].classList.contains('input__wrapper-valid')
          && inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.remove('invalid__btn');
      }
    } else {
      inputsWrapper[0].classList.remove('input__wrapper-valid');
      if (!inputsWrapper[0].classList.contains('input__wrapper-valid')
          || !inputsWrapper[1].classList.contains('input__wrapper-valid')
          || !inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.add('invalid__btn');
      }
    }
  });
  lastNameInput.addEventListener('input', () => {
    const reg: RegExp = /^[a-zA-Zа-яА-Я0-9\s]{0,30}[a-zA-Zа-яА-Я]+[\s0-9]*$/;
    if (reg.test(lastNameInput.value)) {
      if (Number(lastNameInput.value)) {
        inputsWrapper[1].classList.remove('input__wrapper-valid');
        return;
      }
      inputsWrapper[1].classList.add('input__wrapper-valid');
      if (inputsWrapper[0].classList.contains('input__wrapper-valid')
          && inputsWrapper[1].classList.contains('input__wrapper-valid')
          && inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.remove('invalid__btn');
      }
    } else {
      inputsWrapper[1].classList.remove('input__wrapper-valid');
      if (!inputsWrapper[0].classList.contains('input__wrapper-valid')
          || !inputsWrapper[1].classList.contains('input__wrapper-valid')
          || !inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.add('invalid__btn');
      }
    }
  });
  emailInput.addEventListener('input', () => {
    const reg: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (reg.test(emailInput.value)) {
      inputsWrapper[2].classList.add('input__wrapper-valid');
      if (inputsWrapper[0].classList.contains('input__wrapper-valid')
          && inputsWrapper[1].classList.contains('input__wrapper-valid')
          && inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.remove('invalid__btn');
      }
    } else {
      inputsWrapper[2].classList.remove('input__wrapper-valid');
      if (!inputsWrapper[0].classList.contains('input__wrapper-valid')
          || !inputsWrapper[1].classList.contains('input__wrapper-valid')
          || !inputsWrapper[2].classList.contains('input__wrapper-valid')) {
        submitButton.classList.add('invalid__btn');
      }
    }
  });
}

export function clearForm() {
  const firstNameInput = (<HTMLInputElement>document.querySelector('.first-name'));
  const lastNameInput = (<HTMLInputElement>document.querySelector('.last-name'));
  const emailInput = (<HTMLInputElement>document.querySelector('.email'));
  const imageContainer = <HTMLElement>document.querySelector('.load-btn__wrapper');
  firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  imageContainer.style.backgroundImage = defaultAvatarImage;
}

export function service() {
  function render(view: string) {
    const main = document.querySelector('main');
    const newMain = new Main(view);
    if (!main) throw Error('Main not found');
    main.replaceWith(newMain.element);
  }

  function settingsGame() {
    const selectCard = document.querySelectorAll('.select-card-item');
    selectCard[setTypeOfCards()].classList.add('card-item__active');
    selectCard.forEach((item) => item.addEventListener('click', () => {
      selectCard.forEach((card) => card.classList.remove('card-item__active'));
      item.classList.add('card-item__active');
      getGameSettings();
    }));
    const selectDifficulty = document.querySelectorAll('.select-difficulty-item');
    selectDifficulty[setDifficulty()].classList.add('difficulty-item__active');
    selectDifficulty.forEach((item) => item.addEventListener('click', () => {
      selectDifficulty.forEach((param) => param.classList.remove('difficulty-item__active'));
      item.classList.add('difficulty-item__active');
      getGameSettings();
    }));
  }

  connectDB(() => console.log('inexedDB opened'));

  defaultAvatarImage = (<HTMLElement>document.querySelector('.load-btn__wrapper')).style.backgroundImage;
  const navButtons = document.querySelectorAll('.nav__list-item');
  navButtons.forEach((button) => button.addEventListener('click', () => {
    navButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    if (Array.from(navButtons).indexOf(button) === 0) {
      render('aboutGame');
    }
    if (Array.from(navButtons).indexOf(button) === 1) {
      render('bestScore');
    }
    if (Array.from(navButtons).indexOf(button) === 2) {
      render('game-settings');
      settingsGame();
    }
  }));

  const submitButton = document.querySelector('.win-frame__button');
  submitButton?.addEventListener('click', () => {
    const winFrame = document.querySelector('.win-frame');
    const wrapper = document.querySelector('.wrapper');
    winFrame?.classList.add('hidden');
    wrapper?.classList.remove('wrapper-hidden');
    (<HTMLElement>navButtons[1]).click();
  });

  const logoButton = document.querySelector('.logo');
  logoButton?.addEventListener('click', () => {
    navButtons.forEach((button) => button.classList.remove('active'));
    Array.from(navButtons)[0].classList.add('active');
    render('aboutGame');
  });

  function validate() {
    ValidStyle();
    const submitButton1 = document.querySelector('.add-user__btn');
    if (!submitButton1) throw Error('submitButton1 not founded');
    const form = document.forms.item(0);
    if (!form) throw Error('form not founded');
    submitButton1.addEventListener('click', (e) => {
      if (form.checkValidity()) {
        e.preventDefault();
        preSaveUser();
        clearForm();
        clearStyle();
        changeHeaderAvatar();
        readyToGameStyle();
      }
    });
  }

  const registrationButton = document.querySelector('.registration-button');
  if (!registrationButton) throw Error('Registration button not founded');
  registrationButton.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    const regForm = document.querySelector('.registration');
    if (!regForm) throw Error('Reg form not founded');
    if (!wrapper) throw Error('Wrapper not founded');
    wrapper.classList.add('wrapper-hidden');
    regForm.classList.remove('hidden');
    validate();
    loadAvatar();
  });

  const cancelButtonFromReg = document.querySelector('.cancel__btn');
  if (!cancelButtonFromReg) throw Error('Cancel button not founded');
  cancelButtonFromReg.addEventListener('click', () => {
    clearStyle();
    clearForm();
  });

  const startGameButton = document.querySelector('.start-game');
  if (!startGameButton) throw Error('Start-game button not founded');
  const pauseGameButton = document.querySelector('.pause-game');
  if (!pauseGameButton) throw Error('Start-game button not founded');
  const unPauseGameButton = document.querySelector('.unpause-game');
  if (!unPauseGameButton) throw Error('Start-game button not founded');
  const stopGameButton = document.querySelector('.stop-game');
  if (!stopGameButton) throw Error('Start-game button not founded');

  startGameButton.addEventListener('click', () => {
    if (delay === true) return;
    delay = true;
    render('startGame');
    setTimeout(() => {
      startGameButton.classList.add('hidden');
      pauseGameButton.classList.remove('hidden');
      stopGameButton.classList.remove('hidden');
      delay = false;
      winGame = setInterval(wonGame, 500);
    }, SHOW_TIME);
  });

  pauseGameButton.addEventListener('click', () => {
    pauseGameButton.classList.add('hidden');
    unPauseGameButton.classList.remove('hidden');
    pauseGame();
  });

  unPauseGameButton.addEventListener('click', () => {
    unPauseGameButton.classList.add('hidden');
    pauseGameButton.classList.remove('hidden');
    unPauseGame();
  });

  stopGameButton.addEventListener('click', () => {
    stopGameButton.classList.add('hidden');
    pauseGameButton.classList.add('hidden');
    unPauseGameButton.classList.add('hidden');
    startGameButton.classList.remove('hidden');
    stopGame();
  });
}
