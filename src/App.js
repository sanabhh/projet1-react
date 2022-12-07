
import './App.css';
import { Button, Form } from "react-bootstrap"
import Test from './componants/navbar';

function App() {
  return (
    <div>
      <Test/>
<Form>
      <fieldset disabled>
        <div className='groupenav'>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        </div>
      </fieldset>
    </Form></div>
  );
}

export default App;
