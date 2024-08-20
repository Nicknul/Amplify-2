import Image from 'next/image';
import kongImage from '../public/kong.png';

export default function Home() {
  return (
    <>
      <button className="bg-blue-500 px-4 py-2 m-5 text-white rounded-lg hover:bg-blue-600">Hello world</button>
      <Image src={kongImage} alt="미스터 공" />
    </>
  );
}
