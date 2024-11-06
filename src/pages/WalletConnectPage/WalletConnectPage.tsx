import {
  Button,
  Placeholder,
  Text,
} from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import {usePrivy} from '@privy-io/react-auth';
import { Page } from '@/components/Page.tsx';

import './WalletConnectPage.css';

export const WalletConnectPage: FC = () => {
  const { ready, authenticated, user, login, logout} = usePrivy();


  if (ready && !authenticated) {
    return (
      <Page>
        <Placeholder
          className="wallet-connect-page__placeholder"
          description={
            <>
              <Button onClick={login} className="wallet-connect-page__button">Connect</Button>
            </>
          }
        />
      </Page>
    );
  }

  return (
    <Page>
      <Text>Wallet Connected</Text>
      <Text>User ID: {user?.id}</Text>
      <Button onClick={logout} className="wallet-connect-page__button">Logout</Button>
    </Page>
  );
};
