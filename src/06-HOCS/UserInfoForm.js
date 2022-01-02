import WithEditableResource from './WithEditableResource';
// import WithEditableUser from './WithEditableUser';

const UserInfoForm = WithEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChangeUser}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={onChangeUser}
        />
        <label htmlFor="hairColor">Hair Color:</label>
        <input
          type="text"
          name="hairColor"
          id="hairColor"
          value={hairColor}
          onChange={onChangeUser}
        />
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save Changes</button>
      </>
    ) : <p>Loading user...</p>;
  }, '/users/1', 'user'
);

export default UserInfoForm;
