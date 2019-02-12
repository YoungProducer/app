import ImageWrapper from './image-wrapper'

export default class ImageList extends Component {
    state = {
        links: [
            '5s.jpg', 
            'se.jpg',
            '6.1.jpg',
            '6s.jpg',
            '6.3.jpg',
            '6s+.jpg',
            '7.1.jpg',
            '7+.jpg',
            '8.1.jpg',
            '8+.jpg'
        ]
    }

    createElements() {
        return this.state.links.map((phone) )
    }

    render() {

    }
}