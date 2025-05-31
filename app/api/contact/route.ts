import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// バリデーションスキーマ
const contactSchema = z.object({
  name: z.string().min(2, { message: "名前は2文字以上で入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  subject: z.string().min(5, { message: "件名は5文字以上で入力してください" }),
  message: z.string().min(10, { message: "メッセージは10文字以上で入力してください" }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    
    // ここで実際のメール送信処理を行う
    // 現在はコンソールにログを出力（開発用）
    console.log('お問い合わせを受信しました:', {
      name: validatedData.name,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });
    
    // 実際のプロダクションでは、ここでメール送信サービス（SendGrid、Resend等）を使用
    // または、データベースに保存する処理を追加
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。ありがとうございます。' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'バリデーションエラー',
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    console.error('コンタクトフォーム送信エラー:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'サーバーエラーが発生しました。しばらく後でもう一度お試しください。' 
      },
      { status: 500 }
    );
  }
} 