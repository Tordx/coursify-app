declare module 'react-native-smtp-mailer' {
  export interface MailerOptions {
    subject: string;
    recipients: string[];
    ccRecipients?: string[];
    bccRecipients?: string[];
    body?: string;
    isHTML?: boolean;
  }

  interface Mailer {
    mail(options: MailerOptions, callback: (error: any, event: any) => void): void;
  }

  const mailer: Mailer;
  export default mailer;
}