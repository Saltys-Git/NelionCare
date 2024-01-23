"use server"
import { Resend } from 'resend';
import {EmailTemplate, EmailTemplateJoin} from "@/components/EmailTemplate";

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

export async function sendEmailAttachment(data:FormData) {
    try {
        const firstName = data.get("firstName") as string;
        const surName = data.get("surName") as string;
        const email = data.get("email") as string;
        const contactNo = data.get("contactNo") as string;
        if(data.get("attachment") !== "") {
            const file = data.get("attachment") as unknown as File;
            const byte = await file.arrayBuffer();
            const buffer = Buffer.from(byte);
            await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['info@nelioncare.co.uk'],
                subject: "NelionCare Applicant Details",
                attachments: [
                    {
                        content: buffer,
                        filename: 'CV.pdf',
                    },
                ],
                react: EmailTemplateJoin({firstName,surName,email,contactNo,hasCV:true}),
            });
        }else{
            await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: ['info@nelioncare.co.uk'],
                subject: "NelionCare Applicant Details",
                react: EmailTemplateJoin({firstName,surName,email,contactNo,hasCV:false}),
            });
        }
        return {status:true, error:""};
    } catch (error:any) {
        return {status:false, error:error.message};
    }

}