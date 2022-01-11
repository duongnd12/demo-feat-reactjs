import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";    

const Paragraph = () => {
    const context = useContext(ThemeContext)
    
    return (
        <div>
            <p className={context.color}>
            We organise what we write into sentences and paragraphs. A paragraph begins on a new line within the text and there is often a blank line between paragraphs. A paragraph usually contains more than one sentence and it is usually about one topic. …
            </p>
        </div>
    )
};

export default Paragraph;
