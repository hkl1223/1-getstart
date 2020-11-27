import $ from 'jquery'
import './carousel.css';

const carousel = {
    init(){
        console.log('carousel init...')
        this.render()
    },
    render(){
        $('body').append($('<div id="carousel">我是轮播</div>'))
    }
}
module.exports = carousel

//export {carousel}