import connectDb from "@/db/connectDb";
import Payment from "@/models/Payment";

export async function GET(req) {
  try {
    await connectDb();
    const supporters = await Payment.find({}).sort({ createdAt: -1 }); // Fetch supporters sorted by the most recent
    return new Response(JSON.stringify(supporters), { status: 200 }); // Corrected typo here
  } catch (error) {
    console.error("Error fetching supporters:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch supporters" }),
      { status: 500 }
    );
  }
}
