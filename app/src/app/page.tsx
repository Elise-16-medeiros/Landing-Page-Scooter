import GroupCards from "@/components/custom/groupCards";
import Accessories from "@/template/accessories";
import Gallery from "@/template/gallery";
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
			<Accessories />
			<Gallery />
		</main>
	);
}
