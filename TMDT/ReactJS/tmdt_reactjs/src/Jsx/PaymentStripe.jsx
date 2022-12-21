// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import React, { forwardRef } from 'react';
import { useAddProductMutation } from '../services/productApis';
import StripeCheckout from 'react-stripe-checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_51LhTmHDGOQhsYLL1AGMaaqbRNEB4CKIIou69IljUChMBjvkf1OQEa1SMjADKv3x9vs8Z1IOceHacX7LhfFX1ZvdU00lyYntqcX');

function PaymentForm({ showCheckoutForm, hideCheckoutForm, paymentElementOptions, formData }, ref) {
    const [addProduct] = useAddProductMutation();
    async function onToken(token) {

        const product = {
            name: formData.name,
            minPrice: formData.minPrice,
            step: formData.step,
            description: formData.description,
            category: formData.category,
            images: [...formData.images],
            endTime: formData.endTime,
            shortDecription: formData.shortDecription,
            token,
        };

        const res = await addProduct(product);

        console.log(product.token)
    }

    function closeAndReset() {
        hideCheckoutForm();
    }

    return (
        <div className="layout__overlay js-layout__overlay" ref={ref}>
            <div className="dark-layout js-dark-layout" onClick={closeAndReset}></div>
            <div className="login__form-container js-login__form-container" style={{ width: '20%' }}>
                {/* {paymentElementOptions.clientSecret !== '' &&
                    <Elements stripe={stripePromise} options={paymentElementOptions}>
                        <form onSubmit={handleSubmit}>
                            <PaymentElement />
                            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>
                                <SpecialBtn
                                    value="Payment"
                                    type="submit"
                                    className="add-product__btn add-product-save__btn"
                                />
                            </div>
                        </form>
                    </Elements>
                } */}
                {/* <form> */}
                    <StripeCheckout
                        amount={100 * 100}
                        token={onToken}
                        currency="USD"
                        stripeKey='pk_test_51LhTmHDGOQhsYLL1AGMaaqbRNEB4CKIIou69IljUChMBjvkf1OQEa1SMjADKv3x9vs8Z1IOceHacX7LhfFX1ZvdU00lyYntqcX'
                    >
                        <button className="btn btn-primary">Pay Now</button>
                    </StripeCheckout>
                {/* </form> */}
            </div>
        </div>
    );
};

export default forwardRef(PaymentForm);