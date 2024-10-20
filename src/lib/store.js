import { reactive } from "vue";

export const store = reactive({
  basic: {
    name: "",
    website: "",
    github: "",
    linkedin: "",
    email: "",
    phone: "",
  },
  experience: [],
  sills: {
    languages: "",
    libraries: "",
    tools: "",
  },
  projects: [],
  education: [],
  certifications: [],
  recognitions: [],
});
