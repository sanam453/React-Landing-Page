import { PricingCard } from "../widgets/cards/pricing-card";
import { Typography } from "@material-tailwind/react";

function Pricing() {
  return (
    <div id="pricing" className="my-32 h-full w-full container mx-auto">
      <Typography variant="h2" className="mb-12 text-black">
        Pricings
      </Typography>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <PricingCard
          color="gray"
          btnColor="gray"
          label="buy now"
          tag="standard"
          price={19}
          data1="Pay as you use it"
          data2="40+ built-in pages and components"
          data3="10+ years free updates + free downloads"
          data4="Unlimited advertising and all kinds of Guarantees"
          data5="SEO Assistant Life time technical support of stores"
        />
        <PricingCard
          customBg
          color="white"
          btnColor="white"
          label="go premium"
          tag="primary"
          price={23}
          data1="120+ million team members"
          data2="30+ Data sheets and Documents"
          data3="40+ built-in components and SEO Support"
          data4="4+ years free updates and unlimited access to apps"
          data5="Compaigns with a budget of up to RUB 1 billion per month"
        />
      </div>
    </div>
  );
}

export default Pricing;
