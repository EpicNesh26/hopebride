
import connectDb from '@/db/connectDb';
import Payment from '@/models/Payment';

export async function POST(req) {
  try {
    await connectDb();

    const { amount, name, message } = await req.json();
    console.log({amount, name, message})

    if (!amount || !name || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 }
      );
    }

    const payment = new Payment({ amount, name, message });
    await payment.save();

    return new Response(JSON.stringify({ success: true, data: payment }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error saving payment:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
