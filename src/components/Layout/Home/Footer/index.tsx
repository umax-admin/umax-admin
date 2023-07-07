import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
// import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
//   const intl = useIntl();
  const defaultMessage = "goofish-shop 出品"

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Umax Admin ',
          title: 'Umax Admin',
          href: 'https://goofish-shop.github.io/umax-admin/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://goofish-shop.github.io/umax-admin/',
          blankTarget: true,
        },
        {
          key: 'ahKevinXy',
          title: 'ahKevinXy',
          href: 'https://ahkevinxy.github.io/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;