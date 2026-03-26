import { AppNavbar } from './Navbar';
import { Footer } from './Footer';

export function RoleLayout({ title, menuItems, children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppNavbar title={title} menuItems={menuItems} />
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}