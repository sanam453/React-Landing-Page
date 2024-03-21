import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography
} from "@material-tailwind/react";

function Faqs() {
  const [open, setOpen] = React.useState(1);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="text-center mb-32 max-w-4xl mx-auto">
      <Typography variant="h2">Frequently Asked Questions</Typography>
      <Typography variant="lead" className="mb-20 mt-4 max-w-4xl mx-auto text-gray-700">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </Typography>
      <Accordion
        open={alwaysOpen}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={handleAlwaysOpen}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-gray-600 hover:!text-gray-900" : ""
          }`}
        >
          What is UI/UX Design?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-gray-600 hover:!text-gray-900" : ""
          }`}
        >
          How to use Design tools?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-gray-600 hover:!text-gray-900" : ""
          }`}
        >
          Is Figma the best Design Software?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-gray-600 hover:!text-gray-900" : ""
          }`}
        >
          What are the main components of UI/UX?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-gray-600 hover:!text-gray-900" : ""
          }`}
        >
          What are the focus areas of the UI/UX Agencies?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion
      open={open === 6}
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
    >
      <AccordionHeader
        onClick={() => handleOpen(6)}
        className={`border-b-0 transition-colors ${
          open === 6 ? "text-gray-600 hover:!text-gray-900" : ""
        }`}
      >
        How much does a UI/UX Design costs and how much time does it take?
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal text-gray-600 text-left">
        We&apos;re not always in the position that we want to be at.
        We&apos;re constantly growing. We&apos;re constantly making mistakes.
        We&apos;re constantly trying to express ourselves and actualize our
        dreams.
      </AccordionBody>
    </Accordion>
    </section>
  );
}

export default Faqs;
