import ThankYouPage from '@/components/thankyou'
import { Metadata } from 'next';
import { Suspense } from 'react'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "NIET Group of Institutions",
		description: "NIET Group of Institutions",
	};
}

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouPage/>
    </Suspense>
  )
}

export default page
