const UserPage = ({ params }: { params: { 'user-id': string } }) => {
  return <div>User: {params['user-id']}</div>;
};

export default UserPage;
