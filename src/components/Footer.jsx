export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Ye Ethiopia Tour 🇪🇹</p>

      <p>Discover Ethiopia. Plan your journey.</p>
    </footer>
  );
}
