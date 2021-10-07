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
        <div className="playerCard">
          <header className="playerCard__header">
            <h4>PLAYER NAME</h4>
            <p>xICONx</p>
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
    </section>
  </>
);

export default PlayerSelector;
