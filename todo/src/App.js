import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
import { generateClient } from 'aws-amplify/api'
import { listTodos, getTodo } from './graphql/queries';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const client = generateClient();
async function storeTodo() {
  const result = await client.graphql({
    query: createTodo,
    variables: {
      input: {
        name:"wash windows"
      }
    }
  });
}

async function changeTodo() {
  const result = await client.graphql({
    query: updateTodo,
    variables: {
      input: {
        id: "89131cd8-9d98-44ff-9fe2-53b970511a3d",
        name:"updated"
      }
    }
  });
}

async function removeTodo() {
  const result = await client.graphql({
    query: deleteTodo,
    variables: {
      input: {
        id: "89131cd8-9d98-44ff-9fe2-53b970511a3d"
      }
    }
  });
}

async function fetchTodos() {
  const result = await client.graphql({
    query: listTodos
  });
  console.log(result);
}

async function fetchTodo() {
  const result = await client.graphql({
    query: getTodo,
    variables: { id: "89131cd8-9d98-44ff-9fe2-53b970511a3d"}
  });
  console.log(result);
}

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Welcome { user.username }!</h1>
          <button onClick={signOut}>Sign Out</button>
          <button onClick={storeTodo}>New Todo</button>
          <button onClick={fetchTodos}>Fetch Todos</button>
          <button onClick={fetchTodo}>Fetch Todo</button>
          <button onClick={changeTodo}>Change Todo</button>
          <button onClick={removeTodo}>Delete Todo</button>
        </main>
      )}
    </Authenticator>
  );
}
export default App;