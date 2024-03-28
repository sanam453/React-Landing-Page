import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import InfoCard from "../widgets/cards/info-card";

function CaseStudies() {
  const img1 =
    "https://plus.unsplash.com/premium_photo-1668736594244-30fb391ce266?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const img2 =
    "https://plus.unsplash.com/premium_photo-1668736594250-172e0a044141?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const img3 =
    "https://plus.unsplash.com/premium_photo-1668736594254-c3afee707174?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="case-studies" className="my-32 container mx-auto">
      <div className="flex justify-between mb-8">
        <Typography variant="h2">Case Studies</Typography>
        <Button className="rounded-full px-10 bg-gray-900" size="sm">
          All cases
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1 xl:gap-x-4 gap-y-4 xl:grid-cols-5 md:grid-cols-2">
        <Card
          className="col-span-2 relative grid min-h-[28rem] overflow-hidden rounded-xl"
          color="transparent"
        >
          <img
            src={img2}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-right-top"
          />
          <div className="absolute inset-0 from-black/75 to-black/10 bg-gradient-to-t" />
          <CardBody>
            <div className="flex flex-wrap gap-2 mt-2">
              <Chip
                value="UI/UX"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Design"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Develope"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Sketch"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Draw"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Build"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Process"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
              <Chip
                value="Business"
                variant="outlined"
                className="rounded-full text-white border-white"
              />
            </div>
          </CardBody>
          <CardFooter className="relative flex flex-col justify-end">
            <Typography variant="h4" color="white">
              Increased Conversion
            </Typography>
            <Typography
              variant="paragraph"
              color="white"
              className="my-2 font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              ipsam, quos possimus ducimus modi illum?
            </Typography>
            <Button
              color="white"
              className="mt-2 rounded-full flex items-center justify-between max-w-fit gap-2"
            >
              learn more
              <i className="fa fa-arrow-right"></i>
            </Button>
          </CardFooter>
        </Card>
        <div className="col-span-3 gap-4 grid lg:grid-cols-3 md:grid-cols-2">
          <InfoCard
            img={img1}
            title="Foodex Apps"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <InfoCard
            img={img2}
            title="Brand Apps"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <InfoCard
            img={img3}
            title="Cheap Apps"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
