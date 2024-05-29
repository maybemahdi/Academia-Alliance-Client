import { ScrollRestoration } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center my-10">
      <ScrollRestoration />
      <h2
        data-aos="zoom-in-right"
        className="text-base-content font-bold text-2xl md:text-3xl text-center"
      >
        Pay For Fund
      </h2>
      <div className="my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
