import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselCard() {
  return (
   <div className="!m-6">
    <Carousel className="rounded-xl md:mt-[900px] lg:mt-[600px] mt-[700px]">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="lg:h-96 md:h-96 h-[570px] w-full object-cover"
        />
        <div className="absolute inset-0 px-12 grid h-full w-full items-center bg-black/50">
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 items-start justify-center">              
          <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl lg:text-4xl max-w-md"
            >
            Discover our expertise through success
            </Typography>
            <div>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 opacity-80 max-w-3xl mx-auto"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" className="rounded-full">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text" className="rounded-full">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="lg:h-96 md:h-96 h-[570px] w-full object-cover"
        />
        <div className="absolute inset-0 px-12 grid h-full w-full items-center bg-black/50">
          <div className="flex flex-col md:flex-row items-start justify-center gap-x-10 gap-y-4">              
          ``<Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl lg:text-4xl max-w-md"
            >
            Discover our expertise through success
            </Typography>
            <div>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 opacity-80 max-w-3xl mx-auto"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" className="rounded-full">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text" className="rounded-full">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="lg:h-96 md:h-96 h-[570px] w-full object-cover"
        />
        <div className="absolute inset-0 px-12 grid h-full w-full items-center bg-black/50">
          <div className="flex flex-col md:flex-row items-start justify-center gap-x-10 gap-y-4">              
          ``<Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl lg:text-4xl max-w-md"
            >
            Discover our expertise through success
            </Typography>
            <div>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 opacity-80 max-w-3xl mx-auto"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white" className="rounded-full">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text" className="rounded-full">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
   </div>
  );
}

export default CarouselCard;
