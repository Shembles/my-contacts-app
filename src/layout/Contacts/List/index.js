import React from 'react';
import { Button, Container, Header, Icon, List, Message, Placeholder } from 'semantic-ui-react';
import AppHeader from '../../../components/Header';
import ImageThumb from '../../../components/ImageThumb';
import Favorites from '../Favorites';

const ContactcsListUI = ({ 
    deleteContact, starUnstarContact, 
    state: { 
        contacts: { loading, isSearchActive, foundContacts ,data },
    },
}) => {

    // const bgColor = Math.floor(Math.random(255));

    const currentContacts = isSearchActive ? foundContacts : data;
    return (
        <div>
            <AppHeader />
            <Container>
                <Header>FAVOURITES</Header>

                <Favorites
                   favorites={currentContacts.filter((item) => item.is_favorite)}
                   loading={loading}
                />

                <Header>ALL</Header>
                {loading && (
                    <>
                    {" "}
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                    </>
                )}
                {!loading && currentContacts.length === 0 && (
                  <Message content="No Contacts to show yet" />
                )}

                <List>
                    { currentContacts.length > 0 && 
                    currentContacts.map((contact) => (
                        <List.Item key={contact.id} disabled={contact.deleting}>
                            <List.Content floated="right">
                                <span>({contact.country_code}){" "}{contact.phone_number}</span>{" "}
                                <Button onClick={() => {starUnstarContact(contact.id, contact.is_favorite);}}>
                                    {contact.is_favorite ? "UNSTAR" : "STAR"}
                                </Button>
                                <Button color="red" size="tiny" onClick={() => {deleteContact(contact.id);}}>
                                    <Icon name="delete" />
                                </Button>
                            </List.Content>
                            <List.Content style={{ display: "flex", alignItems: "center"}}>
                                <ImageThumb 
                                    circular 
                                    firstName={contact.first_name} 
                                    lastName={contact.last_name} 
                                    src={contact.contact_picture}
                                    style={{ width: 45, height: 45 }}
                                />

                                <span>
                                  {contact.first_name}{" "} {contact.last_name}
                                  {" "}
                                  {contact.is_favorite && (<Icon name="heart" color="red" />)}
                                </span>
                            </List.Content>
                        </List.Item>
                        ))}
                </List>
            </Container>
        </div>
    );
};

export default ContactcsListUI;
