import React, { useEffect, useState } from 'react';
import { Link,
  useLoaderData,
  useNavigate,
  useParams,
  redirect,
} from 'react-router-dom';

export default function Kaboom() {
  const { id } = useParams();
  const game = useLoaderData();

  if(!id) {
    return (
      <Link to='/kaboom/new'>Start New Game</Link>
    )
  }

  return (
    <>
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </>
  );
}
