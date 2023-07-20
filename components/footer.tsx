import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="w-full border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs flex items-center justify-between">
      <div className="text-neutral-500">
        Built by @jonbrickdesigns | © jonbickdesings. All Rights Reserved
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Footer;
