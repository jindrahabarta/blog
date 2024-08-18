import useDb from "./useDb";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFetchCollection = (collectionName) => {
  const db = useDb();
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // vytvorim query do kolekce blogs
    const q = query(collection(db, collectionName), orderBy("createdAt"));

    // vrati mi aktualni data z databaze , pokud se tam neco zmeni
    onSnapshot(
      q,
      (querySnapshot) => {
        const data = [];

        // potrebuju pretransformovat data do pouzitelne podoby a dostat do noveho pole
        querySnapshot.forEach((doc) => {
          const document = { ...doc.data(), id: doc.id };
          data.push(document);
        });

        // nasetuju pretransfrormovana data
        setData(data);
        setLoaded(true);
      },
      () => {
        setError(true);
        setLoaded(true);
      }
    );
  }, []);

  return { data, loaded, error };
};

export default useFetchCollection;
