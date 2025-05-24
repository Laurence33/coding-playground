import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar } from '../store';

export default function CarForm() {
  const form = useSelector((state) => state.form)
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  }

  const handleCostChange = (event) => {
    const numberCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(numberCost));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar(form))
    dispatch(changeName(''))
    dispatch(changeCost(''))
  }

  return <div className="car-form-panel">
    <h4 className="subtitle is-3">Add Car</h4>
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <div className="field">
          <label className="label">Name</label>
          <input className="input is-expanded"
            value={form.name}
            onChange={handleNameChange}
          />
        </div>

        <div className="field">
          <label className="label">Cost</label>
          <input className="input is-expanded"
            value={form.cost || ''}
            onChange={handleCostChange}
          />
        </div>
      </div>
      <div className="field">
        <button className="button is-link">Submit</button>
      </div>
    </form>
  </div>
}