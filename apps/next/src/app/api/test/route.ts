export const GET = async (request: Request) => {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
};
