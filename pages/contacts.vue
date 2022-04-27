<template>
  <main class="content contacts">
    <div class="container container_display">
      <div class="row contacts__container">
        <div class="contacts-info col-xl-5 col-lg-6">
          <div class="contacts-info__container">
            <div class="contacts-info__head">
              <h1 class="contacts-info__title contacts__animate-item">
                Контакты
              </h1>
              <p class="contacts-info__description contacts__animate-item">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>
            <div class="contacts-info__content">
              <span class="line contacts__animate-item"></span
              ><a
                class="contacts-info__link contacts__animate-item"
                href="tel:89038502052"
                >8 903 850 2052</a
              ><a
                class="contacts-info__link contacts__animate-item"
                href="mailto:mailbox@artica.art"
                >mailbox@artica.art</a
              >
            </div>
          </div>
        </div>
        <div class="contacts-form col-xl-4 col-lg-6">
          <div class="contacts-form__container">
            <div class="contacts-form__succes-message d-none">
              <div
                class="
                  contacts-form__succes-message-text
                  contacts__animate-item
                "
              >
                Сообщение успешно отправлено, мы свяжемся с вами в ближайшнее
                время!
              </div>
            </div>
            <div ref="formContainer" class="contacts-form__content">
              <h2 class="contacts-form__title contacts__animate-item">
                Обратная связь
              </h2>
              <form @submit.prevent="submit" class="contacts-form__form">
                <div class="contacts-form__group row">
                  <div class="contacts-form__input col-lg-6">
                    <div
                      class="input contacts__animate-item"
                      :class="{ focused: form.name.isFocus }"
                    >
                      <label class="input__label" :for="form.name.id"
                        >Имя</label
                      >
                      <input
                        class="input__element"
                        type="text"
                        :name="form.name.id"
                        :id="form.name.id"
                        v-model="form.name.value"
                        @input="input(form.name, $event.target, 0)"
                        @focus="inputFocus(form.name)"
                        @blur="inputBlur(form.name)"
                      /><span class="input__line" />
                      <CorrectIcon class="input__icon" />
                    </div>
                  </div>
                  <div class="contacts-form__input col-lg-6">
                    <div
                      class="input contacts__animate-item"
                      :class="{ focused: form.phone.isFocus }"
                    >
                      <label class="input__label" :for="form.phone.id"
                        >Телефон</label
                      >
                      <input
                        class="input__element"
                        type="text"
                        :name="form.phone.id"
                        v-mask="{
                          mask: '+7 999 999-9999',
                          showMaskOnHover: false,
                          clearIncomplete: false,
                        }"
                        v-model="form.phone.value"
                        :id="form.phone.id"
                        :ref="form.phone"
                        @input="input(form.phone, $event.target, 1)"
                        @focus="inputFocus(form.phone)"
                        @blur="inputBlur(form.phone)"
                      /><span class="input__line" />
                      <CorrectIcon class="input__icon" />
                    </div>
                  </div>
                  <div class="contacts-form__input col-12">
                    <div
                      class="input contacts__animate-item"
                      :class="{ focused: form.message.isFocus }"
                    >
                      <label class="input__label" :for="form.message.id"
                        >Текст сообщения</label
                      >
                      <textarea
                        class="input__element"
                        type="text"
                        :name="form.message.id"
                        :id="form.message.id"
                        v-model="form.message.value"
                        @input="input(form.message, $event.target, 2)"
                        @focus="inputFocus(form.message)"
                        @blur="inputBlur(form.message)"
                      ></textarea
                      ><span class="input__line" />
                      <CorrectIcon class="input__icon" />
                    </div>
                  </div>
                </div>
                <div class="contacts__animate-item">
                  <button
                    class="button contacts-form-button"
                    :class="{ active: totalCorrects === 3 }"
                    type="submit"
                  >
                    Отправить
                    <svg
                      class="contacts-form-button__icon"
                      viewBox="0 0 24.5 7.4"
                      fill="currentColor"
                    >
                      <path
                        d="M24.4,4c0.2-0.2,0.2-0.5,0-0.7l-3.2-3.2C21,0,20.7,0,20.5,0.1c-0.2,0.2-0.2,0.5,0,0.7l2.8,2.8l-2.8,2.8c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0L24.4,4z M0,4.2h24v-1H0L0,4.2z"
                      ></path>
                    </svg>
                    <svg
                      class="
                        contacts-form-button__icon contacts-form-button__loader
                      "
                      viewBox="0 0 120 30"
                      fill="currentColor"
                    >
                      <circle cx="15" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </circle>
                      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate
                          attributeName="r"
                          from="9"
                          to="9"
                          begin="0s"
                          dur="0.8s"
                          values="9;15;9"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="fill-opacity"
                          from="0.5"
                          to="0.5"
                          begin="0s"
                          dur="0.8s"
                          values=".5;1;.5"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </circle>
                      <circle cx="105" cy="15" r="15">
                        <animate
                          attributeName="r"
                          from="15"
                          to="15"
                          begin="0s"
                          dur="0.8s"
                          values="15;9;15"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="fill-opacity"
                          from="1"
                          to="1"
                          begin="0s"
                          dur="0.8s"
                          values="1;.5;1"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </circle>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CorrectIcon from "~/assets/icons/correct.svg?inline";
const speed = 1;
import { Contacts } from "~/animations";

export default {
  name: "ContactsPage",
  transition: {
    name: "contacts",
    appear: true,
    css: false,
    enter(el, done) {
      if (this.$store.getters["preloader/isFinished"]) {
        if (el.classList.contains("contacts")) {
          Contacts.getAnimations().then(() => {
            Contacts.enterAnimation.play().eventCallback("onComplete", () => {
              done();
            });
          });
        }
      } else {
        done();
      }
    },
    leave(el, done) {
      if (Contacts.enterAnimation) {
        Contacts.enterAnimation
          .reverse(0)
          .eventCallback("onReverseComplete", () => {
            done();
          });
      } else {
        done();
      }
    },
  },
  components: {
    CorrectIcon,
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
  },
  watch: {
    isPreloaderFinished() {
      Contacts.getAnimations().then(() => {
        Contacts.enterAnimation.play();
      });
    },
  },
  data() {
    return {
      animateItems: null,
      inputPhoneModel: "",
      form: {
        name: {
          id: "name",
          value: "",
          isFocus: false,
          validate: {
            pattern: new RegExp(/^[A-zА-яЁё]{2,50}$/),
          },
          isCorrect: false,
        },
        phone: {
          id: "phone",
          value: "",
          isFocus: false,
          validate: {
            pattern: new RegExp(/^\+7 \d{3}\ \d{3}\-\d{4}$/),
          },
          isCorrect: false,
          mask: {
            mask: "+7 ### ###-##-##",
            showMaskOnHover: false,
            clearIncomplete: false,
          },
        },
        message: {
          id: "text",
          value: "",
          isFocus: false,
          validate: {
            pattern: new RegExp(/^.{2,200}$/),
          },
          isCorrect: false,
        },
      },
      animation: [],
      totalCorrects: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.refFormContainer = this.$refs.formContainer;
    });
  },
  methods: {
    inputFocus(obj) {
      obj.isFocus = true;
    },
    inputBlur(obj) {
      if (!obj.value.length) {
        obj.isFocus = false;
      }
    },
    input(obj, target, idx) {
      const parent = target.parentNode;
      if (obj.validate.pattern.test(obj.value)) {
        obj.isCorrect = true;
      } else {
        obj.isCorrect = false;
      }
      if (obj.isCorrect && !parent.classList.contains("valid")) {
        this.totalCorrects += 1;
        parent.classList.add("valid");
        const $icon = parent.querySelector(".input__icon"),
          $check = $icon.querySelector("path"),
          w = $check.getTotalLength();
        this.animation[idx] = this.$gsap
          .timeline()
          .set($icon, { autoAlpha: 1 })
          .set($check, { css: { "stroke-dasharray": w } })
          .fromTo(
            $check,
            { css: { "stroke-dashoffset": w } },
            {
              duration: speed,
              css: { "stroke-dashoffset": 0 },
              ease: "power2.out",
            }
          );
      } else if (!obj.isCorrect && parent.classList.contains("valid")) {
        this.totalCorrects -= 1;
        parent.classList.remove("valid");
        this.animation[idx].timeScale(2).reverse();
      }
    },
    submit() {
      if (this.totalCorrects < 3) {
        return;
      }
      this.$gsap.to(this.refFormContainer, {
        autoAlpha: 0.5,
        duration: speed / 2,
        ease: "power2.inOut",
      });
      this.refFormContainer.classList.add("loading");
      // try {
      //   await this.$axios.$post('https://backs.artica.art/backend/api/en', {
      //   name: this.form.name.value,
      //   phone: this.form.phone.value,
      //   message: this.form.message.value
      // })
      // .then((res) => {
      //       console.log(res);
      // });
      // }
      // catch (err) {
      //   console.log(err);
      // }
    },
  },
};
</script>
