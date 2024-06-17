import GroupCards from "@/components/custom/groupCards";
import Hero from "@/template/hero";
import Motor from "@/template/motor";
import Product from "@/template/product";


export default function Home() {
	return (
		<main>
			<Hero />
			<GroupCards />
			<Product />
			<Motor />
		</main>
	);
}
