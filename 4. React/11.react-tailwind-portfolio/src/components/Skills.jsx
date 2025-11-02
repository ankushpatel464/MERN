import Section from "./Section";
import { Code } from 'lucide-react';
import Pill from "./Pill";

const Skills = () => {
    const skillTitles = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "Java", "C/C++","Machine Learning"];
    return <Section icon={<Code/>} sectionTitle="Skills">
        {skillTitles.map(title =>
            <Pill key={title} title={title}></Pill>
        )}
    </Section>
}

export default Skills;