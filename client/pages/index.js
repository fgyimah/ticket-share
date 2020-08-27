import buildClient from '../api/build-client';

const Landing = ({ currentUser }) => {
  return currentUser ? (
    <h1>U are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

Landing.getInitialProps = async (context) => {
  console.log(context);
  const { data } = await buildClient(context).get('/api/users/currentuser');

  return data;
};

export default Landing;
