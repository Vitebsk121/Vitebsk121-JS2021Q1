// import { validUserList } from '../../shared/users';
import { getFile } from '../../indexedDB';
import { validUserList } from '../../shared/users';
import { Avatar } from '../avatar/avatar';
import { BaseComponent } from '../base-component';
import './bestScore.scss';

export class BestScore extends BaseComponent {
  private readonly sectionTitle: BaseComponent;

  private readonly playerInfo: BaseComponent;

  private readonly avatar: Avatar;

  private readonly infoWrapper: BaseComponent;

  private readonly fullName: BaseComponent;

  private readonly email: BaseComponent;

  private readonly scoreTitle: BaseComponent;

  private readonly score: BaseComponent;

  constructor() {
    super('section', ['best-score']);
    this.sectionTitle = new BaseComponent('h3', ['section-title'], 'Best 10 players');
    this.element.append(this.sectionTitle.element);

    this.playerInfo = new BaseComponent('div', ['player-info']);
    this.element.append(this.playerInfo.element);

    this.avatar = new Avatar(['avatar']);
    const linkAvaStart = 'url(https://sun9-47.userapi.com/impf/c638327/v638327859/67aa/gKEJ8pS6Gtw.';
    const linkAvaEnd = 'jpg?size=608x960&quality=96&sign=c12850ec96514fc3fb6dca42f3a42e6b&type=album)';
    this.avatar.element.style.backgroundImage = `${linkAvaStart}${linkAvaEnd}`;
    this.playerInfo.element.append(this.avatar.element);

    this.infoWrapper = new BaseComponent('div', ['infoWrapper']);
    this.playerInfo.element.append(this.infoWrapper.element);

    this.fullName = new BaseComponent('p', ['full-name'], 'Alexandr Demchenko');
    this.infoWrapper.element.append(this.fullName.element);

    this.email = new BaseComponent('p', ['email'], 'Alexandr.Demchenko@list.ru');
    this.infoWrapper.element.append(this.email.element);

    this.scoreTitle = new BaseComponent('p', ['score-title'], 'Score:');
    this.playerInfo.element.append(this.scoreTitle.element);

    this.score = new BaseComponent('span', ['score'], '1000000');
    this.scoreTitle.element.append(this.score.element);

    getFile();

    for (let i = 0; i < validUserList.length && i < 9; i++) {
      this.playerInfo = new BaseComponent('div', ['player-info']);
      this.element.append(this.playerInfo.element);

      this.avatar = new Avatar(['avatar']);
      this.avatar.element.style.backgroundImage = Object(validUserList[i]).avatar;
      this.playerInfo.element.append(this.avatar.element);

      this.infoWrapper = new BaseComponent('div', ['infoWrapper']);
      this.playerInfo.element.append(this.infoWrapper.element);

      this.fullName = new BaseComponent(
        'p',
        ['full-name'],
        `${Object(validUserList[i]).firstName} ${Object(validUserList[i]).lastName}`,
      );
      this.infoWrapper.element.append(this.fullName.element);

      this.email = new BaseComponent('p', ['email'], `${Object(validUserList[i]).email}`);
      this.infoWrapper.element.append(this.email.element);

      this.scoreTitle = new BaseComponent('p', ['score-title'], 'Score:');
      this.playerInfo.element.append(this.scoreTitle.element);

      this.score = new BaseComponent('span', ['score'], `${Object(validUserList[i]).score}`);
      this.scoreTitle.element.append(this.score.element);
    }
  }
}
