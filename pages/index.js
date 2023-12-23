// import Layout from "@/layout";
// import Image from "next/image";
// import { useEffect } from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Home({ children }) {
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => res.json())
  //     .then((res) => console.log("response => ", res))
  //     .catch((err) => console.log("err => ", err));
  // }, []);
  return (
    <>
      <LayoutComponent metaTitle="Home">
        <p>Home</p>
        {/* <Image src="/logo.png" width={400} height={400} alt="logo S" />
        <img src="/logo.png" style={{ width: 400, height: 400 }} alt="logo S" /> */}
      </LayoutComponent>
    </>
  );
}
