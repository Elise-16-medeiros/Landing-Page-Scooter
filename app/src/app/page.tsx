import GroupCards from "@/components/custom/groupCards";
import Accessories from "@/template/accessories";
import Colors from "@/template/colors";
import Gallery from "@/template/gallery";
import Hero from "@/template/hero";
import Motor from "@/template/motor";
import Product from "@/template/product";
import Subscribe from "@/template/subscribe";
import Testimonials from "@/template/testimonials";


export default function Home() {
	return (
		<main>
			<Hero />
			<GroupCards />
			<Product />
			<Motor />
			<Accessories />
			<Gallery />
			<Colors />
			<Testimonials />
			<Subscribe />
		</main>
	);
}
