
import connectToDatabase from '../../../../utils/database';
import { getTemplateByStr } from "../../../../controllers/templateController";


export async function GET(request, { params }) {
  const dbConnection = await connectToDatabase();

  if (!dbConnection) {
    return new Response(
      JSON.stringify({ error: 'Database connection failed' }),
      { status: 500 }
    );
  }

  try {
    const { identifier } = params;
    const templateContent = await getTemplateByStr(identifier);

    if (!templateContent.success) {
      return new Response(
        JSON.stringify({ error: templateContent.error }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify(templateContent.data), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


// export async function GET(request, { params }) {
//   await connectToDatabase();

//   try {

//     // Get the dynamic `identifier` parameter
//     const { identifier } = params;
//     const templateContent = await getTemplateByStr(identifier);

        
//     if (!templateContent.success) {
//       return new Response(
//         JSON.stringify({ error: templateContent.error }),
//         { status: 400 } // Use a suitable status code for your scenario
//       );
//     }
    
//     return new Response(JSON.stringify(templateContent.data), { status: 200 });


//   } catch (error) {
//     console.error('Error in GET request:', error.message);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }

// }

