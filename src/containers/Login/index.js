import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import {loginService} from '@services/login';
import './index.css';

const initialValues = {
  username: ' ',
  password: ' ',
};

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'welcome',
        confirmText: 'OK',
      });
      return;
    }
    Dialog.alert({
      content: 'login fail',
      confirmText: 'OK',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit} size="large">
            Login
          </Button>
        )}
      >
        <Form.Item label="User Name:" name="username">
          <Input placeholder="" clearable />
        </Form.Item>
        <Form.Item label="Password:" name="password">
          <Input placeholder="" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
