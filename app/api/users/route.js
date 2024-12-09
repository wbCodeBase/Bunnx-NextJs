// app/api/users/route.js
import connectToDatabase from '../../../utils/database';
import { getUsers, createUser, updateUser, deleteUser } from '../../../controllers/userController';

export async function GET(request) {
  await connectToDatabase();
  const users = await getUsers();
  return new Response(JSON.stringify(users), { status: 200 });
}



export async function POST(request) {
  await connectToDatabase();

  const data = await request.json();

  // Call the createUser function and get the result
  const result = await createUser(data);

  // Use the status code and data from the result
  return new Response(JSON.stringify(result), { status: result.status });
} 




export async function PUT(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  const data = await request.json();
  const updatedUser = await updateUser(id, data);
  return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(request) {
  await connectToDatabase();
  const { id } = request.nextUrl.searchParams;
  await deleteUser(id);
  return new Response(null, { status: 204 });
}
