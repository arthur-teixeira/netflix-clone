import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Button, Content, Input, InputWrapper, Text } from "./styles";

const EmailInput = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <Text>{t("email.text")}</Text>
      <InputWrapper>
        <Input type='email' placeholder='Email' />
        <Button>{t("email.cta")} &rsaquo;</Button>
      </InputWrapper>
    </Content>
  );
};

export default EmailInput;
