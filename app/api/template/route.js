// app/api/users/route.js
import connectToDatabase from '../../../utils/database';
import { getTemplateContent, createComponentContent, updateHeroSectionContent, deleteHeroSectionContent } from '../../../controllers/templateController';

export async function GET() {
  try {
    await connectToDatabase();
    const templateContent = await getTemplateContent();
    return new Response(JSON.stringify(templateContent), { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();

    const data = await request.json();

    const newComponent = await createComponentContent(data);

    if (!newComponent.success) {
      return new Response(
        JSON.stringify({ error: newComponent.error }),
        { status: 400 } // Use a suitable status code for your scenario
      );
    }

    return new Response(JSON.stringify(newComponent.data), { status: 201 });
  } catch (error) {
    console.error("Error in POST API:", error.message);
    // console.error("Error in POST API:", error);

    return new Response(
      JSON.stringify({ error: error.message || "An unexpected error occurred" }),
      { status: 500 }
    );
  }
}


export async function PUT(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  const data = await request.json();
  const updatedUser = await updateHeroSectionContent(id, data);
  return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  await deleteHeroSectionContent(id);
  return new Response(null, { status: 204 });
}
