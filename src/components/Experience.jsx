import { Sheet } from '@mui/joy';

const Experience = () => {
    return (
        <Sheet direction="column" spacing={2}
        sx={{
        backgroundColor: 'black',
        padding: '20px',
        textApgn: 'center',
        margin: '40px'
        }}>

        <div>
            <h2>Experience <em>& Education</em></h2>
        </div>

            <div className="experience-entry">
                <h3><em>Full-Stack Software Development Course</em></h3>
                    <h4>May 2024 - Present</h4>
                        <h5>The Jump Digital School</h5>

        <div>
            <p><em>
                Key Points:
                </em></p>
        </div>

        <div>
                <p>Enthusiastic about design discussions, team planning, and estimation.</p>
                <p>Strong communicator, skilled in cross-disciplinary collaboration.</p>
                <p>Quick learner, adept at picking up new technologies to build scalable systems.</p>
                <p>Skilled in problem-solving and task breakdown.</p>
                <p>Proficient in responsive, accessible design implementation.</p>
                <p>Knowledgable in JavaScript and concepts such as Object Oriented Programming (Encapsulation, Inheritance and Polymorphism.) </p>
                <p>Experienced in crafting responsive UI with HTML, CSS (Flexbox, CSS Grid), React and Material UI.</p>
        </div>

        <div>
            <p><em>Projects</em></p>
        </div>

        <div>
                <p>I have demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the To Do App DOM and Object Oriented Programming elements have been
                incorporated and then built upon these again in the Car’s Application using React’s Single Page Application and API data.</p>
                <p>When I finished the Introduction to Web Development course with Code First Girls, I built the first iteration of The Little Library to exhibit the skills I’d learnt and to build on them.
                The foundation of the site was constructed using HTML and CSS with Bootstrap elements to elevate the UI. Since finishing The Jump Bootcamp, I developed the second iteration of The Little
                Library. This time I used React and Vite as the project framework and built upon this using MUI
                library for the UI elements. I’ve enjoyed the project, redesigning the site and working to produce the same views with more efficient code. Although I’m still working on finishing the second iteration, already
                I’ve experienced the tangible benefit of a Single Page Application and developing re-useable code.</p>
        </div>
</div>

        <div className="experience-entry">
            <div>
                <h3><em>Business Analyst</em></h3>
                <h4>January 2023 - Present</h4>
                <h5>Jet2.com & Jet2Holidays</h5>
            </div>
            <div>
                <p>Worked on large and complex change initiatives through the full Software Development lifecycle, leading on the analysis stage, with the aim of revolutionising the
                On Holiday experience for customers and overseas colleagues. </p>
                <p> Collaborate with Developer and Test Team members, Solutions and Data Architects, User Experience and Product Owner when leading Agile Ceremonies, flexing communication style to
                ensure clarity of requirements is determined. Work to ensure positive outcomes from each session by bringing all views into the discussion while keeping the conversation on topic with the
                ultimate goal of ensuring functionality is fit for purpose. </p>
                <p> Process mapping of ‘as is’ and ‘to be’ processes considering the wider business and industry context as well as any gaps or pain points identified. Experience of working with
                Azure Dev Ops and Confluence, Visio and Miro to document these requirements and risks. </p>
                <p>Extensive experience of working in Agile methodology and enjoys the fast paced nature of delivering iteratively and ‘failing fast’</p>
                <p> BCS Certificates in Requirements Engineering & BCS Foundation in Business Analysis </p>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h3><em>Introduction to Web Development</em></h3>
                <h4>January 2023 - February 2023</h4>
                <h5>Code First Girls</h5>
            </div>
            <div>
                <p>Completed an 8 week course in Web Development, where I learnt the foundations of HTML, CSS & JavaScript</p>
                <p>Created The Little Library Website using skills I learnt and presented it back to the group. </p>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h3><em>Business Analyst</em></h3>
                <h4>June 2022 - January 2023</h4>
                <h5>Wm Morrisons Supermarkets</h5>
            </div>
            <div>
                <p>Business Analyst aligned to an agile Product Manager, Solutions Architect, the wider development team and testers gathering requirements for roadmap features, ensuring they meet the
                strategic business objectives and keep customer experience at the core of the solution.</p>
                <p>Also worked within the waterfall framework on a large scale programme of change to the Online Groceries website and applications.</p>
                <p>Managed conflicting requirements by encouraging compromise and influencing where necessary.</p>
                <p>Utilised user story mapping to analyse processes, functional and non-functional requirements and to ensure accurate understanding of proposed business changes, which were fed into
                the Acceptance Criteria.</p>
                <p>Communicated requirements back to technical teams to support testers in documenting test scripts, ensuring test cases covered all requirements accurately.
                Worked with developers on the implementation making sure the end result was driven by the desire to deliver a quality and impactful end solutions.</p>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h3><em>Technology Specialist - Retail Service Delivery</em></h3>
                <h4>Sept 2021 - June 2022</h4>
                <h5>Wm Morrisons Supermarkets</h5>
            </div>
            <div>
                <p>Owned the maintenance of the systems which support all in-store checkouts and their associated technologies. </p>
                <p> First point of contact to a complex network of business and technology stakeholders for non-routine queries and technology incidents.</p>
                <p>Analysed data as well as customer and stakeholder feedback to innovate and simplify the service design and to improve the customer experience.</p>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h3><em>Technology & Digital Graduate Scheme</em></h3>
                <h4>Sept 2019 - August 2021</h4>
                <h5>Wm Morrisons Supermarkets</h5>
            </div>
            <div>
                <p>Completed placements working as a Scrum Master and Project Manager with the overall scheme outcomes of experience and visibility of project lifecycle and project management frameworks.</p>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h2><em>Education</em></h2>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h4><em>University of Leeds</em> - MSc Climate Change & Environmental Policy</h4>
                <h5>Sept 2017 - December 2018</h5>
                <h6>Achieved Merit</h6>
            </div>
        </div>


        <div className="experience-entry">
            <div>
                <h4><em>University of Leeds</em> - BA Geography</h4>
                <h5>Sept 2014 - August 2017</h5>
                <h6>Achieved 2:1</h6>
            </div>
        </div>


    </Sheet>

    )
}
export default Experience;
