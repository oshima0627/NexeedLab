import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/40 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              最新技術を活用したインテリジェントなデジタルソリューションで、ビジネスの変革をサポートします。
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">サービス</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#ai-web-apps" className="text-muted-foreground hover:text-primary transition-colors">AIアプリケーション開発</Link></li>
                <li><Link href="/services#website-design" className="text-muted-foreground hover:text-primary transition-colors">Webサイト制作</Link></li>
                <li><Link href="/services#business-systems" className="text-muted-foreground hover:text-primary transition-colors">業務システム開発</Link></li>
                <li><Link href="/services#maintenance" className="text-muted-foreground hover:text-primary transition-colors">保守・運用</Link></li>
                <li><Link href="/services#seo-meo" className="text-muted-foreground hover:text-primary transition-colors">SEO・MEO対策</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">会社情報</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">会社概要</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">実績紹介</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">ブログ</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">お問い合わせ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">規約</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">プライバシーポリシー</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">利用規約</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Nexeed Lab. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}