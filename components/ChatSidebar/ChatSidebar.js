import Link from "next/link";

export const ChatSidebar = () => {
  return (
    <div className="px-6 bg-gray-900 text-white">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};