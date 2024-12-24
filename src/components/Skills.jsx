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
            <h2>Development <em>Skills</em></h2>
                <h3><em>Working knowledge of:</em></h3>
                <img src="./assets/skill-set.png" alt="Little Library Version 1" style={{ maxWidth: '100%' }} />
        </div>

        <div>
            <h3><em>
            Awareness of:
                </em></h3>
        </div>

        <div>
            <p>SASS/SCSS, GraphQL, ESLint, Typescript, Vitest, Cypress, MongoDB, Next.js, Docker, Postgress </p>
        </div>

    </Sheet>

    )
}
export default Experience;
