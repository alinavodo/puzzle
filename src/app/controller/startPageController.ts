import app from '../../main.ts';
import UserDataModel from '../model.ts';
import GamePageView from '../view/gamePageView.ts';
import LoginPageView from '../view/loginPageView.ts';
import StartPageView from '../view/startPageView.ts';

class StartPageController {
  private view: StartPageView;
  private model: UserDataModel;

  constructor(view: StartPageView, model: UserDataModel) {
    this.view = view;
    this.model = model;
    this.setupEventListeners();
  }

  private setupEventListeners() {
    const logoutBtn = document.querySelector('.start-page-logout-btn');
    if (logoutBtn) {
      ['click'].forEach((ev) =>
        logoutBtn.addEventListener(ev, () => {
          this.handleLogoutClick();
          app.createView();
        }),
      );
    }

    // click Start button
    const startBtn = document.querySelector('.start-page-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.handleStartClick();
        app.createView();
      });
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

  private handleStartClick() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set('page', 'game');
    const gamePageView = new GamePageView(this.model);
    window.history.replaceState(null, '', `?${urlSearchParams.toString()}`);
    document.body.append(gamePageView.getHtmlElement());
  }
}

export default StartPageController;
