// "use server";

// import Stripe from "stripe";
// import Payment from "@/models/Payment";
// import connectDb from "@/db/connectDb";
// import User from "@/models/User";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const initiate = async (amount, to_username, paymentform) => {
//     // Step 1: Connect to the database
//     await connectDb();

//     try {
//         // Step 2: Find recipient user in the database
//         const recipient = await User.findOne({ username: to_username });
//         if (!recipient) {
//             throw new Error(`Recipient with username ${to_username} does not exist.`);
//         }

//         // Step 3: Create a Stripe Payment Intent
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount * 100, // Convert amount to cents (Stripe expects cents)
//             currency: "usd",
//             payment_method_types: ["card"],
//             metadata: {
//                 to_username,
//                 message: paymentform?.message || "No message provided",
//             },
//         });

//         // Step 4: Save the payment record in MongoDB
//         const newPayment = new Payment({
//             name: paymentform?.name || "Anonymous", // Default to "Anonymous" if no name provided
//             amount,
//             message: paymentform?.message || "No message provided",
//             to_username,
//         });

//         await newPayment.save();

//         // Step 5: Return the Stripe client secret for frontend to use
//         return {
//             clientSecret: paymentIntent.client_secret,
//             success: true,
//         };
//     } catch (error) {
//         console.error("Error initiating payment:", error);
//         return { success: false, error: error.message };
//     }
// };


// export const fetchuser = async (username) => {
//     await connectDb()
//     let u = await User.findOne({username: username})
//     let user = u.toObject({flattenObjectIds: true})
//     return u

// }


// // Update the user's profile
// export const updateProfile = async (userId, updatedData) => {
//     // Step 1: Connect to the database
//     await connectDb();

//     try {
//         // Step 2: Validate incoming data (basic validation example)
//         if (!userId) {
//             throw new Error("User ID is required.");
//         }

//         if (!updatedData || typeof updatedData !== "object") {
//             throw new Error("Updated data must be a valid object.");
//         }

//         // Step 3: Find the user by ID and update their profile
//         const updatedUser = await User.findByIdAndUpdate(
//             userId, // The ID of the user to update
//             { $set: updatedData }, // Update the fields with the provided data
//             { new: true, runValidators: true } // Return the updated document and run validation
//         );

//         if (!updatedUser) {
//             throw new Error("User not found.");
//         }

//         // Step 4: Return the updated user data
//         return {
//             success: true,
//             data: updatedUser,
//         };
//     } catch (error) {
//         console.error("Error updating profile:", error);
//         return {
//             success: false,
//             error: error.message,
//         };
//     }
// };
