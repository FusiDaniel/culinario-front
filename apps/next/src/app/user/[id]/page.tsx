'use client';

import { UserDetailScreen } from 'app/features/user/screen';
import { useParams } from 'solito/navigation';

const Page = () => {
  const { id } = useParams();
  return <UserDetailScreen id={id as string} />;
};

export default Page;
