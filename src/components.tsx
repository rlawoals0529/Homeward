import type { ReactNode } from 'react';
import { Link } from 'react-router';

export function PageHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <p className="intro">{children}</p>}
    </header>
  );
}

export function ActionLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="action" to={to}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function PreviewNotice({ children }: { children: ReactNode }) {
  return (
    <aside className="notice" aria-label="Preview limitations">
      <strong>Foundation preview</strong>
      <p>{children}</p>
    </aside>
  );
}
