import React from "react";
import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51JyCktCw0Qr73TDTKbWBfzdxh5a6RUNQY2cjiSWkd1h0lebKjoVGZwDYcapLCSqPrCXkbIOFiVMungiOamzrsnV900aOjBkPeC"
);

const Pay = () => {
	return (
		<div>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
};

export default Pay;
