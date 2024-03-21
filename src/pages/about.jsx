import { motion } from "framer-motion";
import { fadeIn } from "../variant";

import {
  Card,
  CardHeader,
  CardBody,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
  ListItemSuffix,
  Chip,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

function About() {
  const webData = [
    {
      options: "Software Engineer, UI/UX Designer",
      images:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah Smith",
    },
    {
      options: "Marketing Manager, Senior Software Engineer",
      images:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kydn Michael",
    },
    {
      options: "Project Manager",
      images:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "George Alexandar",
    },
    {
      options: "Software Engineer, UI/UX Designer",
      images:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Smith",
    },
  ];

  const DigitalData = [
    {
      options: "Software Engineer, UI/UX Designer",
      images:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Smith",
    },
    {
      options: "Marketing Manager, Senior Software Engineer",
      images:
        "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Josey Michael",
    },
    {
      options: "Software Engineer, UI/UX Designer",
      images:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah Smith",
    },
    {
      options: "Project Manager",
      images:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kendal Alexandar",
    },
  ];

  return (
    <section className="my-32 h-full w-full container mx-auto">
      <div className="flex items-end gap-6 mb-16">
        <Typography variant="h2" className="mb-3 reveal-type text-gray-900">
          Who are we
        </Typography>
        <i className="fa fa-arrow-turn-down text-3xl"></i>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-16 place-items-center">
        <motion.Card
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full"
        >
          <CardHeader className="h-36 p-6 border">
            <div className="flex flex-wrap gap-2">
              <Chip
                color="gray"
                value="UI/UX"
                variant="outlined"
                className="rounded-full"
              />
              <Chip
                color="gray"
                value="Developers"
                variant="outlined"
                className="rounded-full"
              />
              <Chip
                color="gray"
                value="Designers"
                variant="outlined"
                className="rounded-full"
              />
            </div>
            <Typography variant="h4" color="blue-gray" className="mt-6">
              Web Designers
            </Typography>
          </CardHeader>
          <CardBody className="grid gap-4">
            {webData.map(({ name, images, options }) => (
              <Card shadow={false} className="bg-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src={images} />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {options}
                    </Typography>
                  </div>
                  <ListItemSuffix>
                    <IconButton variant="text" color="blue-gray">
                      <Tooltip content="See Profile">
                        <i className="fa fa-link"></i>
                      </Tooltip>
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>
              </Card>
            ))}
          </CardBody>
        </motion.Card>
        <motion.Card
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="w-full"
        >
          <CardHeader className="h-36 p-6 border">
            <div className="flex flex-wrap gap-2">
              <Chip
                color="gray"
                value="Managers"
                variant="outlined"
                className="rounded-full"
              />
              <Chip
                color="gray"
                value="Affiliate"
                variant="outlined"
                className="rounded-full"
              />
              <Chip
                color="gray"
                value="Expensive"
                variant="outlined"
                className="rounded-full"
              />
            </div>
            <Typography variant="h4" color="blue-gray" className="mt-6">
              Digital Marketers
            </Typography>
          </CardHeader>
          <CardBody className="grid gap-4">
            {DigitalData.map(({ name, images, options }) => (
              <Card shadow={false} className="bg-gray-50">
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src={images} />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {options}
                    </Typography>
                  </div>
                  <ListItemSuffix>
                    <IconButton variant="text" color="blue-gray">
                      <Tooltip content="See Profile">
                        <i className="fa fa-link"></i>
                      </Tooltip>
                    </IconButton>
                  </ListItemSuffix>
                </ListItem>
              </Card>
            ))}
          </CardBody>
        </motion.Card>
      </div>
    </section>
  );
}

export default About;
