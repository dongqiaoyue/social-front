import {Button, Input} from 'antd-mobile';
import {CloseOutline} from 'antd-mobile-icons';
import logo from '@assets/pigeon-bird-icon.svg';
import datepicker from '@assets/datepicker-icon.svg';

import style from './index.module.scss';

const Register = () => {
  return (
    <div>
      <div className={style.header}>
        <CloseOutline className={style.closeIcon}/>
        <img src={logo} alt="bird-logo" className={style.birdLogo}/>
      </div>
      <div className="form">
        <div className={style.formTitle}>Create your own account</div>
        <Input placeholder="name"/>
        <Input placeholder="phone"/>
        <div className={style.changeTypeButton}>
          Sign up with phone or email</div>
        <div className={style.birthdayTitle}>Date of birth</div>
        {/* eslint-disable-next-line max-len */}
        <div>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
        <div placeholder="birth">
          <div>Date of Birth</div>
          <div>
            <img src={datepicker} alt="bird-logo" className={style.birdLogo}/>
          </div>
        </div>
      </div>
      <div className="footer">
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Register;
