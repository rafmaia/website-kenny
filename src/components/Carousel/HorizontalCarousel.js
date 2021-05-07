import React, { Component } from 'react';
// import styled from 'styled-components';

import Card from './Card.js';

class HorizontalCarousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            current_card: 1,
            current_img_width_as_percentage: 0 
        }
    }

    componentWillMount() {
        const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 : (styles.media.max_image_size / window.screen.availWidth) * 100;

        this.setState({ current_img_width_as_percentage: img_width_as_percentage });
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.view_port.style.width = `${this.state.current_img_width_as_percentage}vw`;
        const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);

        this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
        this.card_container.append(first_card_clone);

        this.card_container.style.transitionDuration = "0.0s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;

        //set button container and dimensions here
        this.button_container.style.width = window.innerWidth < styles.media.min_width ?
          `${this.state.current_img_width_as_percentage - 10}vw` :
          `${this.state.current_img_width_as_percentage + 10}vw`;

        let button_width_as_percentage = window.innerWidth < styles.media.min_width ?
            5 :
            ((styles.button.button_width / styles.media.max_img_size) * 100) * 0.30;

        let button_height_as_percentage = window.innerWidth < styles.media.min_width ?
            5 :
            ((styles.button.height / styles.button.width) * button_width_as_percentage);

        this.button_previous.style.width = `${button_width_as_percentage}vw`;
        this.button_next.style.width = `${button_width_as_percentage}vw`;  

        this.button_previous.style.height = `${button_height_as_percentage}vw`;  
        this.button_next.style.height = `${button_height_as_percentage}vw`;      

        window.addEventListener('resize', () => {
                const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 : (styles.media.max_image_size / window.screen.availWidth) * 100;
                
                for (let i = 0; i < this.card_container.children.length; i++) {
                    this.card_container.children[i].style.width = `${img_width_as_percentage}vw`;
                }

                
                this.view_port.style.width = `${img_width_as_percentage}vw`;

                const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

                this.card_container.style.transitionDuration = "0.0s";
                this.card_container.style.transform = `translate(-${this.state.current_card * img_width_in_pixels}px)`;  

                //set button container and dimensions here
                this.button_container.style.width = window.innerWidth < styles.media.min_width ?
                `${img_width_as_percentage - 10}vw` :
                `${img_width_as_percentage + 10}vw`;

                button_width_as_percentage = window.innerWidth < styles.media.min_width ?
                    10 :
                    ((styles.button.button_width / styles.media.max_img_size) * 100) * 0.30;

                button_height_as_percentage = window.innerWidth < styles.media.min_width ?
                    10 :
                    ((styles.button.height / styles.button.width) * button_width_as_percentage);

                this.button_previous.style.width = `${button_width_as_percentage}vw`;
                this.button_next.style.width = `${button_width_as_percentage}vw`;  

                this.button_previous.style.height = `${button_height_as_percentage}vw`;  
                this.button_next.style.height = `${button_height_as_percentage}vw`
            });
        });        
    }

    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length - 1) {
            let new_current_card = this.state.current_card + 1;
            const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

            this.setState({current_card: new_current_card}, () => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

            if (this.state.current_card === this.card_container.children.length - 1) {
                setTimeout(() => {
                    this.card_container.style.transitionDuration = "0.0s";
                    this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;

                    this.setState({current_card: 1});
                }, 502);
            }
        });
        } else {
            return;
        }
    }
    
    handle_previous = () => {
        if (this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1;
            const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

            this.setState({current_card: new_current_card}, () => {
            this.card_container.style.transitionDuration = "0.5s";
            this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

            if (this.state.current_card === 0) {
                setTimeout(() => {
                    this.card_container.style.transitionDuration = "0.0s";
                    this.card_container.style.transform = `translate(-${img_width_in_pixels * (this.card_container.children.length - 2)}px)`;

                    this.setState({current_card: this.card_container.children.length - 2});
                }, 502);
            }
        });
        } else {
            return;
        }     
    }

    render() {
        return (
            <div>
            <div ref={ref_id => this.button_container = ref_id} style={styles.button_container}>
                {/*<div ref={ref_id => this.button_previous = ref_id} style={styles.button} onClick={this.handle_previous}></div>
                <div ref={ref_id => this.button_next = ref_id} style={styles.button} onClick={this.handle_next}></div>*/}
                <img src='https://image.flaticon.com/icons/png/512/64/64491.png' alt="prev" ref={ref_id => this.button_previous = ref_id} style={styles.button} onClick={this.handle_previous} />
                <img src='https://image.flaticon.com/icons/png/512/64/64491.png' alt="next" ref={ref_id => this.button_next = ref_id} style={styles.button} onClick={this.handle_next} />
            </div>
            {/* <button onClick={this.handle_previous}>Previous</button>
            <button onClick={this.handle_next}>Next</button> */}
                <div ref={ref_id => this.view_port = ref_id} className="view-port" style={styles.view_port}>    
                    <div ref={ref_id => this.card_container = ref_id} className="card-container" style={styles.card_container}>
                        <Card card_number="https://live.staticflickr.com/65535/50534448926_e08cda6733_b.jpg" resize_width={this.state.current_img_width_as_percentage} />  
                        <Card card_number="https://live.staticflickr.com/65535/50534404211_4c445e30ed_k.jpg" resize_width={this.state.current_img_width_as_percentage} />  
                        <Card card_number="https://live.staticflickr.com/65535/50534557457_d2f7f73734_k.jpg" resize_width={this.state.current_img_width_as_percentage} />  
                        <Card card_number="https://live.staticflickr.com/65535/50534557407_3b7927ba2d_b.jpg" resize_width={this.state.current_img_width_as_percentage} />           
                    </div>
                </div>    
            </div>
        )
    }
}


const styles = {
    view_port: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        overflow: 'hidden'
    },
    card_container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    },
    media: {
        max_image_size: 700,
        min_width: 768
    },
    button: {
        width: 80,
        height: 80
    },
    button_container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 300
    }
}

export default HorizontalCarousel;
