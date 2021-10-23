import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function NewsForm(props){
  
  const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    let formInfo = event.target.elements;

  let sendFormData = {
    "newsTitle": formInfo.Title.value,
    "postedBy": user.name,
    "newsContent": formInfo.article.value,
  }
  console.log(sendFormData)

  const saveNewsPost =  async() => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const token =await getAccessTokenSilently();
    console.log(token)

    const sendData = await axios({
      url: `${serverUrl}/api/newsletter`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: sendFormData
    });
    return sendData
  }
  saveNewsPost();
  }

return(
  isAuthenticated && (
    <div className="newsForm">
      <h2>admin newsletter post</h2>
      <Form  className='newsFormBody' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="Text" placeholder="Fancy News Title Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="article">
          <Form.Label>BIG RAVENMOORE NEWS goes here in all of its wonderful glory</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button href='#/news' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
)

}
export default NewsForm;