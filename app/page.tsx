import { Button } from "@/components/ui/button";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center justify-center h-full">
			<h2>Get Started</h2>
			<p className="mb-3">Join our community of students and educators to discover or propose capstone projects.</p>
			<Button variant="secondary">Login</Button>
		</main>
	);
}
