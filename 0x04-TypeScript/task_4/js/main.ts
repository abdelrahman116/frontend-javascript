namespace Subjects {
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };
  cpp.setTeacher(cTeacher);
  const cppRequirements = cpp.getRequirements();
  const cppAvailableTeacher = cpp.getAvailableTeacher();
  console.log(cppRequirements);
  console.log(cppAvailableTeacher);

  java.setTeacher(cTeacher);
  const javaRequirements = java.getRequirements();
  const javaAvailableTeacher = java.getAvailableTeacher();
  console.log(javaRequirements);
  console.log(javaAvailableTeacher);

  react.setTeacher(cTeacher);
  const reactRequirements = react.getRequirements();
  const reactAvailableTeacher = react.getAvailableTeacher();
  console.log(reactRequirements);
  console.log(reactAvailableTeacher);
}
