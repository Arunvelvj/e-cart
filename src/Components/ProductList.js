import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddCourse = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="floatLabel">
        <Form.Control
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-text"
          type="text"
        />
        <Form.Label>Course Title</Form.Label>
      </Form.Group>
      <Form.Group className="floatLabel">
        <Form.Control
          as="textarea"
          rows="3"
          size="lg"
          className="form-text"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Label>Description</Form.Label>
      </Form.Group>
      <Form.Group className="floatLabel">
        <Form.Control
          size="lg"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="form-text"
          type="text"
        />
        <Form.Label>Color Code</Form.Label>
      </Form.Group>
      <Form.Group>
        <Button type="submit">Add Course</Button>
      </Form.Group>
    </Form>
  );
};
export default AddCourse;
