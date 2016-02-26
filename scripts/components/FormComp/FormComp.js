import React from 'react';

export default function ({ submitForm }) {
  return (
    <div className="main-form">
      <form onSubmit={submitForm}>
        <input name="email" type="text" />
        <input name="password" type="password" />
    {/* TODO: add disabled prop when form is submitting */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
