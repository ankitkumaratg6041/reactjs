import User from "./User";
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
      <h1 className="title">Our Team Members</h1>
      <User name="Ankit Kumar (Function)" />
      <UserClass name="Ankit Kumar (Class)" location="Lethbridge, AB"/>
    </div>
  )
}

export default About;