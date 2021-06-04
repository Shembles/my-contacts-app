import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header as SemanticHeader, Message, Segment } from 'semantic-ui-react';
import Header from '../../components/Header';

const LoginUI = ({ 
    form: { onChange, form, loginFormValid, error, onSubmit, loading },
}) => {
    return (
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <SemanticHeader style={{ textAlign: "center", fontSize: 24}}>Login Here</SemanticHeader>
                    <Segment>
                        <Form>
                            {error && <Message content={error?.detail} negative />}
                            <Form.Field>
                                <Form.Input 
                                  value={form.username || ""}
                                  onChange={onChange}
                                  name="username" 
                                  placeholder="Username" 
                                  label="Username"
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                  value={form.password || ""}
                                  onChange={onChange}
                                  name="password" 
                                  type="password" 
                                  placeholder="Password" 
                                  label="Password"
                                />
                            </Form.Field>

                            <Button 
                              onClick={onSubmit} 
                              loading={loading}
                              disabled={loginFormValid || loading} 
                              fluid 
                              primary 
                              type="submit">
                                  Login
                            </Button>
                            <Segment>
                                Need an account? <Link to="/auth/register">Register</Link>
                            </Segment>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LoginUI;
