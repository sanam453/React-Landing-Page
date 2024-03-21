import React from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

function InfoCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[28rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 from-black/80 to-black/10 bg-gradient-to-t" />
      <CardBody className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className="my-2 font-normal"
        >
          {desc}
        </Typography>
        <Button
          color="white"
          className="mt-2 rounded-full flex items-center justify-between gap-2"
        >
          see more
          <i className="fa fa-arrow-right"></i>
        </Button>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
