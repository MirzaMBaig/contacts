import React from 'react';
import ListContacts from "./ListContacts";
import * as contactApi from "./utils/ContactsAPI"


class App extends React.Component {

    state = {
        contacts: []
    }

    removeContact = (contact) => {
        this.setState((state) => ({
                contacts: state.contacts.filter((c) => c.id !== contact.id)
            }
        ))
    }

    componentDidMount(){
        contactApi.getAll().then(contactsServ => this.setState({contacts:contactsServ}));
        console.log(this.state.contacts);
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
