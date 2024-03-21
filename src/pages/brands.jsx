import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../variant";


export function Brands() {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-wrap items-center gap-x-16 justify-center lg:mt-20 mt-28"
    >
      <img
        className="h-10 grayscale"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_fS18iSCx1ROZqjZ0RYxF6uoQ_xVJVI4GArcD74HXA&s"
        alt=""
      />
      <img
        className="h-10 grayscale"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png"
        alt=""
      />
      <img
        className="h-10 grayscale"
        src="https://logodownload.org/wp-content/uploads/2022/05/linux-logo-1.png"
        alt=""
      />
      <img
        className="h-40 grayscale"
        src="https://www.svgrepo.com/show/303144/windows-10-logo.svg"
        alt=""
      />
      <img
        className="h-16 grayscale"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png"
        alt=""
      />
    </motion.div>
  );
}

export default Brands;
