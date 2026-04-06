import Link from "next/link";
import { cn } from "@/lib/cn";

const linkBase =
  "inline-flex h-11 items-center justify-center rounded-bnb-btn px-6 text-base font-medium transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bnb-ink focus-visible:ring-offset-2";

export default function Home() {
  return (
    <div className="mx-auto max-w-lg space-y-8 text-center md:max-w-xl">
      <div className="space-y-3">
        <h1 className="heading-section text-balance">
          営業最適化・経営可視化デモ
        </h1>
        <p className="text-body">
          提案用のモックアプリです。メニューまたは下のボタンから各ロール画面へ進めます。
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/sales"
          className={cn(
            linkBase,
            "bg-bnb-rausch text-white shadow-airbnb-card hover:bg-bnb-rauschDeep hover:shadow-airbnb-hover"
          )}
        >
          営業ダッシュボードへ
        </Link>
        <Link
          href="/manager"
          className={cn(
            linkBase,
            "bg-bnb-surface text-bnb-ink hover:shadow-airbnb-hover"
          )}
        >
          管理者画面へ
        </Link>
        <Link
          href="/executive"
          className={cn(
            linkBase,
            "border border-bnb-border bg-bnb-white text-bnb-ink shadow-airbnb-card hover:shadow-airbnb-hover"
          )}
        >
          経営画面へ
        </Link>
      </div>
    </div>
  );
}
