import "./globals.css";
import * as motion from "motion/react-client";

export const metadata = {
  title: "Nate blogs",
  description: "A personal blog by Nate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <motion.body
        className="bg-white text-gray-900 dark:bg-neutral-900 dark:text-neutral-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}>
        {children}
      </motion.body>
    </html>
  );
}
