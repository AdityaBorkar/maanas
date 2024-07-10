import yup from '@/libraries/yup'

// Schema:
export const NewProjectSchema = yup
  .object()
  .shape({ title: yup.string('Project Name') })
