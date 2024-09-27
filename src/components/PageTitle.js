import React from 'react';

const PageTitle = ({ title, style }) => {
  return (
    <h2 style={{ textAlign: 'center', marginBottom: '20px', ...style }}>
      {title}
    </h2>
  );
};

export default PageTitle;
