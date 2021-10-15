const PlayerSelector = () => (
  <>
    <header className="player-selector-header">
      <h1 className="player-selector-header__title heading-1">
        Player Selector
      </h1>
    </header>

    <section className="player-selector-content">
      <section className="tab-group">
        <div className="tab-group__tab tab-group__tab--active">
          PLAYER PICKER
        </div>
        <div className="tab-group__tab">HEAD TO HEAD</div>
        <div className="tab-group__tab">PLAYER SEARCH</div>
      </section>
      <section className="tab-content">
        <div className="option-menus">
          <div className="option-menu">
            <label className="option-menu__label" for="position-select">
              Position
            </label>
            <select
              className="option-menu__select"
              name="position"
              id="position"
            >
              <option selected value="fwd">
                fwd
              </option>
              <option value="mid">mid</option>
              <option value="def">def</option>
              <option value="goal">goal</option>
              <i class="fas fa-caret-down"></i>
            </select>
          </div>

          <div className="option-menu">
            <label className="option-menu__label" for="budget-select">
              Budget
            </label>

            <select className="option-menu__select" name="budget" id="budget">
              <option selected value="4.0">
                4.0&nbsp;
              </option>
              <option value="5.0">5.0&nbsp;</option>
              <option value="6.0">6.0&nbsp;</option>
              <option value="7.0">7.0&nbsp;</option>
            </select>
          </div>

          <div className="option-menu">
            <label className="option-menu__label" for="games-select">
              Games
            </label>

            <select className="option-menu__select" name="games" id="games">
              <option selected value="1">
                1&nbsp;
              </option>
              <option value="2">2&nbsp;</option>
              <option value="3">3&nbsp;</option>
              <option value="4">4&nbsp;</option>
            </select>
          </div>
        </div>

        <div className="playerCard">
          <header className="playerCard__header">
            <h4 className="heading-4">PLAYER NAME</h4>
            <h4 className="heading-4">POSITION</h4>
          </header>
          <div className="playerCard-content">
            <ul className="playerCard-content__search-filter-results">
              <li className="playerStats playerStats--stat-green">
                Points: 55
              </li>
              <li className="playerStats playerStats--stat-red">Goals: 4</li>
              <li className="playerStats playerStats--stat-green">
                Bonus points: 3
              </li>
            </ul>
          </div>
        </div>
        <div className="required-players-info">
          <header className="required-players-info__header">
            <h4>Players Required</h4>
          </header>
          <div className="required-players-content">
            <ul className="required-players-content__players">
              <li className="required-player">1 mid </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="tab-content__buttons">
        <button className="btn btn--myTeam">&rarr; My Team</button>
        <button className="btn btn--addPlayer">&rarr; Add Player</button>
      </div>
      <section className="filters">
        <header className="filters-header">
          <h4 className="filters-header__title">Choose Filters:</h4>
        </header>
        <div className="filters__content">
          <input type="checkbox" id="points" name="points" hidden />
          <label className="filters__btn filters__btn--active" for="points">
            points
          </label>
          <input type="checkbox" id="mins played" name="mins played" hidden />
          <label className="filters__btn" for="mins played">
            mins played
          </label>
          <input type="checkbox" id="assists" name="assists" hidden />
          <label className="filters__btn" for="assists">
            assists
          </label>
          <input type="checkbox" id="goals scored" name="goals scored" hidden />
          <label
            className="filters__btn filters__btn--active"
            for="goals scored"
          >
            goals scored
          </label>
          <input type="checkbox" id="form" name="form" hidden />
          <label className="filters__btn" for="form">
            form
          </label>
          <input type="checkbox" id="yellow cards" name="yellow cards" hidden />
          <label className="filters__btn" for="yellow cards">
            yellow cards
          </label>
          <input type="checkbox" id="red cards" name="red cards" hidden />
          <label className="filters__btn" for="red cards">
            red cards
          </label>
          <input type="checkbox" id="clean sheets" name="clean sheets" hidden />
          <label className="filters__btn" for="clean sheets">
            clean sheets
          </label>
          <input type="checkbox" id="bonus points" name="bonus points" hidden />
          <label
            className="filters__btn filters__btn--active"
            for="bonus points"
          >
            bonus points
          </label>
          <input type="checkbox" id="selected" name="selected" hidden />
          <label className="filters__btn" for="selected">
            selected
          </label>
          <input type="checkbox" id="ICT index" name="ICT index" hidden />
          <label className="filters__btn" for="ICT index">
            ICT index
          </label>
          <input type="checkbox" id="influence" name="influence" hidden />
          <label className="filters__btn" for="influence">
            influence
          </label>
          <input type="checkbox" id="creativity" name="creativity" hidden />
          <label className="filters__btn" for="creativity">
            creativity
          </label>
          <input type="checkbox" id="threat" name="threat" hidden />
          <label className="filters__btn" for="threat">
            threat
          </label>
        </div>
        <div className="search-reset-buttons">
          <button className="btn btn--reset">Reset</button>
          <button className="btn btn--search">Search</button>
        </div>
      </section>
    </section>
  </>
);

export default PlayerSelector;
