import { Section, Cell, Image, List, Button, Placeholder, Title } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';
import { usePrivy } from '@privy-io/react-auth';

export const IndexPage: FC = () => {
  const { ready, authenticated, user, login, logout} = usePrivy();


  if (ready && !authenticated) {
    return (
      <Page>
    
        <Placeholder
          className="wallet-connect-page__placeholder"
          description={
            <>
              <Title>Sup.</Title>
              <Button onClick={login} className="wallet-connect-page__button">Connect</Button>
            </>
          }
        />
      </Page>
    );
  }
  if (ready && authenticated) {

  return (
    <Page back={false}>
      <List>
      <Button onClick={logout} className="wallet-connect-page__button">Disconnect</Button>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
          >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
  }
};
