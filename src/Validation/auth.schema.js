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

export const signupSchema = z.object({
  firstname: z
    .string()
    .min(1, "نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل 3 کاراکتر باشد"),

  password: z
    .string()
    .min(1, "رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
});
