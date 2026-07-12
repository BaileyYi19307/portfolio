import Link from "next/link";

export default function CaseShell({
  children,
  backHref = "/#projects",
  backLabel = "Back to Projects",
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="site-logo">
            Bailey Yi
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#outside">Outside</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="case-shell">
        <Link href={backHref} className="case-back">
          ← {backLabel}
        </Link>
        {children}
      </main>
    </>
  );
}
