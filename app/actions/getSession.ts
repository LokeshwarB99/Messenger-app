import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
authOptions
export default async function getSession() {
  return await getServerSession(authOptions);
}
