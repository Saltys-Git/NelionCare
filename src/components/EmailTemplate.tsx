import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Row,
    Link,
    Section,
    Text,
    Column,
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
                            © Copyright 2024 | <Link href="www.nelioncare.co.uk">Nelion Care Services</Link> By <Link href="www.mytechys.co.uk">Techy&apos;s World Ltd.</Link>
                        </Text>
                    </Container>
                </Section>
            </Body>
        </Html>
    );
};


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


interface EmailTemplateJoinProps {
    firstName: string;
    surName: string;
    email: string;
    contactNo:string;
    hasCV: boolean;
}

export const EmailTemplateJoin = ({firstName, surName, email, contactNo, hasCV}: EmailTemplateJoinProps) => {

    return (

        <Html>
            <Head/>
            <Preview>NelionCare Applicant Details</Preview>

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
                            NelionCare Applicant Details
                        </Text>
                        <Section style={{
                            paddingBottom: '20px',
                            marginBottom:"24px"
                        }}>
                                <Row style={{
                                    boxShadow:"5px 5px 15px gray",
                                    backgroundColor: '#f2f3f3',
                                    borderRadius: '8px',
                                }}>
                                    <Column>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            First Name :
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            Sur Name :
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            Email :
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            Contact No :
                                        </Text>
                                        {hasCV &&
                                            <Text style={{
                                                fontSize: '14px',
                                                lineHeight: '0.4',
                                                color: '#484848',
                                                padding: '0px 16px',
                                                fontWeight: "bold",
                                            }}>
                                                CV :
                                            </Text>
                                        }
                                    </Column>
                                    <Column colSpan={2}>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            {firstName}
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            {surName}
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            {email}
                                        </Text>
                                        <Text style={{
                                            fontSize: '14px',
                                            lineHeight: '0.4',
                                            color: '#484848',
                                            padding: '0px 16px',
                                            fontWeight: "bold",
                                        }}>
                                            {contactNo}
                                        </Text>
                                        {hasCV &&
                                            <Text style={{
                                                fontSize: '14px',
                                                lineHeight: '0.4',
                                                color: '#484848',
                                                padding: '0px 16px',
                                                fontWeight: "bold",
                                            }}>
                                                Attached with the mail
                                            </Text>
                                        }
                                    </Column>
                                </Row>
                        </Section>
                        <Text style={{
                            fontSize: '12px',
                            lineHeight: '1.4',
                            fontWeight: '700',
                            color: '#484848',
                            textAlign: 'center',
                        }}>
                            © Copyright 2024 | <Link href="www.nelioncare.co.uk">Nelion Care Services</Link> By <Link href="www.mytechys.co.uk">Techy&apos;s World Ltd.</Link>
                        </Text>
                    </Container>
                </Section>
            </Body>
        </Html>
    );
};
