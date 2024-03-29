import { motion } from "framer-motion";

import {
  Card,
  Checkbox,
  Button,
  Typography,
  Input,
  IconButton,
} from "@material-tailwind/react";

function Form() {
  return (
    <section id="contact" className="!my-32 px-8 container mx-auto">
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1668736594244-30fb391ce266?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="lg:h-96 md:h-96 h-[570px] w-full object-cover object-top rounded-2xl"
        />
        <div className="absolute inset-0 px-12 grid rounded-2xl h-full w-full items-center bg-black/30">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-x-16 gap-y-4">
            <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            >
              <Typography variant="h1" color="white" className="mb-4 pt-10 text-6xl">
                Let's Talk
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 opacity-80 max-w-md"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="lg:block hidden">
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mb-1 text-2xl mt-28 font-medium"
                >
                  Connect us:
                </Typography>
                <Typography color="blue-gray">shamza123@gmail.com</Typography>
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mb-1 text-2xl mt-20 font-medium"
                >
                  Connect with us:
                </Typography>
                <Typography color="blue-gray">
                  Follow us on social media to stay updated <br />
                  on our latest projects, news and <br />
                  industry insights.
                </Typography>
                <div className="flex gap-6 mt-6">
                  <IconButton color="white">
                    <i className="fa-brands fa-tiktok text-2xl"></i>
                  </IconButton>
                  <IconButton color="white">
                    <i className="fa-brands fa-behance text-2xl"></i>
                  </IconButton>
                  <IconButton color="white">
                    <i className="fa-brands fa-linkedin text-2xl"></i>
                  </IconButton>
                  <IconButton color="white">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                  </IconButton>
                  <IconButton color="white">
                    <i className="fa-brands fa-dribbble text-2xl"></i>
                  </IconButton>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <Card className="py-10 px-8 lg:px-16 lg:mt-16 rounded-2xl">
                <Typography variant="h4" color="blue-gray">
                  Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Nice to meet you! <br />
                  Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-full max-w-screen-lg lg:w-96">
                  <div className="mb-1 flex flex-col gap-5">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Your Name
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Your Email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Password
                    </Typography>
                    <Input
                      type="password"
                      size="lg"
                      placeholder="********"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Company Name
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="your company name"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <Checkbox
                    color="gray"
                    label={
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                      >
                        I agree the
                        <a
                          href="#"
                          className="font-medium transition-colors hover:text-gray-900"
                        >
                          &nbsp;Terms and Conditions
                        </a>
                      </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                  />
                  <Button className="mt-6 w-full bg-black hover:shadow-black/20 shadow-black/10">
                    sign up
                  </Button>
                  <Typography
                    color="gray"
                    className="mt-4 text-center font-normal"
                  >
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                      Sign In
                    </a>
                  </Typography>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
