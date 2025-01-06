// import { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


// export default function PaymentForm() {
//   const [amount, setAmount] = useState('');
//   const [loading, setLoading] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Create Payment Intent via API route
//     const res = await fetch('/api/payment', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount }),
//     });
//     const { clientSecret } = await res.json();

//     // Confirm payment with Stripe
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     setLoading(false);

//     if (result.error) {
//       alert(`Payment failed: ${result.error.message}`);
//     } else {
//       alert('Payment successful!');
//       window.location.href = '/success';
//     }
//   };

//   return (
//     <form onSubmit={handlePayment} style={styles.form}>
//       <input
//         type="number"
//         placeholder="Enter amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         required
//         style={styles.input}
//       />

//       <label style={styles.label} for="message" class="mb-2 text-sm font-bold text-gray-900 dark:text-white">Your message</label>
//       <textarea id="message" rows="4" class="flex flex-col justify-start items-start p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
//       <CardElement style={styles.card} />
//       <button type="submit" disabled={!stripe || loading} style={styles.button}>
//         {loading ? 'Processing...' : 'Pay'}
//       </button>
//     </form>
//   );
// }

// const styles = {
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//     gap: '12px'
//   },
//   label: {
//     marginBottom: '2px',
//     text:'large',
//     color: 'gray-900',
//     font:'bold'
//   },
//   input: {
//     marginBottom: '20px',
//     padding: '10px',
//     fontSize: '1rem',
//   },
//   card: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ddd',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    setLoading(false);

    if (result.error) {
      alert(`Payment failed: ${result.error.message}`);
    } else {
      alert('Payment successful!');
      window.location.href = '/success';
    }
  };

  return (
    <form onSubmit={handlePayment} style={styles.form}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        style={styles.input}
      />

      <label htmlFor="message" style={styles.label}>Your message</label>
      <textarea
        id="message"
        rows="4"
        placeholder="Leave a comment..."
        style={styles.textarea}
      ></textarea>

      <CardElement style={styles.card} />
      <button type="submit" disabled={!stripe || loading} style={styles.button}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    gap: '12px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  },
  label: {
    marginBottom: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '12px',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '12px',
    width: '95%',
  },
  card: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
