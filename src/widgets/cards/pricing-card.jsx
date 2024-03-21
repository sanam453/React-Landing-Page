import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export function PricingCard({
  customBg,
  color,
  tag,
  price,
  label,
  btnColor,
  data1,
  data2,
  data3,
  data4,
  data5,
}) {
  return (
    <div className="relative">
      {customBg && (
        <>
          <img
            className="!absolute w-full h-full rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1668736594244-30fb391ce266?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40" />
        </>
      )}

      <Card variant="gradient" className="w-full p-8 bg-transparent">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 relative z-10 rounded-none border-b border-gray-300 pb-8 flex justify-between gap-6 items-center"
        >
          <Typography
            color={color}
            variant="h4"
            className="uppercase"
          >
            {tag}
          </Typography>
          <Typography
            color={color}
            variant="h4"
            className="flex gap-1 text-4xl font-bold"
          >
          ${price} <span className="self-end text-xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
        <Typography
            color={color}
            className="font-normal mb-6"
          >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Nesciunt nostrum unde voluptatum facere error cupiditate.
          Nesciunt nostrum unde voluptatum facere error cupiditate.
          </Typography>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span className="rounded-full p-1">
                <CheckIcon strokeWidth={2} className={`h-4 w-4 text-${color}`} />
              </span>
              <Typography className={`font-normal text-${color}`}>{data1}</Typography>
            </li>
            <li className="flex items-center gap-2">
              <span className="rounded-full p-1">
                <CheckIcon strokeWidth={2} className={`h-4 w-4 text-${color}`} />
              </span>
              <Typography className={`font-normal text-${color}`}>{data2}</Typography>
            </li>
            <li className="flex items-center gap-2">
              <span className="rounded-full p-1">
                <CheckIcon strokeWidth={2} className={`h-4 w-4 text-${color}`} />
              </span>
              <Typography className={`font-normal text-${color}`}>{data3}</Typography>
            </li>
            <li className="flex items-center gap-2">
              <span className="rounded-full p-1">
                <CheckIcon strokeWidth={2} className={`h-4 w-4 text-${color}`} />
              </span>
              <Typography className={`font-normal text-${color}`}>{data4}</Typography>
            </li>
            <li className="flex items-center gap-2">
              <span className="rounded-full p-1">
                <CheckIcon strokeWidth={2} className={`h-4 w-4 text-${color}`} />
              </span>
              <Typography className={`font-normal text-${color}`}>{data5}</Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            fullWidth
            color={btnColor}
          >
            {label}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PricingCard;
