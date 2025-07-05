import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    console.log('環境変数確認:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS ? 'set' : 'not set',
      NODE_ENV: process.env.NODE_ENV
    });

    // 環境変数チェック
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('必要な環境変数が設定されていません');
    }
    // 管理者への通知メール
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `[お問い合わせ] ${data.subject}`,
      html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${data.name}</p>
        <p><strong>メールアドレス:</strong> ${data.email}</p>
        <p><strong>件名:</strong> ${data.subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>このメールは自動送信されました。</p>
      `,
    };

    // お客様への自動返信メール
    const clientMailOptions = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'お問い合わせありがとうございます - Nexeed Lab',
      html: `
        <h2>お問い合わせありがとうございます</h2>
        <p>${data.name} 様</p>
        <p>この度は、Nexeed Labにお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>
        <hr>
        <p><strong>件名:</strong> ${data.subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>内容を確認の上、2-3営業日以内にご返信いたします。</p>
        <p>お急ぎの場合は、直接お電話でお問い合わせください。</p>
        <br>
        <p>Nexeed Lab</p>
        <p>メール: ${process.env.SMTP_USER}</p>
        <p>電話: 08061760627</p>
      `,
    };

    // メール送信
    console.log('管理者メール送信開始...');
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log('管理者メール送信結果:', adminResult);
    
    console.log('お客様メール送信開始...');
    const clientResult = await transporter.sendMail(clientMailOptions);
    console.log('お客様メール送信結果:', clientResult);

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}