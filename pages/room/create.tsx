import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { CenterdTextSection } from '../../components/CenterdTextSection';
import Layout from '../../components/Layout';
import { Colors } from '../../styles/Colors';

const Input = styled.input`
  border: 3px solid ${Colors.grey1};
  display: block;
  width: 90%;
  max-width: 450px;
  border-radius: 8px;
  margin: 1rem auto;
  font-size: 20px;
  padding: 8px;
  box-sizing: border-box;
`;

const Page: NextPage = () => {
  const router = useRouter();
  const [roomName, setRoomName] = useState('');

  const onRoomNameInputChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRoomName(event.target.value);
    },
    [],
  );

  const gotoMusicListPage = useCallback(() => {
    router.push('/room/music');
  }, []);

  return (
    <Layout>
      <CenterdTextSection>
        <br />
        <br />
        <p>
          <i>
            <b>방 제목이 뭔가요?</b>
          </i>
        </p>
        <br />

        <Input value={roomName} onChange={onRoomNameInputChanged} />

        <Button onClick={gotoMusicListPage}>생성</Button>
      </CenterdTextSection>
    </Layout>
  );
};

export default Page;
