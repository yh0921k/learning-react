import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({ username: '', message: '' });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 여기에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Practice</h1>
      <input
        name={'username'}
        placeholder={'User Name'}
        value={username}
        onChange={onChange}
      />
      <input
        name={'message'}
        placeholder={'Input Anything'}
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
