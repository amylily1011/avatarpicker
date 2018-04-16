import React from "react";
import { render } from "react-dom";
import "./AvatarPicker.css";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import avatars from './avatar';

 export default class AvatarPicker extends React.Component {

     constructor(props) {
         super(props);

         this.toggle = this.toggle.bind(this);
         this.state = {
             popoverOpen: false,
             activeAvatar: avatars[0],
             avatarTemp: {}
         };
     }


     toggle() {
         this.setState({
             popoverOpen: !this.state.popoverOpen
         });
     }

     onSelectedAvatar(avatar) {
         this.setState({
             activeAvatar: avatar,
         });
         console.log(this.state.activeAvatar)
     }


    render() {

        return (
            <div>
                <a id="Popover1" onClick={this.toggle}>
                    <img className="circle" src={require(`./assets/${this.state.activeAvatar.src}`)} />
                </a>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Choose your avatar</PopoverHeader>
                    <PopoverBody>
                        <ul>
                            {avatars.map(avatar => <img key={avatar.id} src={require(`./assets/${avatar.src}`)}
                                                        className="circle"
                                                        onClick={this.onSelectedAvatar.bind(this)}   />)}

                        </ul>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}


