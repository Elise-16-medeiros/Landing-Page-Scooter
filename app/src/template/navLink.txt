import { motion } from "framer-motion";
import Link from "next/link";

export default function NavLink({ label, to }: { label: string; to: string }) {

      const linkVariants = {
        initial: {
          x: "100%",
        },
        animate: {
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      };
  return (
    <motion.div
      variants={linkVariants}
      className="uppercase font-medium hover:text-zinc-500"
    >
      <Link href={to}>{label}</Link>
    </motion.div>
  );;
}
