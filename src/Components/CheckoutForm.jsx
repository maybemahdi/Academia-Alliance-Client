import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
const CheckoutForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [amount, setAmount] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // fetch client secret
    if (amount && amount > 1) {
      getClientSecret({ payAmount: amount, name: name, email: email });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  //   get clientSecret
  const getClientSecret = async (payInfo) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, payInfo);
    console.log("clientSecret from server--->", data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      const form = e.target;
      form.reset();
      const paymentInfo = {
        name: name,
        email: email,
        amount: parseFloat(amount),
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      console.log(paymentInfo);
      try {
        // 2. save payment info in payment collection (db)
        const { data } = await axiosSecure.post("/payment", paymentInfo);
        console.log(data);
        toast.success("Payment Completed Successfully");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
    setProcessing(false);
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="w-[350px] md:w-[500px] mx-auto">
        <div className="my-6 flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Name:
            <input
              onChange={(e) => setName(e.target.value)}
              data-temp-mail-org="0"
              name="name"
              type="text"
              className="grow"
              placeholder="Your Full Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              data-temp-mail-org="0"
              name="email"
              type="email"
              className="grow"
              placeholder="example@gmail.com"
            />
          </label>
          <label
            data-temp-mail-org="0"
            className="input input-bordered flex items-center gap-2"
          >
            Amount: $
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              name="amount"
              className="grow"
              placeholder="Amount to Pay"
            />
          </label>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 gap-10">
          <button
            // disabled={!stripe || !clientSecret || processing}
            type="submit"
            className="btn-block inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium transition-all duration-300 text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner9 className="animate-spin m-auto" size={24} />
            ) : (
              `Pay ${amount}`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
