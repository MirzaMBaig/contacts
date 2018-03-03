import React from 'react';
import propTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

class ListContacts extends React.Component {


    state = {
        queryString: ""

    }

    clearQuery = () =>  {
        this.setState({queryString: ""});
    }


    render() {
        let showingContact = [];
        let contacts = this.props.contacts || [];
        console.log("contacts -- "+contacts.length);

        if(this.state.queryString){
            let match = new RegExp(escapeRegExp(this.state.queryString), 'i');
            showingContact = contacts.filter(contact => match.test(contact.name));

        }else{
            showingContact = contacts;
        }
        showingContact.sort(sortBy('name'));

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input className="search-contacts" name="search" value={this.state.queryString}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>

                {showingContact.length!== this.props.contacts && (
                    <div className="showing-contacts">
                        <span>Now showing {showingContact.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {
                        showingContact.map(contact =>
                            <li key={contact.id} className='contact-list-item'>
                                <div className='contact-avatar' style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}>
                                </div>
                                <div classID='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.email}</p>
                                </div>
                                <button onClick={() => this.props.onDeleteContact(contact)} name='Remove'>Remove
                                </button>
                            </li>
                        )
                    }
                </ol>
            </div>
        )
    }

    updateQuery = (value) => {
        this.setState({
            queryString: value
        })
    }
}

ListContacts.propTypes = {
    contacts: propTypes.array.isRequired,
    onDeleteContact: propTypes.func.isRequired

}

export default ListContacts;
