import { Title, useMantineTheme } from '@mantine/core';

const PageTitle = ({ title }: { title: string | undefined }) => {
  const theme = useMantineTheme();

  return (
    <Title order={2} fw="bold" color={theme.colors.gray[8]}>
      Danh sách {title}
    </Title>
  );
};

export default PageTitle;
