import { z } from "zod";

export const signinSchema = z.object({
  username: z
    .string()
    .min(1, "نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),

  password: z
    .string()
    .min(1, "رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
});

const nationalCodeRegex = /^\d{10}$/;
const birthdayRegex = /^(13|14)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
export const signupSchema = z
  .object({
    firstname: z
      .string()
      .trim()
      .min(1, "نام نمی تواند خالی باشد")
      .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),

    lastname: z
      .string()
      .trim()
      .min(1, "نام خانوادگی نمی تواند خالی باشد")
      .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد"),

    nationalcode: z
      .string()
      .min(1, "وارد کردن کد ملی الزامی است")
      .regex(nationalCodeRegex, "کد ملی باید ۱۰ رقم باشد"),

    birthdaydate: z
      .string()
      .regex(birthdayRegex, "فرمت صحیح باید بصورت 1402/02/07 باشد")
      .refine((value) => {
        const year = Number(value.split("/")[0]);

        const currentYear = new Date().getFullYear() - 621;

        return currentYear - year <= 100;
      }, "سن نمی‌تواند بیشتر از 100 سال باشد"),

    placeofissue: z.string().trim().min(2, "محل صدور الزامی است"),

    password: z
      .string()
      .min(
        8,
        "رمز عبور باید حداقل ۸ کاراکتر و شامل حروف بزرگ و کوچک و ارقام باشد",
      )
      .regex(/[A-Z]/, "حداقل یک حرف بزرگ وارد کنید")
      .regex(/[a-z]/, "حداقل یک حرف کوچک وارد کنید")
      .regex(/[0-9]/, "حداقل یک عدد وارد کنید"),

    confirmpassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
    terms: z.literal(true, {
      error: () => ({
        message: "پذیرش قوانین و مقررات الزامی است",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "رمز عبور و تکرار آن یکسان نیست",
    path: ["confirmpassword"],
  });

export const forgetpasswordSchema = z.object({
  unicode: z.union([
    // z.string().regex(/^\d{10}$/, ""),
    z
      .string()
      .min(1, "وارد کردن دانشجویی الزامی است. ")
      .regex(/^\d{14}$/, "شماره دانشجویی صحیح نمی‌باشد.")
  ]),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .regex(/^\d{5}$/, "کد تأیید باید شامل ۵ رقم باشد"),
});