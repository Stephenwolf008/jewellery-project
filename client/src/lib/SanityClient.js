// src/lib/sanityClient.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "vp2qjqhz", // Replace with your actual ID
  dataset: "production",
  useCdn: true, // Faster for public data
  apiVersion: "2023-01-01", // Adjust if needed
});
