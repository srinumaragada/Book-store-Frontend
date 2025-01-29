const getBaseUrl = () => {
    // In development, use the local API URL
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://localhost:5000";
    }
    
    // In production, use the Vercel API URL
    return "https://book-strore-website-u7tw.vercel.app/api"; // replace with your actual Vercel API URL
  };
  
  export default getBaseUrl;
  