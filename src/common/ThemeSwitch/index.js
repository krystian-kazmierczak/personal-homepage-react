import { Wrapper, Button, TextButton, Box, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
  return (
    <Wrapper>
      <Button>
        <TextButton></TextButton>
        <Box>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
