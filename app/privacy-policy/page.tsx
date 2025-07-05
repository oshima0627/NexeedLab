import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: 'プライバシーポリシー',
  description: 'Nexeed Labのプライバシーポリシーについて説明します。',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <SectionHeading
          title="プライバシーポリシー"
          description="個人情報の取り扱いについて"
        />
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. 個人情報の収集・利用目的</h2>
            <p>当社は、以下の目的で個人情報を収集・利用いたします：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>サービスの提供、維持、改善のため</li>
              <li>お問い合わせへの対応のため</li>
              <li>新サービスや更新情報のご案内のため</li>
              <li>サービスの利用状況の分析のため</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. 収集する情報</h2>
            <p>当社が収集する情報には以下が含まれます：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>お問い合わせ内容</li>
              <li>サービス利用履歴</li>
              <li>アクセスログ情報</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. 個人情報の管理</h2>
            <p>当社は、個人情報の管理について以下の対策を実施しています：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>個人情報への不正アクセス防止のためのセキュリティ対策</li>
              <li>個人情報の取り扱いに関する社内規程の整備</li>
              <li>個人情報を取り扱う従業員への教育の実施</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
            <p>当社は、以下の場合を除き、個人情報を第三者に提供いたしません：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p>
              ご本人からの個人情報の開示、訂正、削除のご要請があった場合、合理的な期間内に対応いたします。
              ただし、法令に基づき保管が必要な情報は、この限りではありません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <div className="mt-4">
              <p>Nexeed Lab</p>
              <p>メール：oshima6.27@gmail.com</p>
              <p>電話：08061760627</p>
              <p>所在地：大阪府門真市</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}