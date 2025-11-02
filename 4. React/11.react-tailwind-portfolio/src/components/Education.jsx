import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
    <Graduation title="Bachelor of Technology in Computer Science and Engineering  - 8.94 CGPA" school="Medi-Caps University, Indore" year="2021-2025"/>
    <Graduation title="High School" school="Delhi Public School, Jabalpur" year="2012-2021"/>
  </Section>
}

export default Education;