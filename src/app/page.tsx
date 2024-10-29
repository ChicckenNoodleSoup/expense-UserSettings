import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to VSCODE Expense</h1>
      <Link href="/userSettings">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to User Settings
        </div>
      </Link>
    </div>
  );
}
