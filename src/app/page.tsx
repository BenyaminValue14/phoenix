import { redirect } from "next/dist/server/api-utils";

export default function RootPage() {
  return {
    redirect: {
      destination: '/en',
      permanent: false
    }
  }
}