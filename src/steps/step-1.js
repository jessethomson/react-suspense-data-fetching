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
  return (
    <div className="section">
      <h2 className="header">User</h2>
      <div className="row">
        <div>Name</div>
        <div>Jesse</div>
      </div>
      <div className="row">
        <div>Email</div>
        <div>jesse@example.com</div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="section">
      <h2 className="header">Profile</h2>
      <div className="row">
        <div>Language</div>
        <div>English</div>
      </div>
      <div className="row">
        <div>Country</div>
        <div>USA</div>
      </div>
    </div>
  );
}

export default App;
