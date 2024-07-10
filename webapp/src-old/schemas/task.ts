import yup from "@/libraries/yup";

// Schema:
export const NewTaskSchema = yup
  .object()
  .shape({ text: yup.string("Task Details") });
