import UserDataModel from './model';
import LoginPageController from './controller/loginPageController';
import StartPageController from './controller/startPageController';
import GamePageController from './controller/gamePageController';
import LoginPageView from './view/loginPageView';
import StartPageView from './view/startPageView';
import GamePageView from './view/gamePageView';

export default class App {
  constructor() {
    this.createView();
  }

  createView(): void {
    const userDataModel = new UserDataModel();
    userDataModel.retrieveFromLocalStorage();

    let view;

    const urlSearchParams = new URLSearchParams(window.location.search);
    const page = urlSearchParams.get('page');

    if (!userDataModel.getFirstName()) {
      if (page === 'login' || page === null) {
        document.body.innerHTML = '';
        const view = new LoginPageView(userDataModel);
        const loginPageController = new LoginPageController(view, userDataModel);
        document.body.append(view.getHtmlElement());
      }
    } else if (page === 'start' || page === null) {
      if (userDataModel.getFirstName() && userDataModel.getLastName()) {
        document.body.innerHTML = '';
        view = new StartPageView();
        const startPageController = new StartPageController(view, userDataModel);
        document.body.append(view.getHtmlElement());
      }
    } else if (page === 'game') {
      if (userDataModel.getFirstName() && userDataModel.getLastName()) {
        document.body.innerHTML = '';
        view = new GamePageView(userDataModel);
        const gamePageController = new GamePageController(view, userDataModel);
        document.body.append(view.getHtmlElement());
      }
    }
  }
}
