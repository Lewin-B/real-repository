import React from "react";

// Outdated Next.js data fetching patterns
export async function getServerSideProps(context: any) {
  // This won't work in App Router but shows outdated pattern
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticProps() {
  // This won't work in App Router but shows outdated pattern
  return {
    props: {
      staticData: "Static data",
    },
    revalidate: 60,
  };
}

// Outdated component with props
interface LegacyPageProps {
  data?: any;
  staticData?: string;
}

const LegacyPage: React.FC<LegacyPageProps> = ({ data, staticData }) => {
  return (
    <div>
      <h1>Legacy Page with Server-Side Props</h1>
      <p>This shows outdated Next.js patterns</p>
      {data && <p>Data: {JSON.stringify(data)}</p>}
      {staticData && <p>Static: {staticData}</p>}
    </div>
  );
};

export default LegacyPage;
