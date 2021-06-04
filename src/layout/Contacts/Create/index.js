import React, { useRef } from 'react';
import { Button, Card, Form, Grid, Header as SemanticHeader, Icon, Image, Select } from 'semantic-ui-react';
import Header from '../../../components/Header';
import "./index.css";
import countries from "../../../utils/countries";
import { Prompt } from 'react-router-dom';

const CreateContact = ({ onChange, onSubmit, formInvalid, formIsHalfFilled, loading, onImageChange, tempFile }) => {
    const imagePickRef = useRef(null);
    const choseImage = () => {
        if (imagePickRef.current) {
            imagePickRef.current.click();
        }
    };
    return (
        <div>
            <Prompt 
               when={formIsHalfFilled} 
               message= {JSON.stringify({
                   header: "Confirm",
                   content: "You have unsaved changes. Sure you want to leave?",
               })}
            />
            <Header />
            <Grid centered>
                <Grid.Column className="form-column">
                    <SemanticHeader>Create Contact</SemanticHeader>

                    <Card fluid>
                        <Card.Content>
                            <Form unstackable>
                                <input onChange={onImageChange} ref={imagePickRef} type="file" accept="images/*" hidden />
                                <div className="image-wrapper">
                                    {tempFile && <Image className="contactpicture" src={tempFile} />}
                                    {!tempFile && (
                                    <div onClick={choseImage} className="contactpicture">
                                        <span>Choose Image</span>
                                    </div>
                                    )}
                                    <Icon name="pencil" onClick={choseImage} />
                                </div>

                                <Form.Group widths={2}>
                                    <Form.Input 
                                       label="First Name" 
                                       name="firstName" 
                                       onChange={onChange} 
                                       placeholder="First Name" />
                                    <Form.Input 
                                       label="Last Name" 
                                       name="lastName" 
                                       onChange={onChange} 
                                       placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group widths={2}>
                                    <Form.Input 
                                       label="Country" 
                                       name="countryCode" 
                                       control={Select}
                                       options={countries}
                                       onChange={onChange} 
                                       placeholder="Country" />
                                    <Form.Input 
                                       label="PhoneNumber" 
                                       name="phoneNumber" 
                                       onChange={onChange} 
                                       placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Checkbox 
                                   label="Add to favourites" 
                                   name="isFavorite" 
                                   onChange={(e, data) => {
                                       onChange(e, { name: "isFavorite", value: data.checked });
                                   }} />
                                <Button disabled={formInvalid || loading} loading={loading} onClick={onSubmit} primary type="submit">Save Contact</Button>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default CreateContact;
