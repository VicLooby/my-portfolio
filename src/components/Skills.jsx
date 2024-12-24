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
            <h2>Development Skills</h2>
                <h3>Working knowledge</h3>
                <img src="./assets/skill-set.png" alt="Little Library Version 1" style={{ maxWidth: '100%' }} />
        </div>

        <div>
            <p><em>
                Key Points:
                </em></p>
        </div>

        <div>
            <ul>
                <li>Enthusiastic about design discussions, team planning, and estimation.</li>
            </ul>
        </div>
        




      </Sheet>

    )
}
      
export default Experience;
