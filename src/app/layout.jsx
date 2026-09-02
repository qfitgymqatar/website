import { AdminProvider } from '@/context/AdminContext';
import '../index.css';
import '../App.css';

export const metadata = {
  title: 'QFit Gym Qatar | Ladies & Gents Fitness Center in Mansoura',
  description: 'Experience the ultimate fitness journey at QFit Gym in Mansoura, Qatar. State-of-the-art equipment, expert trainers, and dedicated spaces for everyone.',
  openGraph: {
    title: 'QFit Gym Qatar',
    description: 'Experience the ultimate fitness journey at QFit Gym in Mansoura, Qatar.',
    url: 'https://qfitgymqatar.com',
    siteName: 'QFit Gym',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
