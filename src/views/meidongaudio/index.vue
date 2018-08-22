<template>
  <div id='meidongaudio'>
    <div class="banner">
      <img class="tt_logo" src="~assets/img/tt_logo.png" alt="">
      <div class="banner_main">
        <div class="banner_desc">
          <h2>Share Your Experience & Get Bluetooth Headphones for FREE*</h2>
          <p class="tit">NO Shipping Charges, NO Hidden Fees, NO Credit Card Required!</p>
          <p class="cont">
            *Conditions May Apply: Limited to one pair of headphones of each product per Amazon account and household.
            Offer valid only for customers that bought the headphones at full price from our Official Seller on Amazon.com.
            To qualify, participants shall agree to share their experience on Amazon regarding their TaoTronics / VAVA headphones previously
            purchased on Amazon and that they have been actively using for at least 15 days or more.
          </p>
        </div>
        <el-form :model="ruleForm" :rules="rules" class="banner_form" ref="ruleForm">
          <p>Please fill in your information to claim your free pair of headphones:</p>
          <el-form-item class="form-item" prop="userName">
           <el-input placeholder="Name" prefix-icon="el-icon-news" v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="userEmail">
            <el-input placeholder="Email" prefix-icon="el-icon-message" v-model="ruleForm.userEmail"></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="phone">
            <el-input placeholder="Phone" prefix-icon="el-icon-mobile-phone" v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="region">
            <el-select v-model="ruleForm.region" clearable placeholder="Amazon ( US / UK / CA )">
              <el-option v-for="item in country_options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button type="success" @click="submitForm('ruleForm')">Get FREE Headphones</el-button>
          </el-form-item>
          <p class="note">Note: Use the same email you use to log in to Amazon to verify your order.</p>
        </el-form>
      </div>
    </div>
    <div class="game_progress">
      <h2>Get FREE Bluetooth Headphones in 3 Easy Steps</h2>
      <div class="game_progress_main">
        <dl class="game_progress_item">
          <dt><img src="~assets/img/step1.png" alt=""></dt>
          <dd>
            <strong>Fill in the Online Form</strong>
            <p>
              The first step to receive your FREE headphones is to complete the form on this page.
              This offer is valid only for customers that bought the product at full price from our official seller on Amazon.com.
            </p>
          </dd>
        </dl>
        <dl class="game_progress_item">
          <dt><img src="~assets/img/step2.png" alt=""></dt>
          <dd>
            <strong>Share your Experience</strong>
            <p>
              After filling the form you will be asked to share your experience on Amazon regarding your TaoTronics / VAVA headphones
              previously purchased on Amazon. Sharing your experience will help other customers who are interested in the same product.
            </p>
          </dd>
        </dl>
        <dl class="game_progress_item">
          <dt><img src="~assets/img/step3.png" alt=""></dt>
          <dd>
            <strong>Receive your FREE Headphones</strong>
            <p>
              If you qualify for a pair of FREE headphones we will ship it to you within 48 hours. You will receive your headphones within 7 Days.
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'this is a message',
        ruleForm: {
          userName: '',
          userEmail: '',
          phone: '',
          region: ''
        },
        country_options: [{
          value: 'Amazon(US)',
          label: 'Amazon(US)'
        }, {
          value: 'Amazon(UK)',
          label: 'Amazon(UK)'
        }, {
          value: 'Amazon(CA)',
          label: 'Amazon(CA)'
        }],
        rules: {
          userName: [
            { required: true, message: 'This field is required.', trigger: 'blur' }
          ],
          userEmail: [
            { required: true, message: 'This field is required.', trigger: 'blur' },
            {type: 'email', message: 'Please input a valid email address.', trigger: 'change'}
          ],
          phone: [
            { required: true, message: 'This field is required.', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'This field is required.', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          let json = this.ruleForm;
          if (valid) {
            this.$store.dispatch('saveUserInfo', {
              data: json
            }).then((res) => {
              this.ruleForm = {
                userName: '',
                userEmail: '',
                phone: '',
                region: ''
              }
              let type = 'error';
              if (res.code === 200) {
                type = 'success'
              }
              this.$message({
                message: res.msg,
                type: type
              });
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
.banner{
  height: 730px;
  background: url('~assets/img/tt_banner.png') center center no-repeat;
  background-size: cover;
  color: #ffffff;
  position: relative;
  .tt_logo{
    position: absolute;
    left: 50px;
    top: 48px;
    width: 104px;
  }
  .banner_main{
    width: 1120px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .banner_desc{
      width: 520px;
      h2{
        font-size: 38px;
        line-height: 54/50;
        font-weight: bold;
        letter-spacing: 0px;
        text-transform: uppercase;
      }
      .tit{
        font-size: 22px;
        line-height: 22/20;
        font-weight: normal;
        font-stretch: normal;
        margin: 40px 0;
      }
      .cont{
        	font-size: 16px;
          line-height: 22/16;
      }
    }
    .banner_form{
      width: 520px;
      padding: 36px 40px;
      background: url("~assets/img/bg_black.png") left top repeat;
      border-radius: 5px;
      p{
        font-size: 18px;
        line-height: 20/18;
      }
      .form-item, .note{
        margin-top: 32px;
      }
    }
  }
}
.game_progress{
  padding: 108px 0;
  border-top: 1px solid transparent;
  h2{
    text-align: center;
    font-size: 45px;
    line-height: 41/45;
    letter-spacing: 0px;
    color: #00b096;
    margin-bottom: 62px;
  }
  .game_progress_main{
    width: 1120px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: top;
    dl{
      width: 353px;
    }
    dd{
      strong{
        font-size: 22px;
        line-height: 1;
        color: #00b096;
        display: block;
        text-align: center;
        margin: 14px 0 20px;
      }
      p{
        font-size: 16px;
        line-height: 18/16;
        letter-spacing: 0px;
        color: #666666;
      }
    }
  }

}
</style>
<style lang="less">
  #meidongaudio{
    .banner_form{
      .el-select {
        width: 100%;
        height: 33px;
      }
      .el-input--mini .el-input__inner{
        height: 33px;
      }
      .el-button{
        background-color: #00b096;
        border: 0;
      }
    }
  }
  body .el-message{
    top: 1%;
  }
</style>
