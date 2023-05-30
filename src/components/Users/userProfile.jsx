import React from 'react';

const UserProfile = () => {
  const user_details = [
    {
      id: 1,
      name: 'Reshav',
      contact: 1,
      info: {
        country: 'Nepal',
        about: 'Reshav Thapa currently building social media app',
      },
    },
  ];

  return (
    <div className="user-profile">
      {user_details.map((user) => (
        <div className="profile-card" key={user.id}>
          <div className="cover-photo"></div>
          <div className="profile-header">
            <div className="profile-avatar"></div>
            <div className="profile-details">
              <h2>{user.name}</h2>
              <p>Contact: {user.contact}</p>
              <p>Country: {user.info.country}</p>
              <p>About: {user.info.about}</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
      ))}

      <style >{`
        .user-profile {
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .profile-card {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 600px;
          margin-top: 40px;
        }

        .cover-photo {
          background-color: #1877f2;
          height: 200px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .profile-header {
          display: flex;
          align-items: center;
          padding: 20px;
        }

        .profile-avatar {
          background-color: #e9e9e9;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          margin-right: 24px;
        }

        .profile-details {
          flex-grow: 1;
        }

        .profile-details h2 {
          margin-bottom: 8px;
        }

        .follow-button {
          background-color: #1877f2;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          cursor: pointer;
          font-weight: bold;
          margin-top: 16px;
        }

        .follow-button:hover {
          background-color: #1153a7;
        }
      `}</style>
    </div>
  );
};

export default UserProfile;
