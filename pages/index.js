import Layout from "@/layout";
import { useEffect } from "react";

export default function Home({ children }) {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log("response => ", res))
      .catch((err) => console.log("err => ", err));
  }, []);
  return (
    <>
      <Layout metaTitle="Home">
        <p>Home</p>
      </Layout>
    </>
  );
}
