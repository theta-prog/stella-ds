/**
 * Header – Stella UI
 *
 * Flexible site header with sticky + blur support.
 * Compound component pattern: Header, HeaderBrand, HeaderNav, HeaderActions.
 */

import * as React from 'react';
import styles from './Header.module.css';

// ----------------------------------------------------------------
// Types
// ----------------------------------------------------------------

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Makes the header stick to the top of the viewport (default: false) */
  sticky?: boolean;
  /** Applies a backdrop blur when sticky (default: true) */
  blur?: boolean;
  /** Mobile nav content (shown in hamburger menu). If not provided, HeaderNav children are used */
  mobileNav?: React.ReactNode;
}

export type HeaderBrandProps = React.HTMLAttributes<HTMLDivElement>;
export type HeaderNavProps = React.HTMLAttributes<HTMLElement>;
export type HeaderActionsProps = React.HTMLAttributes<HTMLDivElement>;

// ----------------------------------------------------------------
// Internal context for mobile panel
// ----------------------------------------------------------------

interface HeaderContextValue {
  mobileOpen: boolean;
  navChildren: React.ReactNode;
  setNavChildren: (children: React.ReactNode) => void;
}

const HeaderContext = React.createContext<HeaderContextValue | null>(null);

// ----------------------------------------------------------------
// Header (Root)
// ----------------------------------------------------------------

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    { sticky = false, blur = true, mobileNav, className, children, ...props },
    ref,
  ) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [navChildren, setNavChildren] = React.useState<React.ReactNode>(null);

    const cls = [
      styles.header,
      sticky ? styles.sticky : '',
      sticky && blur ? styles.blur : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const mobilePanelContent = mobileNav ?? navChildren;

    return (
      <HeaderContext.Provider value={{ mobileOpen, navChildren, setNavChildren }}>
        <header
          ref={ref}
          className={cls}
          data-mobile-open={mobileOpen ? 'true' : undefined}
          {...props}
        >
          <div className={styles.headerBar}>
            {children}
            {mobilePanelContent != null && (
              <button
                type="button"
                className={styles.hamburger}
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
                <span className={styles.hamburgerLine} />
              </button>
            )}
          </div>
          {mobilePanelContent != null && mobileOpen && (
            <div className={styles.mobilePanel}>{mobilePanelContent}</div>
          )}
        </header>
      </HeaderContext.Provider>
    );
  },
);

Header.displayName = 'Header';

// ----------------------------------------------------------------
// HeaderBrand
// ----------------------------------------------------------------

export const HeaderBrand = React.forwardRef<HTMLDivElement, HeaderBrandProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={[styles.brand, className ?? ''].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  ),
);

HeaderBrand.displayName = 'HeaderBrand';

// ----------------------------------------------------------------
// HeaderNav
// ----------------------------------------------------------------

export const HeaderNav = React.forwardRef<HTMLElement, HeaderNavProps>(
  ({ className, children, ...props }, ref) => {
    const ctx = React.useContext(HeaderContext);

    React.useEffect(() => {
      if (ctx) {
        ctx.setNavChildren(children);
      }
    });

    return (
      <nav
        ref={ref}
        className={[styles.nav, className ?? ''].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </nav>
    );
  },
);

HeaderNav.displayName = 'HeaderNav';

// ----------------------------------------------------------------
// HeaderActions
// ----------------------------------------------------------------

export const HeaderActions = React.forwardRef<
  HTMLDivElement,
  HeaderActionsProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={[styles.actions, className ?? ''].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </div>
));

HeaderActions.displayName = 'HeaderActions';
