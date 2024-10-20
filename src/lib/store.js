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
  experience: {
    company: "",
    role: "",
    type: "",
    from: "",
    to: "",
    description: "",
    tech: "",
  },
  sills: {
    languages: "",
    libraries: "",
    tools: "",
  },
  projects: {
    title: "",
    url: "",
    from: "",
    to: "",
    description: "",
    tech: "",
  },
  education: {
    degree: "",
    college: "",
    grades: "",
    from: "",
    to: "",
  },
  certifications: {
    name: "",
    authority: "",
    url: "",
    from: "",
    to: "",
  },
  recognitions: {
    name: "",
    description: "",
    from: "",
    to: "",
  },
});
