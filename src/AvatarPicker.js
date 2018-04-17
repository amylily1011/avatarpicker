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
             avatarTemp: {},
         };
     }


     toggle() {
         this.setState({
             popoverOpen: !this.state.popoverOpen
         });
     }

     onSelectedAvatar(avatar) {
         avatar.isLoading = true;
         this.setState({
             activeAvatar: avatar,
         });
         console.log(this.state.activeAvatar)

         setTimeout(() => {
             //This part is supposed to imitate the API post request.
             avatar.isLoading = false;
             this.setState({
                 activeAvatar: avatar,
                 popoverOpen: false,
             });
         }, 1000);
     }


    render() {
        const classLoading = this.state.activeAvatar.isLoading ? 'spinner' : '';
        const classAvatarLoading = `circle ${ classLoading }`;

        return (
            <div className="avatar-container">
                <a id="Popover" onClick={this.toggle}>
                    <img className="circle main-avatar" src={require(`./assets/${this.state.activeAvatar.src}`)} />
                </a>

                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover" toggle={this.toggle}>
                    <PopoverHeader className="pop-header">Choose your avatar</PopoverHeader>
                    <PopoverBody>
                        <ul className="popover-space">
                            {avatars.map(avatar => <img alt={avatar.label} key={avatar.id} src={require(`./assets/${avatar.src}`)}
                                                        className={classAvatarLoading}
                                                        onClick={this.onSelectedAvatar.bind(this,avatar)} />)}
                        </ul>
                    </PopoverBody>
                </Popover>

            </div>
        );
    }
}


