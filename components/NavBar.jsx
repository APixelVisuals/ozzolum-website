import React from "react";
import "./navBar.scss";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <div id="nav-bar">

            <div className="content">

                <div className="logo"><a href="/"><img src="/static/ozzolum.svg" alt="Ozzolum logo" /></a></div>

                <ul className="items">
                    <li><a href="/wiki">Wiki</a></li>
                    <li><a href="/leaderboards">Leaderboards</a></li>
                    <li><a href="/stats">Stats</a></li>
                </ul>

                <div className="join-button"><a href="/join">Join</a></div>

                <div className="menu-button"><img src="/static/menu.svg" alt="Menu button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} /></div>

            </div>

            <div className={`menu ${this.state.menuOpen && "open"}`}>

                <a href="/join" className="join-button">Join</a>

                <ul className="items">
                    <li><a href="/wiki">Wiki</a></li>
                    <li><a href="/leaderboards">Leaderboards</a></li>
                    <li><a href="/stats">Stats</a></li>
                </ul>

            </div>

        </div>
    )
};