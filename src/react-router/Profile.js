import React from 'react';

const data = {
  kyh: {
    name: 'Yonghwi',
    description: 'Backend Developer',
  },
  pje: {
    name: 'jjung',
    description: 'Frontend Developer',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
