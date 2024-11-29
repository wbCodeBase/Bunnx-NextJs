import connectToDatabase from '../../../utils/database';
import { createContact } from '../../../controllers/activeSlugController';



export async function POST(request) {
    try {
        await connectToDatabase();

        const data = await request.json();
        // console.log(data);

        const contact = await createContact(data);

        if (!contact.success) {
            return new Response(
                JSON.stringify({ error: contact.error }),
                { status: 400 } // Use a suitable status code for your scenario
            );
        }

        return new Response(JSON.stringify(contact.data), { status: 201 });
    } catch (error) {
        console.error("Error in POST API:", error.message);
        // console.error("Error in POST API:", error);

        return new Response(
            JSON.stringify({ error: error.message || "An unexpected error occurred" }),
            { status: 500 }
        );
    }
}