<template>
  <article>
  <div class="wrapper">
      <h2>Оставить заявку</h2>
      <div class="card" @submit.prevent="submit">
        <div class="content">
        <div class="a-side">
          <my-input
              type="text"
              v-model="form.name.value"
              placeholder="Фио"
              class="input"
          />
          <my-input
              type="email"
              v-model="form.email.value"
              placeholder="Email"
              class="input"
          />
          <my-input
              type="tel"
              v-model="form.tel.value"
              placeholder="Телефон"
              class="input"
              :class="{invalid: !form.tel.valid && form.tel.touched}"
              @blur="form.tel.blur"
              :type="'main'"
              v-phone
          />
          <small v-if="form.tel.touched && form.tel.errors.required" style="color:#ff7b47; margin-left: 10px">Введите
            номер телефона</small>
          <small v-else-if="form.tel.touched && form.tel.errors.minLength" style="color:#ff7b47; margin-left: 10px">Недостаточное
            кол-во символов 8. Символов сейчас {{ form.tel.value.length }}</small>

          <my-input
              type="tel"
              v-model="form.equipment_name.value"
              placeholder="Название оборудования"
              class="input"
              :type="'main'"
          />
          <textarea
              v-model="form.des.value"
              placeholder="Опишите проблему"
              class="input"
          />
          <div class="upload">
            <input
                class="input__file"
                type="file"

                @change="onChange($event)"
                multiple
            >
            <div class="file-dummy" :style="green">
              <div class="success" :style="view">Файл выбран</div>
              <div class="default" :style="noview">Прикрепите фото</div>
            </div>

            <!--          <a :href="f(`Заявка%20на%20перевозку%20груза.docx`)" target="_blank" class="sub">Скачать файл</a>-->
          </div>

          <BlueButton class="btn" type="submit" @click="submit" :disabled="!form.valid">Отправить</BlueButton>
        </div>
        <div class="b-side">
          <div class="container__img">
            <img src="../../assets/application/621661d8beecbdc7b9abf57c1560bc69.jpg"/>
          </div>
          <div class="social">
            <div class="text">Контакты для связи: </div>
            <div class="social__icons">
              <img src="../../assets/application/tild3164-3566-4132-b230-623461383964__vk_1.svg" />
              <img src="../../assets/application/tild6136-3964-4238-b966-376136613231__telegram_1_1.svg" />
              <img src="../../assets/application/tild3331-6637-4262-b563-366262303762__group_1330.svg" />
            </div>
          </div>
        </div>
        </div>

      </div>
    <my-dialog v-model:show="dialogVisible">
      <div class="modal">
        <!--        <img src="../../assets/dialog/done.svg" />-->
        <h1>Спасибо</h1>
        <p>В ближайшее время с Вами свяжется наш специалист</p>
      </div>
    </my-dialog>

  </div>

  </article>
</template>

<script>
import BlueButton from "../UI/BlueButton.vue";
import MyInput from "../UI/MyInput.vue";
import {useFetchSub, useSubmit} from "../hooks/MainPage/useSubmit";
import {onMounted, ref, watch} from "vue";
import MyDialog from "../UI/MyDialog.vue";
import {useAnimationSubmit} from "../hooks/MainPage/useAnimationSubmit.js";

const required = val => !!val
const minLength = num => val => val.length >= num
export default {
  components: {MyDialog, MyInput, BlueButton},

  setup() {
    const file = ref(null)
    const changeInput = ref(false)
    const dialogVisible = ref(false)
    const form = useSubmit({
      name: {
        value: '',
      },
      email: {
        value: '',
      },
      equipment_name: {
        value: '',
      },
      des: {
        value: '',
      },
      tel: {
        value: '',
        validators: {required, minLength: minLength(8)}
      }
    });

    function onChange(event) {
      file.value = event.target.files[0]

      let files = event.target.files || event.dataTransfer.files;
      if (files.length) changeInput.value = true;
      else changeInput.value = true;
    }

    const submit = async () => {
      if (201 === await useFetchSub(form, file.value)) {
        dialogVisible.value = true
      } else alert('Ошибка')
    }

    function f(path) {
      return `${import.meta.env.VITE_APP_API_URL}/documents/${path}`
    }

    const {view, noview, green} = useAnimationSubmit(changeInput)

    return {form, submit, onChange, view, noview, green, dialogVisible, f}
  },

}
</script>

<style scoped lang="scss">
article{
  display: flex;
justify-content: center;
  align-items: center;
}
h2 {
  margin-top: 90px;
  margin-bottom: 20px;
}

.wrapper {
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 50px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 15px 15px 15px 15px rgba(0, 0, 0, 0.07);
}
.content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.a-side {
 width: 50%;
}

.b-side {

  .container__img {
    img{
      border-radius: 20px;
      width: 100%;
      height: 500px;
    }
  }
  .social{
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: right;
    .social__icons{
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      width: 100px;
    }
    img{
      width: 25px;
      height: 25px;
    }
  }
}

.upload {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.file-area {
  width: 100%;
  position: relative;
}

.file-dummy {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 58px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px dashed #252b42;
  border-radius: 20px;
  text-align: center;
  transition: background 0.3s ease-in-out;
}

.file-dummy:hover {
  background: rgba(255, 255, 255, 0.1);
}

.input__file {
  position: absolute;
  width: 50%;
  opacity: 0;
  cursor: pointer;
}

.input__file:focus + .file-dummy {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline: -webkit-focus-ring-color auto 5px;
}

.input {
  font-family: Gotham, serif;
  border-radius: 20px;
  margin: 5px 0;
}

input[type='text'] {
  font-size: 16px;
}
textarea{
  width: 510px !important;
}
.invalid {
  border-color: #000000;
}

.sub {
  display: flex;
  width: 100%;
  margin-left: 1%;
  min-height: 58px;
  color: #252B42;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border: 2px dashed #252b42;
  border-radius: 20px;
  text-align: center;
  transition: background 0.3s ease-in-out;
  text-decoration: none;
}

.btn {
  margin-top: 15px;
  width: 100%;
  height: 58px;

  &:hover {
    border-color: #000000;
  }

}

.modal {
  text-align: center;

  img {
    margin: 0 auto;
    width: 150px
  }
}

@media (max-width: 1024px) {
  .card{
    width: 80% !important;
  }
  .b-side{
    display: none;
  }
  .a-side{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .input{
      width: 250px;
    }
  };
  .card{
    width: 400px;
    justify-content: center;
  }
  textarea{
    width: 89% !important;
  }
}




@media (max-width: 425px) {
  .wrapper{
    width: 100%;
  }
  .card {
    padding: 15px 25px;
  }
}

textarea {
  border-radius: 20px;
  font-size: 16px;
  font-family: Gotham, serif;
  max-width: 600px;
  padding: 15px;
  width: 100%;
  margin: 5px 0;
  height: 60px;
}
</style>