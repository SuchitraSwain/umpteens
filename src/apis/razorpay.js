const RazorPay = ({bill}) => {
    const paynow = (e)=>{
        e.preventDefault();
        const {amount, orderId, items, firstname , lastname, email} = bill;

        const form = document.createElement('form');
        form.classList.add('razorpay');
        form.setAttribute('action', "https://umpteens-backend.herokuapp.com/payments/callback");
        form.setAttribute('method', 'POST');
        const script = document.createElement('script');
        script.setAttribute('src', "https://checkout.razorpay.com/v1/checkout.js");
        script.setAttribute('data-key', "rzp_live_HvTAYdCVerU2nH");
        script.setAttribute('data-amount', amount);
        script.setAttribute('data-currency', 'INR');
        script.setAttribute('data-order_id', orderId);
        script.setAttribute('data-buttontext', 'Make Payment and Take Assesment');
        script.setAttribute('data-name', "Assesment Tests");
        script.setAttribute('data-description', items);
        /* script.setAttribute('data-image', ''); */
        script.setAttribute('data-prefill.name', `${firstname} ${lastname}`);
        script.setAttribute('data-prefill.email', email);
        script.setAttribute('data-theme.color', '#05A401');

        const btn = document.getElementById('pay-btn');
        btn.appendChild(form);
        form.appendChild(script);

        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('custom', 'Hidden Element');
        input.setAttribute('name', 'hidden');
        form.appendChild(input);


    }
    
        return <>
        <button className="btn btn-success"  onClick={paynow} > Click to Generate Payment Link </button>
        <h2 id="pay-link"></h2>
        </>
    } 

    export default RazorPay
