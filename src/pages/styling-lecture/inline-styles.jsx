export default function Page() {
  return (
    <div
      style={{
        color: "red",
        fontSize: "24px",
        fontWeight: "bold",
        "--my-custom-var": "green",
      }}
    >
      Inline styles are easy but messy
    </div>
  );
}
