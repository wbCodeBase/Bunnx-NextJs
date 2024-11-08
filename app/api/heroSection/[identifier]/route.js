// app/api/heroSection/[str]/route.js

import connectToDatabase from '../../../../utils/database';
import { getHeroSectionContentByStr } from "../../../../controllers/heroSectionController";

export async function GET(request, { params }) {
  await connectToDatabase();

  // Get the dynamic `identifier` parameter
  const { identifier } = params;

  const heroSectionContent = await getHeroSectionContentByStr(identifier);

  return new Response(JSON.stringify(heroSectionContent), { status: 200 });
}
