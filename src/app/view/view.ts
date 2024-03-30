import { BaseInterfaces } from '../interfaces/baseInterfaces';
import СreareElement from "../utils/createElement";

export default class View {
    protected viewElementCreator: СreareElement;

    constructor(params: BaseInterfaces ) {
        this.viewElementCreator = new СreareElement({
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            elemType: '',
            callback: () => { }
        });
    }

    getHtmlElement(): HTMLElement {
        const element = this.viewElementCreator.getElement();
        if (element === null) {
          throw new Error('Element is null');
        }
        return element;
      }

    protected createView(params: BaseInterfaces ): СreareElement {
        const elementParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
            elemType: '',
            callback: () => { }
        };
        this.viewElementCreator = new СreareElement(elementParams);

        return this.viewElementCreator;
    }
}