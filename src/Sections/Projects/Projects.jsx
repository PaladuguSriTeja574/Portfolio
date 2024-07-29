import styles from "./ProjectsStyle.module.css"
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/raghavendra-10/clgtwitter"
          h3="Communication-App"
          p="Interaction with others"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PaladuguSriTeja574/LLIntern/tree/main/Restaurent"
          h3="Restaurent Site"
          p="Ordering/Booking Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PaladuguSriTeja574/Lenskart-landing"
          h3="Lenskart Landing page"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PaladuguSriTeja574/Encrypt"
          h3="Encryption"
          p="Provides Message Encryption"
        />
      </div>
    </section>
  );
}

export default Projects;
