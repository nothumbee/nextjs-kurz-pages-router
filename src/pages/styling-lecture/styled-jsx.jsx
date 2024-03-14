import React from "react";

export default function StyledJsxPage() {
  return (
    <div>
      <p>Hello</p>

      <style jsx>
        {`
          p {
            color: blue !important;
          }
        `}
      </style>

      <style jsx>{`
        p {
          color: green;
        }
      `}</style>

      <style global jsx>{`
        a {
          color: yellow !important;
        }
      `}</style>
    </div>
  );
}
