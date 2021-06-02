import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import { Input } from '../input/input';
import './registration.scss';

export class Registration extends BaseComponent {
  private readonly formTitle: BaseComponent;

  private readonly inputAndAvatarWrapper: BaseComponent;

  private readonly buttonWrapper: BaseComponent;

  private readonly form: BaseComponent;

  private readonly input: Input;

  private readonly button: Button;

  private readonly inputWrapper: BaseComponent;

  constructor() {
    super('div', ['registration', 'hidden']);
    const simvol = ' ~ ! @ # $ % * () _ — + = | : ; " \' ` < > , . ? / ^';

    this.formTitle = new BaseComponent('h3', ['form__title'], 'Registr new Player');
    this.element.append(this.formTitle.element);

    this.inputAndAvatarWrapper = new BaseComponent('div', ['input-avatar__wrapper']);
    this.element.append(this.inputAndAvatarWrapper.element);
    this.form = new BaseComponent('form', ['reg-form']);
    this.form.element.id = 'reg-form';
    this.inputAndAvatarWrapper.element.append(this.form.element);
    this.inputWrapper = new BaseComponent('div', ['input__wrapper']);
    this.form.element.append(this.inputWrapper.element);
    this.input = new Input('user-first-name', ['form__input', 'first-name'], 'text', 'First Name');
    this.input.element.setAttribute('pattern', '^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$');
    this.input.element.setAttribute('maxlength', '30');
    this.input.element.setAttribute(
      'title',
      `Имя не может состоять только из цифр или содержать символы ${simvol}, длинна имени не более 30 символов`,
    );
    this.inputWrapper.element.append(this.input.element);
    this.inputWrapper = new BaseComponent('div', ['input__wrapper']);
    this.form.element.append(this.inputWrapper.element);
    this.input = new Input('user-last-name', ['form__input', 'last-name'], 'text', 'Last Name');
    this.input.element.setAttribute('pattern', '^^[a-zA-Zа-яА-Я0-9 ]{0,30}[a-zA-Zа-яА-Я]+[ 0-9]*$');
    this.input.element.setAttribute('maxlength', '30');
    this.input.element.setAttribute(
      'title',
      `Фамилия не может состоять только из цифр или содержать символы ${simvol}, длинна фамилии не более 30 символов`,
    );
    this.inputWrapper.element.append(this.input.element);
    this.inputWrapper = new BaseComponent('div', ['input__wrapper']);
    this.form.element.append(this.inputWrapper.element);
    this.input = new Input('user-email', ['form__input', 'email'], 'email', 'E-mail');
    this.input.element.setAttribute('maxlength', '30');
    this.input.element.setAttribute('title', 'не более 30  символов');
    this.inputWrapper.element.append(this.input.element);
    this.buttonWrapper = new BaseComponent('div', ['button__wrapper']);
    this.element.append(this.buttonWrapper.element);
    this.button = new Button(['form-button', 'add-user__btn', 'invalid__btn'], 'add user');
    this.button.element.setAttribute('form', 'reg-form');
    this.button.element.setAttribute('type', 'submit');
    this.buttonWrapper.element.append(this.button.element);
    this.button = new Button(['form-button', 'cancel__btn'], 'cansel');
    this.buttonWrapper.element.append(this.button.element);
    this.inputWrapper = new BaseComponent('div', ['load-btn__wrapper']);
    this.inputAndAvatarWrapper.element.append(this.inputWrapper.element);
    this.input = new Input('upload', ['btn-load--input'], 'file', '');
    this.inputWrapper.element.append(this.input.element);
  }
}
