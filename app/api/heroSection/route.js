// app/api/users/route.js
import connectToDatabase from '../../../lib/db';
import { getHeroSectionContent, createHeroSectionContent, updateHeroSectionContent, deleteHeroSectionContent } from '../../../controllers/heroSectionController';

export async function GET(request) {
  await connectToDatabase();
  const heroSectionContent = await getHeroSectionContent();
  return new Response(JSON.stringify(heroSectionContent), { status: 200 });
}

export async function POST(request) {
  await connectToDatabase();
  const data = await request.json();
  
  console.log("data", data);

  const newUser = await createHeroSectionContent(data);
  return new Response(JSON.stringify(newUser), { status: 201 });
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
