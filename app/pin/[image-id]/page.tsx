const UserPage = ({ params }: { params: { 'image-id': string } }) => {
  return <div>User: {params['image-id']}</div>;
};

export default UserPage;
