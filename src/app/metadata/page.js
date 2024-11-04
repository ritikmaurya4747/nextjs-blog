export default function FontOptimization() {
  return (
    <div>
      {/* aise title likhna bad tarika hain qki console me 2 title dikhega jo ki SEO ke liye problematic hoga so is tarike se nahi kana chahiye */}
      {/* <title>Generate Metadata title</title> */}

      <h1>generate Metadata in Next</h1>
    </div>
  );
}

// dynamic metaData generate aise karte hain yahi sahi tarika hain dynamic metaData generate karne ke liye 
export function generateMetadata() {
  return {
    title: "Generate Metadata title",
    description: "Generate metadata page for next.js",
  };
}
