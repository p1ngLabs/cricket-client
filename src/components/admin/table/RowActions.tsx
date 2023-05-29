import { Group, Tooltip, UnstyledButton, createStyles } from '@mantine/core';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
  actionBtn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '.5rem',
    border: '1px solid #ccc',
    borderRadius: theme.radius.sm,
    color: theme.colors.gray[8],
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
    [theme.fn.smallerThan('sm')]: {
      padding: '.35rem',
    },
  },
}));

const RowActions = () => {
  const { classes } = useStyles();

  return (
    <Group spacing={2}>
      <Tooltip label="View" withArrow>
        <UnstyledButton className={classes.actionBtn}>
          <FiEye />
        </UnstyledButton>
      </Tooltip>
      <Tooltip label="Edit" withArrow>
        <UnstyledButton className={classes.actionBtn}>
          <FiEdit />
        </UnstyledButton>
      </Tooltip>
      <Tooltip label="Delete" withArrow>
        <UnstyledButton className={classes.actionBtn}>
          <FiTrash2 />
        </UnstyledButton>
      </Tooltip>
    </Group>
  );
};

export default RowActions;
