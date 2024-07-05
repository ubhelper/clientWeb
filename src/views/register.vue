<style>
    .swiper-container {
        overflow: hidden;
    }
</style>

<template>
    <section class="section" style="background: #fff;">
        <div class="register-box">
            <div class="regist-img-box">
                <img src="@/assets/images/mappage.png" alt="">
                <img src="@/assets/images/homepage.png" alt="">
            </div>
            <div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Овог" prop="last_name">
                                <el-input type="text" v-model="ruleForm.last_name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Нэр" prop="first_name">
                                <el-input type="text" v-model="ruleForm.first_name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Регистр" prop="register">
                                <el-input type="text" v-model="ruleForm.register"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item  id="demo" label="Утасны дугаар" prop="phone_number">
                                <el-input type="text" @input="onlyNumber" v-model="ruleForm.phone_number"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="И-мэйл хаяг" prop="email">
                                <el-input type="email" v-model="ruleForm.email"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Хүйс" prop="gender">
                                <el-select v-model="ruleForm.gender" placeholder="Хүйс сонгох">
                                    <el-option label="Эрэгтэй" value="Эрэгтэй"></el-option>
                                    <el-option label="Эмэгтэй" value="Эмэгтэй"></el-option>
                                    <el-option label="Бусад" value="Бусад"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-form-item label="Нууц үг" prop="password">
                                <el-input type="password" show-password v-model="ruleForm.password"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Давтан нууц үг" prop="password_confirm">
                                <el-input type="password" show-password v-model="ruleForm.password_confirm"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <p class="pass-text montserratNormal">
                                Нууц үгээ Том жижиг үсэг тусгай тэмдэгт тоо оролцуулан 8-н тэмдэгтээс багагүй урттай үүсгэнэ үү.
                            </p>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item>
                                <el-button class="create-btn" @click="submitForm">Бүртгүүлэх</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Register",
        data() {

            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Давтан нууц үгээ оруулна уу'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('Нууц үг таарахгүй байна.'));
                } else {
                    callback();
                }
            };

            return {
                showPassword: false,
                confirmPass: false,
                ruleForm: {
                    last_name: '',
                    first_name: '',
                    register: '',
                    phone_number: '',
                    email: "",
                    gender: "",
                    password: '',
                    password_confirm: ''
                },
                rules: {
                    last_name: [
                        { required: true, message: 'Овог', trigger: 'change' }
                    ],
                    first_name: [
                        { required: true, message: 'Нэр', trigger: 'change' }
                    ],
                    register: [
                        { required: true, message: 'Регистр', trigger: 'change' },
                        { pattern: "^([А-ЯӨҮЯ]{2})([0-9]{8})$", message: 'Регистрийн дугаар буруу байна', trigger: 'change' }
                    ],
                    phone_number: [
                        { required: true, message: 'Утасны дугаар', trigger: 'change' },
                        { min: 8, message: 'Утасны дугаар зөв оруулна уу', trigger: 'change' }
                    ],
                    email: [
                        { required: true, message: 'И-мэйл', trigger: 'change' },
                        { pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$", message: 'И-мэйл зөв оруулна уу', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Хүйсээ сонгоно уу', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: 'Нууц үг', trigger: 'change' },
                        { pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$", message: 'Нууц үг шаардлага хангахгүй байна', trigger: 'change' }
                    ],
                    password_confirm: [
                        {validator: validatePass2, trigger: 'change'},
                        { required: true, message: 'Давтан нууц үг', trigger: 'change' },
                    ]
                }
            };
        },
        
        methods: {
            async submitForm() {
                let valid = await this.$refs.ruleForm.validate();
                if (!valid) {
                    return;
                }

                const params = {
                    last_name: this.ruleForm.last_name,
                    first_name: this.ruleForm.first_name,
                    register: this.ruleForm.register,
                    phone: this.ruleForm.phone_number,
                    email: this.ruleForm.email,
                    gender: this.ruleForm.gender,
                    password: this.ruleForm.password,
                    role_id: 3
                };

                const response = await this.$_request('POST', this.$appUrl+"/v1/user/register", params);
                // console.log(response, "=--==--=");
                if (response === 409) {
                    this.$notify({
                        title: 'Анхааруулга',
                        message: 'Бүртгэлтэй утасны дугаар байна.',
                        type: 'warning',
                        duration: 2500
                    });
                }else{
                    this.$notify({
                        title: 'Амжилттай',
                        message: 'Бүртгэл амжилттай хийгдлээ.',
                        type: 'success', 
                        duration: 2500
                    });
                    this.$refs.ruleForm.resetFields();
                    // this.$router.push({ path: '/', replace: true});
                }
            },

            onlyNumber(event) {
                this.ruleForm.phone_number = event.replace(/[^0-9]/g, "");
            }
            
            // handleIconClick(ev) {
            //     if (this.ruleForm.password || this.ruleForm.password_confirm) {
            //         this.showPassword = !this.showPassword
            //         console.log(this.ruleForm.password_confirm, "=-as=-a=-=-", this.ruleForm.password);
            //     }
            // }
        }
    }
</script>