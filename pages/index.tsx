import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { CenterdTextSection } from '../components/CenterdTextSection';
import Layout from '../components/Layout';

const MainVideo = styled.iframe`
  max-width: 560px;
  height: 315px;
  margin: auto;
`;

const youtubeIdList = [
  '0EK_M2taRIM',
  'Bl0s-1c5L0M',
  'l-jZOXa7gQY',
  'aFoqCI75WoY',
  'Ts20_7v14ZA',
  'vUw9IkCWEGk',
];

const Page: NextPage = () => {
  const [randomYoutubeId] = useState(
    youtubeIdList[Math.floor(youtubeIdList.length * Math.random())],
  );

  const router = useRouter();

  const gotoCreateRoomPage = useCallback(() => {
    router.push('/room/create');
  }, []);

  return (
    <Layout>
      <CenterdTextSection>
        <br />
        <br />
        <p>
          <i>
            <b>저, 이거 듣고 싶어요...</b>
          </i>
        </p>
        <br />

        <MainVideo
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${randomYoutubeId}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <br />
        <Button onClick={gotoCreateRoomPage}>방 만들기</Button>
      </CenterdTextSection>
    </Layout>
  );
};

export default Page;
