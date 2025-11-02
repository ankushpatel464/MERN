import { Heart } from 'lucide-react';
import Section from "./Section";
import List from './List';

const Hobbies = () => {
    const hobbies = ["Playing and Watching Cricket", "Reading about Current Affairs", "Listening Music", "Binge Watching"];
    return <Section icon={<Heart/>} sectionTitle="Hobbies">
        <List items={hobbies}></List>
    </Section>
}

export default Hobbies;