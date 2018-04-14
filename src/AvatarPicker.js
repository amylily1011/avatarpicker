import React from "react";
import { render } from "react-dom";
import "./AvatarPicker.css";
import avatar1 from './assets/avatar1.png';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

 export default class AvatarPicker extends React.Component {

     constructor(props) {
         super(props);

         this.toggle = this.toggle.bind(this);
         this.state = {
             popoverOpen: false
         };
     }

     toggle() {
         this.setState({
             popoverOpen: !this.state.popoverOpen
         });
     }

    render() {

         const avatars = [
             { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
             { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
             { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
             { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
             { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
             { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
         ];

        return (
            <div>
                <a id="Popover1" onClick={this.toggle}>
                    <img className="circle" src={avatar1} />
                </a>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Choose your avatar</PopoverHeader>
                    <PopoverBody>
                        <ul>
                            {avatars.map(avatar => <img src={require(`./assets/${avatar.src}`)} className="circle" />)}
                        </ul>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}


