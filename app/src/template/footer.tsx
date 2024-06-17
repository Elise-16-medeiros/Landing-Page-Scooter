export default function Footer() {
    return (
			<footer>
				<p className="text-sm text-muted-foreground bg-[#42454a] h-40 w-full">
					&copy; {new Date().getFullYear()} All rights reserved
				</p>
			</footer>
		);
}
