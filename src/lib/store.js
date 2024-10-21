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
  skills: {
    languages: "",
    libraries: "",
    tools: "",
  },
  projects: [],
  education: [],
  certifications: [],
  recognitions: [],
});
