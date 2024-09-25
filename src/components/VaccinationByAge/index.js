// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="age-container">
      <h1 className="vaccine-heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByAgeDetails}
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill=" #5a8dee" />
          <Cell name="44-60" fill=" #2cc6c6" />
          <Cell name="Above 60" fill="#6c757d" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByAge
