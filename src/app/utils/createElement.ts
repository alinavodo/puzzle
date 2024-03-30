import { BaseInterfaces } from '../interfaces/baseInterfaces';

export default class СreareElement {
  private element: HTMLElement | null;

  constructor(params: BaseInterfaces) {
    this.element = null;
    this.createElement(params);
  }

   getElement(): HTMLElement | null {
    return this.element;
  }

addInnerElement(element: СreareElement | HTMLElement): void {
  if (element instanceof СreareElement) {
    const innerElement = element.getElement();
    if (innerElement) {
      this.element!.append(innerElement);
    }
  } else {
    this.element!.append(element);
  }
}

  private createElement(params: BaseInterfaces): void {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.classNames);
    this.setTextContent(params.textContent);
    this.setElemType(params.elemType);
    this.setCallback(params.callback);
  }

  public setElemType(elemType: string = ''): void {
    this.element!.setAttribute('type', elemType);
  }

  private setCssClasses(cssClasses: string[] = []): void {
    cssClasses.map((cssClass) => this.element!.classList.add(cssClass));
  }

  public setHtmlContent(text: string = ''): void {
    this.element!.innerHTML = text;
  }

  public setTextContent(text: string = ''): void {
    this.element!.textContent = text;
  }

  private setCallback(callback: ((event: Event) => void) | undefined): void {
    if (typeof callback === 'function') {
      this.element!.addEventListener('click', (event) => callback!(event));
    }
  }

  public getHtmlElement() {
    return this.element;
  }
}
