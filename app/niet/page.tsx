import NietComponents from "@/components/colleges-components/niet";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "NIET     Group of Institutions",
		description: "NIET   Group of Institutions",
	};
}

const page = () => {

  return (
    <Suspense fallback={<div className="min-h-screen"/>}>
      <NietComponents />
    </Suspense>
  );
};

export default page;
