import React from "react";
import Head from "components/Head";
import NavBar from "components/NavBar";
import "./index.scss";

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = { descriptionListOffset: 0 };
    }

    render = () => (
        <div id="index">

            <Head
                title="Ozzolum"
                description="Ozzolum is an RPG game that you can play on Discord"
            />
            <NavBar />

            <div className="intro">

                <h1 className="title">Ozzolum</h1>
                <p className="description">Ozzolum is an RPG game that you can play on Discord</p>

                <div className="description-list">

                    <div className="window">
                        <ul style={{ transform: `translate(-${this.state.descriptionListOffset}px, 0)`, transition: this.state.descriptionListReset ? "none" : "2s" }}>
                            <li>Interact with the world</li>
                            <li>Collect resources</li>
                            <li>Fight enemies</li>
                            <li>Complete quests</li>

                            <li>Interact with the world</li>
                        </ul>
                    </div>

                    <div className="fade" />

                </div>

            </div>
            <div className="intro-end" />

            <div className="how-it-works">

                <h1 className="title">How It Works</h1>

                <div className="steps">

                    <div className="step">
                        <p className="name">Join the Server</p>
                        <p className="description">You can play Ozzolum on our server, <a href="/join" target="_blank">The Realm of Ozzolum</a>.</p>
                    </div>

                    <div className="step">
                        <p className="name">Start a Game</p>
                        <p className="description">Start a game by using the <code>o!start</code> command in the <span>#home</span> channel.</p>
                    </div>

                    <div className="step">
                        <p className="name">Learn About Gameplay</p>
                        <p className="description">Learn how to play and find some useful tips and tricks on the <a href="/wiki/getting-started" target="_blank">Getting Started guide</a> on the Wiki.</p>
                    </div>

                </div>

            </div>

            <div className="features">

                <h1 className="title">Features</h1>

                <div className="features-list">

                    <div className="feature">

                        <img className="icon" src="/static/menu.svg" alt="Feature name icon" />

                        <div className="content">
                            <p className="name">Variety</p>
                            <p className="description">Ozzolum has tons of different items to collect and locations to explore. While each location has its own set of resources, different times of the day and seasons of the year can change things up as you play to keep things fresh.</p>
                        </div>

                    </div>

                    <div className="feature right">

                        <div className="content">
                            <p className="name">Exploration</p>
                            <p className="description">Exploration is a very interactive experience that has a heavy amount of random generation. When you start exploring a location, you can gather resources, fight enemies, find dungeons, and unlock achievements.</p>
                        </div>

                        <img className="icon" src="/static/menu.svg" alt="Feature name icon" />

                    </div>

                    <div className="feature">

                        <img className="icon" src="/static/menu.svg" alt="Feature name icon" />

                        <div className="content">
                            <p className="name">Fighting</p>
                            <p className="description">The fighting system is turn-based, but has a wide range of moves for both the player and the enemy. Attacks range from melee, to range, to magic, and include swords, bows, wands, and even spells.</p>
                        </div>

                    </div>

                    <div className="feature right">

                        <div className="content">
                            <p className="name">NPCs &amp; Quests</p>
                            <p className="description">There are lots of NPCs to interact with and plenty of quests to guide you through the game. There's a main questline, as well as tons of side quests, that involve all kinds of things ranging from gathering items to rescuing NPCs.</p>
                        </div>

                        <img className="icon" src="/static/menu.svg" alt="Feature name icon" />

                    </div>

                    <div className="feature">

                        <img className="icon" src="/static/menu.svg" alt="Feature name icon" />

                        <div className="content">
                            <p className="name">Image-Based</p>
                            <p className="description">Although the game is interacted with through text on Discord, images are generated for a lot of commands to help you engage better so you have something interesting to look at as opposed to just text.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

    componentDidMount = () => {

        //Animate description list
        this.descriptionListAnimationInterval = setInterval(this.descriptionListAnimation, 3000);
    }

    componentWillUnmount = () => clearInterval(this.descriptionListAnimationInterval);

    descriptionListAnimation = async () => {

        if ((this.state.descriptionListOffset / 400) === 4) await this.setState({ descriptionListOffset: 0, descriptionListReset: true });

        await (() => new Promise(resolve => setTimeout(resolve, 100)))();

        this.setState({ descriptionListOffset: this.state.descriptionListOffset + 400, descriptionListReset: false });
    }
};