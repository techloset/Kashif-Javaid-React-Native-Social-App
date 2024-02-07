import { db } from '../../../config/Firebase';
import { useEffect, useState } from 'react';

export function useHome() {
    const [data, setData] = useState<any>([]);

    const fetchUsers = async () => {
        try {
            const responce = await 
            db.collection("Images")
              .get();
    
            const fetchData = responce.docs.map((doc) => doc.data());
            setData(fetchData);
            console.log(fetchData);
            
          } catch (error) {
            console.error("Error fetching locations:", error);
          }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return {
        data
    };
}
