"use server"
import { Resend } from 'resend';
import {EmailTemplate} from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
interface EmailProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendEmailBasic({firstName,lastName,email,subject,message}:EmailProps) {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['info@nelioncare.co.uk'],
            subject: subject,
            react: EmailTemplate({firstName,lastName,email,message,subject}),
        });
        return {status:true, error:""};
    } catch (error:any) {
        return {status:false, error:error.message};
    }

}