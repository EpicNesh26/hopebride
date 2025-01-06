import Link from "next/link";

export default function Success() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Payment Successful!</h1>
        <p style={styles.message}>Thank you for your payment. Have a great day!</p>
        <div className="button">
          <Link href="/">
          <button>Back to Your Page</button>
          </Link>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      color: '#4CAF50',
    },
    message: {
      fontSize: '1.2rem',
      marginTop: '20px',
    },
  };
  