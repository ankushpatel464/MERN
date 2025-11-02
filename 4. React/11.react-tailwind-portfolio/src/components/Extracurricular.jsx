import { Award } from "lucide-react";
import Section from "./Section";
import List from "./List";

const Extracurricular = () => {
    const curricularItems = [
    "Volunteer at Claylab Foundation for guiding students",
    "Wrote Online Articles for an NGO",
    "Taught underpriviledged kids in Covid-19 Lockdown",
    ];
    return <Section icon={<Award/>} sectionTitle="Extracurricular">
        <List items={curricularItems}></List>
    </Section>
}

export default Extracurricular;