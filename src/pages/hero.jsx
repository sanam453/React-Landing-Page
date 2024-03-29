import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../variant";
import Nav from "../widgets/layout/nav";
import { Typography, Button } from "@material-tailwind/react";

export function Hero() {
  return (
    <>
      <div className="m-6 relative">
        <div className="grid min-h-[85vh] w-full !rounded-2xl place-items-center bg-[url('/public/bg.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 h-full w-full rounded-2xl bg-black/30" />
          <div className="px-8 container mx-auto">
            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial={{opacity:0}}
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className="relative grid place-items-center text-center">
              <Typography
                variant="h1"
                color="white"
                className="text-center"
              >
                Unlocking Digital Excellence
              </Typography>
              <div className="flex flex-col gap-6 w-full max-w-2xl">
                <Typography
                  variant="paragraph"
                  className="mt-6 font-normal leading-normal"
                  color="white"
                >
                  According to the National Oceanic and Atmospheric
                  Administration, According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos, NSIDClead scentist,
                  puts the potentially record low
                </Typography>
                <div className="flex gap-4 mx-auto">
                  <Button color="white" className="rounded-full">
                    view here
                  </Button>
                  <Button
                    color="white"
                    className="rounded-full"
                    variant="outlined"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Nav />
    </>
  );
}

export default Hero;
