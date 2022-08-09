import { ErrorMessage, Spinner } from "components";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Account Info</h1>
        <div className="sections">
          <UserSection />
          <ProfileSection />
        </div>
      </div>
    </div>
  );
}

function UserSection() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return error ? (
    <ErrorMessage error={error} />
  ) : isLoading ? (
    <Spinner />
  ) : user ? (
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
  ) : null;
}

function ProfileSection() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return error ? (
    <ErrorMessage error={error} />
  ) : isLoading ? (
    <Spinner />
  ) : profile ? (
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
  ) : null;
}

export default App;
