// app/layout.js
export const metadata = {
  title: "FIDCUS - Login",
  description: "Login page for FIDCUS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#192a67" }}>
        {children}
      </body>
    </html>
  );
}
