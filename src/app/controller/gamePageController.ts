import app from '../../main.ts';
import UserDataModel from '../model';
import GamePageView from '../view/gamePageView';
import LoginPageView from '../view/loginPageView';


class GamePageController {
  private view: GamePageView;
  private model: UserDataModel;

  constructor(view: GamePageView, model: UserDataModel) {
    this.view = view;
    this.model = model;
    this.setupEventListeners();
  }

  private setupEventListeners() {
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
      ['click'].forEach((ev) =>
        logoutBtn.addEventListener(ev, () => {
          this.handleLogoutClick();
          app.createView();
        }),
      );
    }

   
  }

  private handleLogoutClick() {
    localStorage.removeItem('RssPuzzle');
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set('page', 'login');
    const loginPageView = new LoginPageView(this.model);
    window.history.replaceState(null, '', `?${urlSearchParams.toString()}`);
    document.body.append(loginPageView.getHtmlElement());
  }

}

export default GamePageController;
