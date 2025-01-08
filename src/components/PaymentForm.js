import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

export default function PaymentForm() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handlePayment = async (e) => {
    
    e.preventDefault();
    setLoading(true);

    // const inputData = [amount, name, message];
    // console.log(inputData);
    try{
      const res = await fetch('/api/save-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, name, message }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log('Payment saved:', data);
        alert('Payment successfully saved!');
        router.push('/success')
      } else {
        console.error('Error:', data.error);
        alert('Error saving payment: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    }
  }

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

      <label htmlFor="name" style={styles.label}>Your Name</label>
      <textarea
        id="name"
        type="text"
        rows="2"
        onChange={(e) => setName(e.target.value)}
        placeholder="Let Us know your name..."
        value={name}
        style={styles.textarea}
      ></textarea>
      <label htmlFor="message" style={styles.label}>Your message</label>
      <textarea
        id="message"
        rows="4"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
