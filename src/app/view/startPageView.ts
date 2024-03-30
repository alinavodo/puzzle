import View from './view';
import "../style/startPage.css";

class StartPageView extends View {
  private lastName: string | undefined;
  private firstName: string | undefined;
  private form: HTMLFormElement | null;

  constructor() {
    const params = {
      tag: 'div',
      classNames: [],
    };
    super(params);
    this.form = document.querySelector('.start-page');

    const userDataString = localStorage.getItem('RssPuzzle');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      this.firstName = userData.RssPuzzle.firstName;
      this.lastName = userData.RssPuzzle.lastName;
    }

    this.createPageView();
  }

  createPageView() {
    const startText = `
            <div class="start-page">
                <h2 class="start-page-h2">Hello  ${this.firstName} ${this.lastName}</h2>
                <div class="start-page-buttons">
                  <button class="start-page-logout-btn" type="button">Logout</button>
                  <button class="start-page-start-btn" type="button">Start</button>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML('afterbegin', startText);
  }

  setHiddenClass(): void {
    if (!this.form) return;
    this.form.classList.add('hidden');
  }
}

export default StartPageView;
