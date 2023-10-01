import MyWorkExperience2 from '../my-work-experience';
import Skills2 from '../skills';

const MyExperienceAndSkills = () => (
  <section className='expSkillWrap grid xl:grid-cols-2 grid-cols-1 relative w-full'>
    <MyWorkExperience2 />
    <Skills2 />
  </section>
);

export default MyExperienceAndSkills;
