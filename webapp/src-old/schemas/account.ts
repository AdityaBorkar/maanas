import yup from "@/libraries/yup";

// Schema:
export const AccountDetailsSchema = yup.object().shape({
  fname: yup.string("First Name"),
  email: yup.string("Email Address"),
  whatsapp: yup.string("WhatsApp Number (+91)"),
  diaryNotifyTime: yup.string("Diary Notification Time"),
});
