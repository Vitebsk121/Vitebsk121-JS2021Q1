export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', classList: string[] = [], text?: string) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classList);
    if (text !== undefined) this.element.append(`${text}`);
  }
}
