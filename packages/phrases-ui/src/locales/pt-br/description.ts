const description = {
  email: 'e-mail',
  phone_number: 'número de telefone',
  username: 'nome de usuário',
  reminder: 'Lembrete',
  not_found: '404 Não Encontrado',
  agree_with_terms: 'Eu li e concordo com os ',
  agree_with_terms_modal: 'Para continuar, por favor, concorde com os <link></link>.',
  terms_of_use: 'Termos de uso',
  sign_in: 'Entrar',
  privacy_policy: 'Política de privacidade',
  create_account: 'Criar conta',
  or: 'ou',
  and: 'e',
  enter_passcode: 'O código de verificação foi enviado para o seu {{address}} {{target}}',
  passcode_sent: 'O código de verificação foi reenviado',
  resend_after_seconds: 'Reenviar depois <span>{{seconds}}</span> segundos',
  resend_passcode: 'Reenviar código de verificação',
  create_account_id_exists: 'A conta com {{type}} {{value}} já existe, gostaria de entrar?',
  link_account_id_exists: 'A conta com {{type}} {{value}} já existe, gostaria de vincular?',
  sign_in_id_does_not_exist:
    'A conta com {{type}} {{value}} não existe, gostaria de criar uma nova conta?',
  sign_in_id_does_not_exist_alert: 'A conta com {{type}} {{value}} não existe.',
  create_account_id_exists_alert:
    'A conta com {{type}} {{value}} está vinculada a outra conta. Por favor, tente outro {{type}}.',
  social_identity_exist:
    'O {{type}} {{value}} está vinculado a outra conta. Por favor, tente outro {{type}}.',
  bind_account_title: 'Vincular ou criar conta',
  social_create_account: 'Você pode criar uma nova conta.',
  social_link_email: 'É possível vincular outro e-mail',
  social_link_phone: 'É possível vincular outro telefone',
  social_link_email_or_phone: 'É possível vincular outro e-mail ou telefone',
  social_bind_with_existing:
    'Encontramos uma conta relacionada registrada e você pode vinculá-la diretamente.',
  reset_password: 'Esqueceu a senha',
  reset_password_description:
    'Digite o {{types, list(type: disjunction;)}} à sua conta e enviaremos a você o código de verificação para redefinir sua senha.',
  new_password: 'Nova senha',
  set_password: 'Configurar senha',
  password_changed: 'Senha alterada',
  no_account: 'Ainda não tem conta? ',
  have_account: 'Já tinha uma conta?',
  enter_password: 'Digite a senha',
  enter_password_for: 'Entre com a senha para {{method}} {{value}}',
  enter_username: 'Definir nome de usuário',
  enter_username_description:
    'O nome de usuário é uma alternativa para fazer login. O nome de usuário deve conter apenas letras, números e sublinhados.',
  link_email: 'Linkar e-mail',
  link_phone: 'Linkar telefone',
  link_email_or_phone: 'Linkar e-mail ou telefone',
  link_email_description: 'Para maior segurança, vincule seu e-mail à conta.',
  link_phone_description: 'Para maior segurança, vincule seu telefone à conta.',
  link_email_or_phone_description: 'Para maior segurança, vincule seu e-mail ou telefone à conta.',
  continue_with_more_information: 'Para maior segurança, preencha os detalhes da conta abaixo.',
  create_your_account: 'Crie sua conta',
  sign_in_to_your_account: 'Faça login na sua conta',
  no_region_code_found: 'Não foi possível encontrar o código de região do seu telefone.',
  verify_email: 'Verificar e-mail',
  verify_phone: 'Verificar número de telefone',
  /** UNTRANSLATED */
  password_requirements_with_type_one: 'Password requires a minimum of {{min}} characters.',
  /** UNTRANSLATED */
  password_requirements_with_type_other:
    'Password requires a minimum of {{min}} characters, and contains {{count}} of the following: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and symbols.',
};

export default Object.freeze(description);
