import { useRouter } from 'next/router'
import hah from './hah';
export default function Home() {
  const router = useRouter();
  return (
   <div>
      <button onClick={() => router.push("hah")}>
        hello
      </button>
   </div>
  )
}
