import Link from "next/link";
import MyLink from "./MyLink/MyLink";

export default function Page() {
  return (
    <div className="text-center">
      <h1 className="font-bold font-sans my-12 text-4xl">Am I Pretty?</h1>
      <h2 className="font-sans font-medium my-12 text-xl text-red-500">
        Of course!
      </h2>

      <ul>
        <li>
          <MyLink href="/styling-lecture/css-module">
            Custom Link using CSS Modules
          </MyLink>
        </li>
        <li>
          <Link href="/styling-lecture/css-module">CSS Modules</Link>
        </li>
        <li>
          <Link href="/styling-lecture/sass-module">SASS Modules</Link>
        </li>
        <li>
          <Link href="/styling-lecture/inline-styles">Inline Styles</Link>
        </li>
        <li>
          <Link href="/styling-lecture/styled-jsx">Styled JSX</Link>
        </li>
        <li>
          <Link href="/styling-lecture/styled-components">
            Styled Components
          </Link>
        </li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
