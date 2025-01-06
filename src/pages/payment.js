import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../components/PaymentForm';

// Load Stripe client
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PaymentPage() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Make a Payment</h1>
        <p style={styles.description}>
          Enter the amount you'd like to pay and complete your payment securely.
        </p>
        <div style={styles.formContainer}>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  page: {
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
  },
  container: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: '#1e1e1e', // Dark gray form background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow
    textAlign: 'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    gap:'15px'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    color: '#ccc', // Light gray text
  },
  formContainer: {
    padding: '15px',
    backgroundColor: '#2a2a2a', // Slightly lighter gray
    borderRadius: '8px',
  },
};
