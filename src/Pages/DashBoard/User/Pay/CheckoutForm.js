import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
	const [error, setError] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);

		if (card === null) {
			return;
		}
		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});
		if (error) {
			console.log("[error]", error);
			setError(error.message);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
			setError("");
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#555",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				{error && <p>{error}</p>}
				<button type="submit" disabled={!stripe}>
					Pay
				</button>
			</form>
		</div>
	);
};

export default CheckoutForm;
