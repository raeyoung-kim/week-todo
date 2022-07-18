import React from 'react';

interface Props {
  title: string;
  description?: string;
}

const Title: React.FC<Props> = ({ title, description }) => {
  return (
    <section style={{ padding: '12px 0px' }}>
      <h1>{title}</h1>
      {description ? <p style={{ marginTop: 10 }}>{description}</p> : null}
    </section>
  );
};

export default Title;
