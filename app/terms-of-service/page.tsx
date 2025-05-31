import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: '利用規約',
  description: 'Nexeed Labの利用規約について説明します。',
});

export default function TermsOfServicePage() {
  return (
    <div className="py-16">
      <div className="container max-w-4xl">
        <SectionHeading
          title="利用規約"
          description="サービスのご利用にあたって"
        />
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. 適用</h2>
            <p>
              本規約は、当社が提供するすべてのサービス（以下「本サービス」）の利用に適用されます。
              本サービスをご利用いただくお客様（以下「ユーザー」）は、本規約に同意したものとみなされます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. サービスの提供</h2>
            <p>当社は以下の条件でサービスを提供します：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>サービス内容は、当社の判断により予告なく変更される場合があります</li>
              <li>システムメンテナンス等により、一時的にサービスを停止する場合があります</li>
              <li>不測の事態により、予告なくサービスを停止する場合があります</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. 禁止事項</h2>
            <p>ユーザーは以下の行為を行ってはいけません：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者の名誉を毀損する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>不正アクセスを試みる行為</li>
              <li>他のユーザーに迷惑をかける行為</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. 知的財産権</h2>
            <p>
              本サービスに関する知的財産権は、すべて当社または正当な権利者に帰属します。
              ユーザーは、当社の書面による事前の承諾なく、これらを複製、転載、改変、販売等を行うことはできません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. 免責事項</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>当社は、本サービスの完全性、正確性、有用性等を保証するものではありません</li>
              <li>当社は、本サービスの利用により生じた損害について、一切の責任を負いません</li>
              <li>当社は、ユーザー間のトラブルについて、一切の責任を負いません</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. 規約の変更</h2>
            <p>
              当社は、必要に応じて本規約を変更することができます。
              変更後の規約は、当ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. 準拠法・管轄裁判所</h2>
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. お問い合わせ</h2>
            <p>
              本規約に関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <div className="mt-4">
              <p>Nexeed Lab</p>
              <p>メール：orfevre_gk_6.27@icloud.com</p>
              <p>電話：08061760627</p>
              <p>所在地：大阪府門真市</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}