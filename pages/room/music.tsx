import { NextPage } from 'next';
import { useState } from 'react';

import { Button } from '../../components/Button';
import { CenterdTextSection } from '../../components/CenterdTextSection';
import Layout from '../../components/Layout';

interface Music {
  youtubeId: string;
  index: number;
  authorNickname: string;
}

const EmptyPlayList: React.FC = () => {
  return (
    <CenterdTextSection>
      <br />
      <br />
      <br />
      <p>
        <b>방 제목 여기에</b>
        <br />
        <br />
        플레이리스트가 비어있어요.
        <br />첫 노래를 추가해보세요!
      </p>
      <Button>+ 추가하기</Button>
    </CenterdTextSection>
  );
};

const PlayList: React.FC = () => {
  return <></>;
};

const Page: NextPage = () => {
  // const router = useRouter();
  // const roomId = +(router.query.id || 0);
  const [musicList, setMusicList] = useState<Music[]>([]);

  return <Layout>{musicList.length ? <PlayList /> : <EmptyPlayList />}</Layout>;
};

export default Page;
