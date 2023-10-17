import { Main } from '../components';
import '../styles/Home.css';

export default function Home({ user, isAuthenticated }) {
  return (
    <>
      {isAuthenticated && (
        <>
          <div className="justify-center items-center flex h-full">
            <Main user={user} />
          </div>
        </>
      )}
    </>
  );
}
