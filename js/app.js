import React, {Component} from 'react'
import posed from 'react-pose'

import HeaderBar from './components/headerBar'
import VideoPlayer from './components/videoplayer'

export default class App extends Component {
    state = {

    }

    render() {
        return (
            <>
                <HeaderBar desc="Стань учасником закритого клубу"/>
                <VideoPlayer link="../img/iphonexs.mp4"/>
            </>            
        )
    }
}