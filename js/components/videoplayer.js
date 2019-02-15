import React, {Component} from 'react'
import Player, { ControlBar } from 'video-react'
import posed from 'react-pose'

export default class VideoPlayer extends Component {
    constructor() {
        super() 

        this.state = {
            source: '../img/iphonexs.mp4'
        }

    }

    render() {
        return(
            <>
                <section className="iphone-repair">
                    <div className="iphone-player">
                        <h1 className="adv">Ремонт iPhone та переваги ремонту у нас</h1>
                        <div className="iphone-video">
                            <video className="ivideo" aria-label="Introductory animation for iPhone XS." data-source-locale="us" data-source-name="hero" muted="" playsInline="" src={this.props.link} autoPlay></video>
                            {/* <Player ref="player"> */}
                                {/* <source source={this.state.source} /> */}
                                {/* <ControlBar /> */}
                            {/* </Player> */}
                        </div>
                    </div>
                </section>  
            </>
        )
    }
}