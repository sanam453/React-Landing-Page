import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = [
  {
    title: "About",
    items: [ "About us" ,"Case Studies"],
  },
  {
    title: "Pricing",
    items: ["Pricing", "Brands"],
  },
  {
    title: "Contact",
    items: ["Contact us", "Newsletter"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full max-w-[97rem] mx-auto !mt-40 rounded-bl-3xl rounded-br-3xl">
      <div className="px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 lg:text-left text-center">
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 place-items-center lg:place-items-end gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 !font-bold"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-2 text-gray-900 sm:justify-center">
            <IconButton variant="text" className="rounded-full" color="blue-gray">
              <i className="fa-brands fa-facebook text-lg text-gray-900"></i>
            </IconButton>
            <IconButton variant="text" className="rounded-full" color="blue-gray">
              <i className="fa-brands fa-instagram text-lg text-gray-900"></i>
            </IconButton>
            <IconButton variant="text" className="rounded-full" color="blue-gray">
              <i className="fa-brands fa-twitter text-lg text-gray-900"></i>
            </IconButton>
            <IconButton variant="text" className="rounded-full" color="blue-gray">
              <i className="fa-brands fa-github text-lg text-gray-900"></i>
            </IconButton>
            <IconButton variant="text" className="rounded-full" color="blue-gray">
              <i className="fa-brands fa-dribbble text-lg text-gray-900"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
