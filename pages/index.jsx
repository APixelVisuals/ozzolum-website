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

        </div>
    )

    componentDidMount = () => {

        //Animate description list
        setInterval(async () => {

            if ((this.state.descriptionListOffset / 400) === 4) await this.setState({ descriptionListOffset: 0, descriptionListReset: true });

            await (() => new Promise(resolve => setTimeout(resolve, 100)))();

            this.setState({ descriptionListOffset: this.state.descriptionListOffset + 400, descriptionListReset: false });
        }, 3000);
    }
};