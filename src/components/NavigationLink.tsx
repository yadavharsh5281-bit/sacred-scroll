import { motion } from "framer-motion";

interface NavigationLinkProps {
  name: string;
  href: string;
  active?: boolean;
  mobile?: boolean;
}

export const NavigationLink = ({ name, href, active, mobile }: NavigationLinkProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      className={`
        font-crimson text-sm
        ${mobile ? 'py-2 px-4' : ''}
        ${active 
          ? 'text-primary font-semibold' 
          : 'text-foreground/80 hover:text-primary'
        }
        transition-colors duration-300
        relative
        after:content-['']
        after:absolute
        after:bottom-0
        after:left-0
        after:w-full
        after:h-0.5
        after:bg-primary
        after:scale-x-0
        after:origin-left
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
        ${active ? 'after:scale-x-100' : ''}
      `}
    >
      {name}
    </motion.a>
  );
};
