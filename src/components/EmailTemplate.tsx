import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';


interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    subject:string;
}

export const EmailTemplate = ({firstName,lastName,email,message,subject}:EmailTemplateProps) => {
    return (
        <Html>
            <Head/>
            <Preview>{subject}</Preview>

            <Body style={main}>
                <Section style={main}>
                    <Container style={container}>
                        <Section>
                            <Img
                                src={`https://nelion-care.vercel.app/logo.svg`}
                                alt={"NelionCare Logo"}
                                width="200"
                                height="100"
                                style={{
                                    margin: '0 auto',
                                    marginTop: '24px',
                                }}
                            />
                        </Section>
                        <Text style={{
                            fontSize: '32px',
                            lineHeight: '1.3',
                            fontWeight: '700',
                            color: '#484848',
                            textAlign: 'center',
                        }}>
                            {subject} Data
                        </Text>
                        <Section style={{
                            paddingBottom: '20px',
                            marginBottom:"24px"
                        }}>
                            <Row>
                                <Section style={{
                                    boxShadow:"5px 5px 15px gray",
                                    backgroundColor: '#f2f3f3',
                                    borderRadius: '8px'
                                }}>
                                    <Text style={{
                                        fontSize: '14px',
                                        lineHeight: '0.4',
                                        color: '#484848',
                                        padding: '0px 16px',
                                        fontWeight: "bold",
                                    }}>
                                        Sent by : {firstName+" "+lastName}{"<"+email+">"}
                                    </Text>
                                    <Text style={{
                                        fontSize: '14px',
                                        lineHeight: '0.4',
                                        color: '#484848',
                                        padding: '0px 16px',
                                        fontWeight: "bold",
                                    }}>
                                        Sent at: {new Date().toLocaleString()}
                                    </Text>
                                    <Hr style={{
                                        borderColor: '#cccccc',
                                    }}/>
                                    <Text style={{
                                        fontSize: '14px',
                                        lineHeight: '0.4',
                                        color: '#484848',
                                        padding: '0px 16px',
                                        margin: '16px 0px 0px 0px',
                                        fontWeight: "bold",
                                    }}>
                                        Message:
                                    </Text>
                                    <Text style={{
                                        fontSize: '18px',
                                        lineHeight: '1.4',
                                        color: '#484848',
                                        margin: '12px 0px 16px 0px',
                                        padding: '0px 16px 0px 16px',
                                    }}>
                                        {message}
                                    </Text>
                                </Section>
                            </Row>
                        </Section>
                        <Text style={{
                            fontSize: '12px',
                            lineHeight: '1.4',
                            fontWeight: '700',
                            color: '#484848',
                            textAlign: 'center',
                        }}>
                            © Copyright 2024 | Nelion Care Services By Techy&apos;s.
                        </Text>
                    </Container>
                </Section>
            </Body>
        </Html>
    );
};

export default EmailTemplate;

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '2.5rem',
    width: '580px',
};
