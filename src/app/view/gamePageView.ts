import UserDataModel from '../model';
import View from './view';
import "../style/gamePage.css";

class GamePageView extends View {
  private form: HTMLFormElement | null;
  private userDataModel: UserDataModel;

  constructor(userDataModel: UserDataModel) {
    const params = {
      tag: 'div',
      classNames: [],
    };
    super(params);
    this.form = document.querySelector('.game-page');

    this.createPageView();
    this.userDataModel = userDataModel;
  }

  createPageView() {
    const game = `
            <div class="game-page">
            <div class="game-menu">
                <button class="logout" type="button">Logout</button>
            </div>
            </div>
        `;
    document.body.insertAdjacentHTML('afterbegin', game);
  }

}

export default GamePageView;
