import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
	title: 'Capstone Matching',
	description: 'Capstone Matching - Home Page',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
  return (
    <html lang="en">
      	<body>
			{children}
			<Footer/>
		</body>
    </html>
  )
}
