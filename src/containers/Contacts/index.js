import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import deleteContact from '../../context/actions/contacts/deleteContact';
import getContacts from '../../context/actions/contacts/getContacts';
import starUnstar from '../../context/actions/contacts/starUnstar';
import { GlobalContext } from '../../context/Provider';
import ContactcsListUI from '../../layout/Contacts/List';

const ContactsContainer = () => {

    const { contactsDispatch, contactsState } = useContext(GlobalContext);

    const history = useHistory();

    const {
        contacts: { data },
    } = contactsState;

    const handleDeleteContact = (id) => {
        deleteContact(id)(contactsDispatch);
    };

    const handleStarUnstarContact = (id,is_favorite) => {
        starUnstar(id, !is_favorite)(contactsDispatch);
    };

    useEffect(() => {
        if (data.length === 0) {
            getContacts(history)(contactsDispatch);
        }
    }, []);

    return (<ContactcsListUI starUnstarContact={handleStarUnstarContact} state={ contactsState } deleteContact={handleDeleteContact} />);
};
export default ContactsContainer;