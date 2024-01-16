import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export function EmailTemplate({firstName,lastName,email,message}:EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
            <h1>Welcome, {lastName}!</h1>
            <h1>Welcome, {email}!</h1>
            <h1>Welcome, {message}!</h1>
        </div>
    )

}
