import React, {useState, useEffect} from 'react'

const About = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let mounted = true;
        async function fetchData() {
            const a = await fetch('https://jsonplaceholder.typicode.com/posts');
            const b = await a.json();

            const newData = b.map(item => ({
                id: item.id,
                title: item.title,
            }))

            if (mounted) {
                setData(newData);
            }
        }
        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

  return (
    <div>
        <h1>About</h1>
        <p>This is About page.</p>
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default About