import React from "react";

// Outdated interface pattern
interface Props {
  title: string;
  description?: string;
}

// Outdated function component pattern
const About: React.FC<Props> = ({ title, description }) => {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{title}</h1>
      <p>
        This is a simple about page in an outdated Next.js application using App
        Router.
      </p>
      <p>Next.js version: 13.4.19</p>
      <p>React version: 18.2.0</p>
      {description && <p>{description}</p>}
    </main>
  );
};

// Default props pattern (outdated)
About.defaultProps = {
  description: "Default description",
};

export default About;
