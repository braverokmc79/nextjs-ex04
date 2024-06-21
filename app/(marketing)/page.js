import logo from '@/assets/logo.jpg'
import Link from 'next/link';

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="신문" />
      <h1>차세대를 위한 뉴스 사이트</h1>
      <p>
        Next News는 여러분께 최신 뉴스를 간결하고 공정하게 전달합니다!
      </p>

      <p>
        Next News는 최신 뉴스를 간결하고 공정하게 제공하는 것을 목표로 합니다. 우리는 여러분이 쉽게 이해할 수 있도록 뉴스를 간결하게 전달하고, 불필요한 정보로 여러분을 압도하지 않으려 합니다.
      </p>

      <p>
        우리는 공정하고 편향되지 않은 방식으로 뉴스를 전달하기 위해 헌신하는 기자 팀을 고용하고 있습니다. 우리 팀은 여러분께 최신 뉴스를 제공하고 정보를 업데이트하는 데 열정을 가지고 있습니다.
      </p>

      <p>
        <Link href="/news">최신 뉴스 읽기</Link>
      </p>
    </div>
  );
}
