import React, {Component} from 'react';
import ListContacts from "./ListContacts";


class ContactList extends React.Component {


    render() {
        const names = this.props.contacts;
        return <ol>
            {
                names.map(name11 => <li key={name11}> {name11 + '!'} </li>)
            }
        </ol>
    }
}

class App extends Component {

    state = {

        contacts: [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

    removeContact = (contact) => {
        this.setState((state) => ({
                contacts: state.contacts.filter((c) => c.id !== contact.id)
            }
        ))
    }

    render() {
        return (
            <div>
                <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
            </div>
        );
    }
}

export default App;
