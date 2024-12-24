import { Sheet } from '@mui/joy';

const Experience = () => {
    return (
        <Sheet direction="column" spacing={2}
        sx={{
        backgroundColor: 'black',
        padding: '20px',
        textAlign: 'center',
        margin: '40px'
        }}>

        <div>
            <h2>Experience & Education</h2>
                <h3>Full-Stack Software Development Course</h3>
                    <h4>May 2024 - Present</h4>
                        <h5>The Jump Digital School</h5>
        </div>

        <div>
            <p><em>
                Key Points:
                </em></p>
        </div>

        <div>
            <ul>
                <li>Enthusiastic about design discussions, team planning, and estimation.</li>
                <li>Strong communicator, skilled in cross-disciplinary collaboration.</li>
                <li>Quick learner, adept at new technologies and building scalable systems.</li>
                <li>Skilled in problem-solving and task breakdown.</li>
                <li>Proficient in responsive, accessible design implementation.</li>
                <li>Knowledgable in JavaScript and concepts such as Object Oriented Programming, asynchronous programming, closures, encapsulation, polymorphism.</li>
                <li>Experienced in crafting pixel-perfect, responsive UIs with HTML, CSS (Flexbox, CSS Grid), React, Material UI, and Styled Components.</li>
            </ul>
        </div>
        
        <div>
            <p><em>Projects</em></p>
        </div>
        
        <div>
            <ul>
                <li>Demonstrated application of CRUD operations in the Books Directory Console App and then built upon these with the  To Do App where we incorporated DOM and Object Orientated Programming and then incporated React SPA and API data to make the Cars Application.</li>
                <li>When I finished the Introduction to Web Development course with Code First Girls, I built the first iteration of The Little Library to exhibit the skills I learnt and to build on them. The foundation of the site was constructed using HTML and CSS with Bootstrap elements to elevate the UI. Since finishing The Jump Bootcamp, I developed the second iteration of The Little Library. This time I used React and Vite as the project framework and built upon this using MUI library for the UI elements.</li>
                <li>I’ve enjoyed the project, redesigning the site and working to produce the same views with more efficient code. Although I’m still working on finishing the second iteration, already I’ve experienced the tangible benefit of a Single Page Application and developing re-useable code.</li>
            </ul>
        </div>
        <div>
            <h3>Business Analyst</h3>
            <h4>January 2023 - Present</h4>
            <h5>Jet2.com & Jet2Holidays</h5>
        </div>
        <div>
            <ul>
                <li>Worked on large and complex change initiatives through the full Software Development Lifecycle, leading on the analysis stage, with the aim of revolutionising the On Holiday experience for customers and overseas colleagues. </li>
                <li> Collaborate with Developer and Test Team members, Solutions and Data Architects, User Experience and Product Owner when leading Agile Ceremonies, flexing communication style to ensure clarity of requirements is determined. Work to ensure positive outcomes from each session by bringing all views into the discussion while keeping the conversation on topic with the ultimate goal of ensuring functionality is fit for purpose. </li>
                <li> Process mapping of ‘as is’ and ‘to be’ processes considering the wider business and industry context as well as any gaps or pain points identified. Experience of working with Azure Dev Ops and Confluence, Visio and Miro to document these requirements and risks. </li>
                <li>Extensive experience of working in Agile methodology and enjoys the fast paced nature of delivering iteratively and ‘failing fast’</li>
                <li> BCS Certificate in Requirements Engineering & BCS Foundation in Business Analysis </li>
            </ul>
        </div>

        <div>
            <h3>Introduction to Web Development</h3>
            <h4>January 2023 - February 2023</h4>
            <h5>Code First Girls</h5>
        </div>
        <div>
            <ul>
                <li>Completed an 8 week course in Web Development, where I learnt the foundations of HTML, CSS & JavaScript</li>
                <li>Created The Little Library Website using skills I learnt and presented it back to the group. </li>
            </ul>
        </div>
        <div>
            <h3>Business Analyst</h3>
            <h4>June 2022 - January 2023</h4>
            <h5>Wm Morrisons Supermarkets</h5>
        </div>
        <div>
            <ul>
                <li>Business Analyst aligned to an agile Product Manager, Solutions Architect, the wider development team and testers gathering requirements for roadmap features, ensuring they meet the strategic business objectives and keep customer experience at the core of the solution.</li>
                <li>Also worked within the waterfall framework on a large scale programme of change to the Online Groceries website and applications.</li>
                <li>Managed conflicting requirements by encouraging compromise and influencing where necessary.</li>
                <li>Utilised user story mapping to analyse processes, functional and non-functional requirements and to ensure accurate understanding of proposed business changes, which were fed into the Acceptance Criteria.</li>
                <li>Communicated requirements back to technical teams to support testers in documenting test scripts, ensuring test cases covered all requirements accurately. Worked with developers on the implementation making sure the end result was driven by the desire to deliver a quality and impactful end solution.</li>
            </ul>
        </div>
        <div>
            <h3>Technology Specialist - Retail Service Delivery</h3>
            <h4>Sept 2021 - June 2022</h4>
            <h5>Wm Morrisons Supermarkets</h5>
        </div>
        <div>
            <ul>
                <li>Owned the maintenance of the systems which support all in-store checkouts and their associated technologies. </li>
                <li> First point of contact to a complex network of business and technology stakeholders for non-routine queries and technology incidents.</li>
                <li>Analysed data as well as customer and stakeholder feedback to innovate and simplify the service design and to improve the customer experience.</li>
            </ul>
        </div>
        <div>
            <h3>Technology & Digital Graduate Scheme</h3>
            <h4>Sept 2019 - August 2021</h4>
            <h5>Wm Morrisons Supermarkets</h5>
        </div>
        <div>
            <ul>
                <li>Completed placements working as a Scrum Master and Project Manager with the overall scheme outcomes of: Experience and visibility of project lifecycle and project management frameworks.</li>
            </ul>
        </div>
        <div>
            <h3>Education</h3>
        </div>
        <div>
            <h4><em>University of Leeds</em> - MSc Climate Change & Environmental Policy</h4>
            <h5>Sept 2017 - December 2018</h5>
            <h6>Achieved Merit</h6>
        </div>
        <div>
            <h4><em>University of Leeds</em> - BA Geogrpahy</h4>
            <h5>Sept 2014 - August 2017</h5>
            <h6>Achieved 2:1</h6>
        </div>
      </Sheet>

    )
}
      
export default Experience;
