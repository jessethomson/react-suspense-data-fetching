import { Suspense } from "react";
import { fetch } from "react-fetch";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorMessage, Spinner } from "components";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Account Info</h1>
        <div className="sections">
          <ErrorBoundary FallbackComponent={ErrorMessage}>
            <Suspense fallback={<Spinner />}>
              <UserSection />
              <ProfileSection />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

function UserSection() {
  const user = fetch("/user").json();

  return (
    <div className="section">
      <h2 className="header">User</h2>
      <div className="row">
        <div>Name</div>
        <div>{user.name}</div>
      </div>
      <div className="row">
        <div>Email</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}

function ProfileSection() {
  const profile = fetch("/profile").json();

  return (
    <div className="section">
      <h2 className="header">Profile</h2>
      <div className="row">
        <div>Language</div>
        <div>{profile.language}</div>
      </div>
      <div className="row">
        <div>Country</div>
        <div>{profile.country}</div>
      </div>
    </div>
  );
}

export default App;
