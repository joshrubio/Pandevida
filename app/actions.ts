'use server';

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error('RESEND_API_KEY is missing');
        return { error: 'Server configuration error: Missing API Key' };
    }

    const resend = new Resend(apiKey);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Please fill in all fields' };
    }

    try {
        const data = await resend.emails.send({
            from: 'Pan de Vida <onboarding@resend.dev>',
            to: ['khubzalhayat@gmail.com'],
            replyTo: email, // This ensures when you click reply, it goes to the person who filled the form
            subject: `New Message from ${name} (${email})`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error) {
        return { error: 'Something went wrong' };
    }
}
