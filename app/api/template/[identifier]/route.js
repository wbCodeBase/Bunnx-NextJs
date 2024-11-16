
import connectToDatabase from '../../../../utils/database';
import { getTemplateByStr } from "../../../../controllers/templateController";

export async function GET(request, { params }) {
  await connectToDatabase();

  // Get the dynamic `identifier` parameter
  const { identifier } = params;

  const templateContent = await getTemplateByStr(identifier);

  return new Response(JSON.stringify(templateContent), { status: 200 });
}


