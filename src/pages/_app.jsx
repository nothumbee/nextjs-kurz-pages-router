import "@/styles/globals.css";

// Used for global styles and to wrap all pages
// Create a shared layout between page changes
// Inject additional data into pages

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 p-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
