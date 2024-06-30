import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
	const { isAuthenticated, getPermission } = getKindeServerSession();
	const isLoggedIn = await isAuthenticated();
	if (!isLoggedIn) {
		redirect("/api/auth/login");
	}

	const requiredPermission = await getPermission("access:all");
	if (!requiredPermission?.isGranted) { 
		redirect('/user');
	}

	return (
		<main className="flex w-full h-screen flex-col items-center justify-center gap-y-6">
			<h1 className="text-3xl font-bold">AdminPage</h1>

		</main>
	);
}
