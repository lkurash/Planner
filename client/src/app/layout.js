import "./globals.scss";
import styles from "./page.module.scss";
import Dashboard from "./components/Dashboard";
import SideMenu from "./components/SideMenu";
import { mukta, raleway } from "./styles/fonts";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Inspiration Organizer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mukta.variable} ${raleway.variable}`}>
        <Dashboard />
        <div className={styles.wrapper}>
          <SideMenu />
          <StoreProvider children={children} />
        </div>
      </body>
    </html>
  );
}
