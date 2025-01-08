import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
